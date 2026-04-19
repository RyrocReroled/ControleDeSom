<template>
  <div class="app-shell">
    <NotificationsStack
      :notifications="notifications"
      @remove="removeNotification"
    />

    <SidebarNav
      :mobileMenuOpen="mobileMenuOpen"
      :isMobile="isMobile"
      :auxiliares="auxiliares"
      :selectedAuxiliarId="selectedAuxiliarId"
      :pendingChannel="pendingChannel"
      :syncLabel="syncLabel"
      :isDarkMode="isDarkMode"
      @close="closeMobileMenu"
      @select="selectAuxiliar"
      @toggle-theme="toggleDarkMode"
    />

    <!-- Botão Hamburguer Mobile (visível apenas no mobile) -->
    <Button 
      v-if="!mobileMenuOpen" 
      icon="pi pi-bars" 
      class="mobile-menu-btn p-button-rounded p-button-primary" 
      @click="toggleMobileMenu" 
      aria-label="Menu"
    />

    <!-- Overlay Mobile -->
    <div class="mobile-overlay" v-if="mobileMenuOpen" @click="closeMobileMenu"></div>

    <!-- Conteúdo Principal -->
    <main class="main-content" :class="{ 'mobile-menu-open': mobileMenuOpen }">
      <AppHeader
        :selectedAuxiliar="selectedAuxiliar"
        :globalLimits="globalLimits"
        :isCallingAttention="isCallingAttention"
        @call-attention="callAttention"
      />

      <section v-if="errorMessage" class="feedback-card error">
        {{ errorMessage }}
      </section>

      <section v-else-if="!selectedAuxiliar" class="feedback-card info">
        <div class="feedback-icon">ℹ️</div>
        <p>Crie documentos como <code>Auxiliar1</code>, <code>Auxiliar2</code> na coleção <code>Auxiliares</code></p>
      </section>

      <FaderGrid
        v-else
        :selectedAuxiliar="selectedAuxiliar"
        :pendingChannel="pendingChannel"
        :getIdentificadorCanal="getIdentificadorCanal"
        @channel-input="handleChannelInput"
        @drag-start="startDragFromInput"
      />
    </main>
  </div>
</template>

<script>
import { doc, onSnapshot, collection, updateDoc, addDoc, query, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import  * as sounds  from 'simple-notification-sounds'

import NotificationsStack from './components/NotificationsStack.vue'
import SidebarNav from './components/SidebarNav.vue'
import AppHeader from './components/AppHeader.vue'
import FaderGrid from './components/FaderGrid.vue'
import Button from 'primevue/button'

const CHANNEL_KEYS = Array.from({ length: 16 }, (_, index) => String(index + 1))
const DEFAULT_LIMITS = { min: -100, max: 100 }

function toInteger(value, fallback) {
  const parsed = Number(value)
  return Number.isInteger(parsed) ? parsed : fallback
}

function normalizeBounds(min, max) {
  const safeMin = Number.isFinite(min) ? min : DEFAULT_LIMITS.min
  const safeMax = Number.isFinite(max) ? max : DEFAULT_LIMITS.max

  if (safeMin <= safeMax) {
    return { min: safeMin, max: safeMax }
  }

  return { min: safeMax, max: safeMin }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function readNamedNumber(source, keys, fallback) {
  for (const key of keys) {
    if (source && Object.prototype.hasOwnProperty.call(source, key)) {
      const parsed = Number(source[key])
      if (Number.isFinite(parsed)) {
        return parsed
      }
    }
  }

  return fallback
}

function buildLimitsMap(rawConfig) {
  const globalMin = readNamedNumber(
    rawConfig,
    ['min', 'Min', 'MIN', 'minimo', 'Minimo', 'mínimo', 'Mínimo'],
    DEFAULT_LIMITS.min
  )
  const globalMax = readNamedNumber(
    rawConfig,
    ['max', 'Max', 'MAX', 'maximo', 'Maximo', 'máximo', 'Máximo'],
    DEFAULT_LIMITS.max
  )

  const limits = {}

  CHANNEL_KEYS.forEach((key) => {
    const channelConfig = rawConfig?.[key]

    if (channelConfig && typeof channelConfig === 'object' && !Array.isArray(channelConfig)) {
      limits[key] = normalizeBounds(
        readNamedNumber(
          channelConfig,
          ['min', 'Min', 'MIN', 'minimo', 'Minimo', 'mínimo', 'Mínimo'],
          globalMin
        ),
        readNamedNumber(
          channelConfig,
          ['max', 'Max', 'MAX', 'maximo', 'Maximo', 'máximo', 'Máximo'],
          globalMax
        )
      )
      return
    }

    limits[key] = normalizeBounds(globalMin, globalMax)
  })

  return {
    global: normalizeBounds(globalMin, globalMax),
    perChannel: limits
  }
}

function normalizeAuxiliar(docSnapshot, limitsMap) {
  const data = docSnapshot.data() || {}

  return {
    id: docSnapshot.id,
    channels: CHANNEL_KEYS.map((key) => {
      const bounds = limitsMap.perChannel[key] || limitsMap.global
      const value = clamp(toInteger(data[key], 0), bounds.min, bounds.max)

      return {
        key,
        value,
        min: bounds.min,
        max: bounds.max
      }
    })
  }
}

export default {
  name: 'App',
  components: {
    NotificationsStack,
    SidebarNav,
    AppHeader,
    FaderGrid,
    Button
  },
  data() {
    return {
      auxiliaresRaw: [],
      identificadoresRaw: [],
      limitsMap: {
        global: DEFAULT_LIMITS,
        perChannel: Object.fromEntries(CHANNEL_KEYS.map((key) => [key, DEFAULT_LIMITS]))
      },
      selectedAuxiliarId: '',
      pendingChannel: '',
      errorMessage: '',
      unsubscribeAuxiliares: null,
      unsubscribeLimits: null,
      unsubscribeNotifications: null,
      isDragging: false,
      currentDragAuxiliar: null,
      currentDragChannel: null,
      currentDragFaderRect: null,
      notifications: [],
      isCallingAttention: false,
      notificationTimeouts: new Map(),
      isMobile: false,
      mobileMenuOpen: false,
      isDarkMode: false
    }
  },
  computed: {
    auxiliares() {
      return this.auxiliaresRaw
        .map((docSnapshot) => normalizeAuxiliar(docSnapshot, this.limitsMap))
        .sort((first, second) =>
          first.id.localeCompare(second.id, undefined, { numeric: true, sensitivity: 'base' })
        )
    },
    selectedAuxiliar() {
      return this.auxiliares.find((auxiliar) => auxiliar.id === this.selectedAuxiliarId) || null
    },
    globalLimits() {
      return this.limitsMap.global
    },
    syncLabel() {
      return this.pendingChannel ? 'Sincronizando...' : 'Sincronizado'
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
    
    this.isDarkMode = localStorage.getItem('theme') === 'dark'
    if (this.isDarkMode) {
      document.documentElement.classList.add('app-dark')
    }
    
    this.subscribeToLimits()
    this.subscribeToAuxiliares()
    this.subscribeToNotifications()
    this.subscribeToIdentificadorCanais()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
    
    if (this.unsubscribeAuxiliares) {
      this.unsubscribeAuxiliares()
    }

    if (this.unsubscribeLimits) {
      this.unsubscribeLimits()
    }

    if (this.unsubscribeNotifications) {
      this.unsubscribeNotifications()
    }
    
    this.notificationTimeouts.forEach(timeout => clearTimeout(timeout))
    this.notificationTimeouts.clear()
    
    this.stopDrag()
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 1024
      if (!this.isMobile) {
        this.mobileMenuOpen = false
        document.body.style.overflow = ''
      }
    },
    toggleMobileMenu() {
      if (!this.isMobile) return
      this.mobileMenuOpen = !this.mobileMenuOpen
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
      document.body.style.overflow = ''
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.documentElement.classList.add('app-dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('app-dark')
        localStorage.setItem('theme', 'light')
      }
    },
    selectAuxiliar(id) {
      this.selectedAuxiliarId = id
      if (this.isMobile) {
        this.closeMobileMenu()
      }
    },
    subscribeToLimits() {
      const limitsRef = doc(db, 'MaxMin', 'ControleVolumes')

      this.unsubscribeLimits = onSnapshot(
        limitsRef,
        (snapshot) => {
          if (snapshot.exists()) {
            this.limitsMap = buildLimitsMap(snapshot.data())
            this.errorMessage = ''
            return
          }

          this.limitsMap = buildLimitsMap({})
        },
        () => {
          this.errorMessage =
            'Erro ao carregar limites. Verifique as permissões do Firestore.'
        }
      )
    },
    subscribeToIdentificadorCanais() {
      const identificadoresRef = collection(db, 'IdentificadorCanais')

      this.unsubscribeAuxiliares = onSnapshot(
        identificadoresRef,
        (snapshot) => {
          snapshot.forEach((doc) => {
            this.identificadoresRaw.push({
              id: doc.id,
              ...doc.data()
            })
          })
          this.errorMessage = ''
        },
        () => {
          this.errorMessage =
            'Erro ao carregar identificadores. Verifique as permissões do Firestore.'
        }
      )
    },
      getIdentificadorCanal(numero){
      let identificador = this.identificadoresRaw.find(i=>i.numero==numero);
      if (identificador != null){
        return identificador.legenda;
      }else{
        return "Canal " + numero;
      }
      },
    subscribeToAuxiliares() {
      const auxiliaresRef = collection(db, 'Auxiliares')

      this.unsubscribeAuxiliares = onSnapshot(
        auxiliaresRef,
        (snapshot) => {
          this.auxiliaresRaw = snapshot.docs

          const hasSelection = snapshot.docs.some(
            (docSnapshot) => docSnapshot.id === this.selectedAuxiliarId
          )

          if (!hasSelection) {
            this.selectedAuxiliarId = snapshot.docs[0]?.id || ''
          }

          this.errorMessage = ''
        },
        () => {
          this.errorMessage =
            'Erro ao carregar auxiliares. Verifique as permissões do Firestore.'
        }
      )
    },
    subscribeToNotifications() {
      const notificationsRef = collection(db, 'Notificacoes')
      const q = query(notificationsRef, orderBy('timestamp', 'desc'))

      this.unsubscribeNotifications = onSnapshot(
        q,
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              const data = change.doc.data()
              const notification = {
                id: change.doc.id,
                message: data.message,
                type: data.type || 'attention',
                timestamp: data.timestamp,
                auxiliarId: data.auxiliarId
              }
              
              if (!this.notifications.find(n => n.id === notification.id)) {
                this.addNotificationToStack(notification)
              }
              sounds.playAttention('long');
            }
            
            if (change.type === 'removed') {
              this.removeNotificationById(change.doc.id)
            }
          })
        },
        (error) => {
          console.error('Erro ao escutar notificações:', error)
        }
      )
    },
    addNotificationToStack(notification) {
      this.notifications.unshift(notification)
      
      const timeout = setTimeout(() => {
        this.removeNotification(notification.id)
      }, 5000)
      
      this.notificationTimeouts.set(notification.id, timeout)
      
      if (this.notifications.length > 5) {
        const oldest = this.notifications.pop()
        this.removeNotification(oldest.id)
      }
    },
    async callAttention() {
      if (!this.selectedAuxiliar || this.isCallingAttention) return
      
      this.isCallingAttention = true
      
      try {
        const notificationsRef = collection(db, 'Notificacoes')
        
        await addDoc(notificationsRef, {
          auxiliarId: this.selectedAuxiliar.id,
          message: `${this.selectedAuxiliar.id} chamou atenção!!!`,
          type: 'attention',
          timestamp: Date.now()
        })
        setTimeout(() => {
          this.isCallingAttention = false
        }, 3000)
        
      } catch (error) {
        console.error('Erro ao chamar atenção:', error)
        this.addManualNotification('Erro ao enviar notificação. Tente novamente.', 'error')
        this.isCallingAttention = false
      }
    },
    addManualNotification(message, type) {
      const tempId = `temp_${Date.now()}_${Math.random()}`
      const notification = {
        id: tempId,
        message: message,
        type: type,
        timestamp: Date.now()
      }
      
      this.notifications.unshift(notification)
      
      const timeout = setTimeout(() => {
        this.removeNotification(tempId)
      }, 5000)
      
      this.notificationTimeouts.set(tempId, timeout)
    },
    async removeNotification(notificationId) {
      if (this.notificationTimeouts.has(notificationId)) {
        clearTimeout(this.notificationTimeouts.get(notificationId))
        this.notificationTimeouts.delete(notificationId)
      }
      
      this.notifications = this.notifications.filter(n => n.id !== notificationId)
      
      if (notificationId.startsWith('temp_')) {
        return
      }
      
      try {
        const notificationRef = doc(db, 'Notificacoes', notificationId)
        await deleteDoc(notificationRef)
      } catch (error) {
        console.error('Erro ao deletar notificação:', error)
      }
    },
    removeNotificationById(notificationId) {
      if (this.notificationTimeouts.has(notificationId)) {
        clearTimeout(this.notificationTimeouts.get(notificationId))
        this.notificationTimeouts.delete(notificationId)
      }
      
      this.notifications = this.notifications.filter(n => n.id !== notificationId)
    },
    channelUniqueKey(auxiliarId, channelKey) {
      return `${auxiliarId}:${channelKey}`
    },
    activeChannelsCount(auxiliar) {
      return auxiliar.channels.filter((channel) => channel.value !== 0).length
    },
    async handleChannelInput(auxiliarId, channelKey, event) {
      const bounds = this.limitsMap.perChannel[channelKey] || this.limitsMap.global
      const nextValue = clamp(toInteger(event.target.value, 0), bounds.min, bounds.max)
      const channelId = this.channelUniqueKey(auxiliarId, channelKey)

      this.pendingChannel = channelId

      try {
        await updateDoc(doc(db, 'Auxiliares', auxiliarId), {
          [channelKey]: nextValue
        })
        this.errorMessage = ''
      } catch (error) {
        event.target.value = this.selectedAuxiliar?.channels.find(
          (channel) => channel.key === channelKey
        )?.value

        this.errorMessage =
          error?.message ||
          `Erro ao atualizar canal ${channelKey} do auxiliar ${auxiliarId}.`
      } finally {
        if (this.pendingChannel === channelId) {
          this.pendingChannel = ''
        }
      }
    },
    startDragFromInput(event, auxiliarId, channelKey) {
      event.preventDefault()
      event.stopPropagation()
      
      const faderCard = event.target.closest('.fader-card')
      if (!faderCard) return
      
      this.isDragging = true
      this.currentDragAuxiliar = auxiliarId
      this.currentDragChannel = channelKey
      this.currentDragFaderRect = faderCard.getBoundingClientRect()
      
      this.updateValueFromMousePosition(event.clientY)
      
      window.addEventListener('mousemove', this.onDrag)
      window.addEventListener('mouseup', this.stopDrag)
      
      document.body.style.userSelect = 'none'
    },
    
    onDrag(event) {
      if (!this.isDragging) return
      
      const faderCard = document.querySelector(`.fader-card[data-auxiliar="${this.currentDragAuxiliar}"][data-channel="${this.currentDragChannel}"]`)
      if (faderCard) {
        this.currentDragFaderRect = faderCard.getBoundingClientRect()
      }
      
      this.updateValueFromMousePosition(event.clientY)
    },
    
    stopDrag() {
      this.isDragging = false
      this.currentDragAuxiliar = null
      this.currentDragChannel = null
      this.currentDragFaderRect = null
      window.removeEventListener('mousemove', this.onDrag)
      window.removeEventListener('mouseup', this.stopDrag)
      document.body.style.userSelect = ''
    },
    
    updateValueFromMousePosition(mouseY) {
      if (!this.currentDragFaderRect) return
      
      const channel = this.selectedAuxiliar?.channels.find(c => c.key === this.currentDragChannel)
      if (!channel) return
      
      let mouseYRelative = mouseY
      mouseYRelative = Math.max(this.currentDragFaderRect.top - 50, Math.min(this.currentDragFaderRect.bottom + 50, mouseYRelative))
      
      let percent = (this.currentDragFaderRect.bottom - mouseYRelative) / this.currentDragFaderRect.height
      percent = Math.max(0, Math.min(1, percent))
      
      const value = Math.round(channel.min + (channel.max - channel.min) * percent)
      
      const faderCard = document.querySelector(`.fader-card[data-auxiliar="${this.currentDragAuxiliar}"][data-channel="${this.currentDragChannel}"]`)
      if (faderCard) {
        const inputElement = faderCard.querySelector('.fader-input')
        if (inputElement && parseInt(inputElement.value) !== value) {
          inputElement.value = value
          const fakeEvent = { target: { value: value } }
          this.handleChannelInput(this.currentDragAuxiliar, this.currentDragChannel, fakeEvent)
        }
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

:root {
  --sidebar-width: 280px;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Verde Escuro / Emerald Palette para o App */
  --p-primary-50: #ecfdf5;
  --p-primary-100: #d1fae5;
  --p-primary-200: #a7f3d0;
  --p-primary-300: #6ee7b7;
  --p-primary-400: #34d399;
  --p-primary-500: #10b981; /* Verde Principal */
  --p-primary-600: #059669;
  --p-primary-700: #047857;
  --p-primary-800: #065f46;
  --p-primary-900: #064e3b;
  --p-primary-950: #022c22;
}

html.app-dark {
  /* Cinza Escuro moderno para o Dark Mode */
  --p-surface-0: #ffffff;
  --p-surface-50: #f8fafc;
  --p-surface-100: #f1f5f9;
  --p-surface-200: #e2e8f0;
  --p-surface-300: #cbd5e1;
  --p-surface-400: #94a3b8;
  --p-surface-500: #64748b;
  --p-surface-600: #475569;
  --p-surface-700: #334155;
  --p-surface-800: #1e293b; /* Cinza claro no painel */
  --p-surface-900: #0f172a; /* Cinza escuro profundo */
  --p-surface-950: #020617;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: var(--p-surface-100);
  color: var(--p-surface-900);
  overflow-x: hidden;
  transition: background-color 0.4s ease, color 0.4s ease;
  -webkit-font-smoothing: antialiased;
}

html.app-dark body {
  background-color: var(--p-surface-900);
  color: var(--p-surface-0);
}

.app-shell {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Conteúdo Principal Desktop */
.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 40px 56px;
  transition: var(--transition);
  min-height: 100vh;
}

/* Feedback Cards */
.feedback-card {
  background: var(--p-surface-0);
  border-radius: 16px;
  padding: 64px 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--p-surface-200);
  transition: var(--transition);
}

html.app-dark .feedback-card {
  background: var(--p-surface-900);
  border-color: var(--p-surface-800);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.feedback-card.error {
  border-top: 4px solid var(--p-red-500);
}

.feedback-card.info {
  border-top: 4px solid var(--p-blue-500);
}

.feedback-icon {
  font-size: 56px;
  margin-bottom: 24px;
}

code {
  background: var(--p-surface-200);
  padding: 4px 10px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  color: var(--p-primary-500);
}

html.app-dark code {
  background: var(--p-surface-800);
  color: var(--p-primary-400);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  position: fixed !important;
  top: 16px;
  left: 16px;
  z-index: 1002;
  display: none !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}



/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


/* Responsividade Mobile */
@media (max-width: 1024px) {

  .mobile-menu-btn {
    display: inline-flex !important;
  }
  
  .main-content {
    margin-left: 0 !important;
    padding: 30px 24px 32px 24px;
  }
  
  .main-content.mobile-menu-open {
    filter: blur(4px);
    pointer-events: none;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 30px 16px 24px 16px;
  }
}
</style>