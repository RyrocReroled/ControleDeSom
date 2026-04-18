<template>
  <div class="app-shell">
    <!-- MÚLTIPLAS NOTIFICAÇÕES EM FAIXA COMPLETA -->
    <div class="notifications-stack">
      <div 
        v-for="notif in notifications"
        :key="notif.id"
        class="notification-banner"
        :class="notif.type"
        @click="removeNotification(notif.id)"
      >
        <div class="notification-banner-content">
          <span class="notification-icon">{{ notif.type === 'attention' ? '🔔' : 'ℹ️' }}</span>
          <div class="notification-message">
            <strong v-if="notif.type === 'attention'">Atenção! </strong>
            <span>{{ notif.message }}</span>
          </div>
          <button class="notification-close" @click.stop="removeNotification(notif.id)">×</button>
        </div>
      </div>
    </div>

    <!-- Navbar Lateral Desktop (sempre visível) -->
    <nav class="sidebar-nav" :class="{ 'mobile-open': mobileMenuOpen }">
      <div class="nav-header">
        <div class="logo-area">
          <div class="logo-text">
            <span class="logo-title">Mesa de Som</span>
            <span class="logo-subtitle">Auxiliares</span>
          </div>
        </div>
        <!-- Botão de fechar no mobile quando menu está aberto -->
        <button class="mobile-close-btn" v-if="isMobile && mobileMenuOpen" @click="closeMobileMenu">
          ✕
        </button>
      </div>

      <div class="nav-content">
        <div class="nav-section">
          <div class="section-label">
            <span>Auxiliares</span>
            <span class="badge">{{ auxiliares.length }}</span>
          </div>
          
          <div class="nav-items">
            <button
              v-for="auxiliar in auxiliares"
              :key="auxiliar.id"
              class="nav-link"
              :class="{ active: auxiliar.id === selectedAuxiliarId }"
              @click="selectAuxiliar(auxiliar.id)"
            >
              <span class="nav-text">{{ auxiliar.id }}</span>
            </button>
          </div>
        </div>

        <div class="nav-footer">
          <div class="status-info">
            <div class="status-dot" :class="{ syncing: pendingChannel }"></div>
            <span class="status-text">{{ syncLabel }}</span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Botão Hamburguer Mobile (visível apenas no mobile) -->
    <button v-if="!mobileMenuOpen" class="mobile-menu-btn" @click="toggleMobileMenu">
      <span class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Overlay Mobile -->
    <div class="mobile-overlay" v-if="mobileMenuOpen" @click="closeMobileMenu"></div>

    <!-- Conteúdo Principal -->
    <main class="main-content" :class="{ 'mobile-menu-open': mobileMenuOpen }">
      <header class="content-header">
        <div class="header-title">
          <h1>{{ selectedAuxiliar ? selectedAuxiliar.id : 'Selecione um auxiliar' }}</h1>
          <p class="header-description" v-if="selectedAuxiliar">
            Controle dos canais 1 a 16
          </p>
        </div>

        <div class="header-actions">
          <div class="limits-card">
            <span>Intervalo</span>
            <strong>{{ globalLimits.min }} a {{ globalLimits.max }}</strong>
          </div>

          <button 
            v-if="selectedAuxiliar" 
            class="attention-btn"
            @click="callAttention"
            :disabled="isCallingAttention"
          >
            <span>🔔</span>
            <span>Chamar Atenção</span>
          </button>
        </div>
      </header>

      <section v-if="errorMessage" class="feedback-card error">
        {{ errorMessage }}
      </section>

      <section v-else-if="!selectedAuxiliar" class="feedback-card info">
        <div class="feedback-icon">ℹ️</div>
        <p>Crie documentos como <code>Auxiliar1</code>, <code>Auxiliar2</code> na coleção <code>Auxiliares</code></p>
      </section>

      <section v-else class="faders-container">
        <div class="faders-grid">
          <div
            v-for="channel in selectedAuxiliar.channels"
            :key="channel.key"
            class="fader-card"
            :data-auxiliar="selectedAuxiliar.id"
            :data-channel="channel.key"
          >
            <div class="fader-header">
              <span class="channel-number">{{getIdentificadorCanal(channel.key)}}</span>
            </div>

            <div class="fader-wrapper">
              <input
                class="fader-input"
                type="range"
                orient="vertical"
                :min="channel.min"
                :max="channel.max"
                :step="1"
                :value="channel.value"
                :disabled="pendingChannel === channelUniqueKey(selectedAuxiliar.id, channel.key)"
                @input="handleChannelInput(selectedAuxiliar.id, channel.key, $event)"
                @mousedown="startDragFromInput($event, selectedAuxiliar.id, channel.key)"
              />
            </div>

            <div class="fader-footer">
              <strong class="current-value">{{ channel.value }}</strong>
              <span class="channel-number">Canal {{ channel.key }}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { doc, onSnapshot, collection, updateDoc, addDoc, query, orderBy, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'
import  * as sounds  from 'simple-notification-sounds'

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
      mobileMenuOpen: false
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
      this.isMobile = window.innerWidth <= 768
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
:root {
  --primary: #bc5f2c;
  --primary-dark: #8f4218;
  --primary-light: #e8a87b;
  --dark: #2d241b;
  --gray: #6f655c;
  --gray-light: #e0d8d0;
  --success: #256b55;
  --error: #c53030;
  --bg: #f5f0ea;
  --sidebar-width: 260px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(135deg, #f5f0ea 0%, #e8dfd7 100%);
  color: var(--dark);
  overflow-x: hidden;
}

.app-shell {
  display: flex;
  min-height: 100vh;
  position: relative;
}

/* Navbar Lateral Desktop - Sempre visível */
.sidebar-nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: var(--sidebar-width);
  background: #2d241b;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.nav-header {
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.logo-title {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.logo-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

/* Botão de fechar mobile */
.mobile-close-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.mobile-close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  overflow-y: auto;
}

.nav-section {
  padding: 0 16px;
}

.section-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  margin-bottom: 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
}

.badge {
  background: rgba(188, 95, 44, 0.3);
  color: var(--primary-light);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-link.active {
  background: var(--primary);
  color: white;
}

.nav-text {
  flex: 1;
}

.nav-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
}

.nav-footer {
  padding: 20px 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.status-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  transition: var(--transition);
}

.status-dot.syncing {
  background: #f59e0b;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.status-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

/* Conteúdo Principal Desktop */
.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 24px 32px;
  transition: var(--transition);
  min-height: 100vh;
}

/* Header */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 20px;
}

.header-title h1 {
  font-size: 28px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}

.header-description {
  color: var(--gray);
  font-size: 14px;
}

.header-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.limits-card {
  background: white;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.limits-card span {
  display: block;
  font-size: 11px;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.limits-card strong {
  font-size: 18px;
  color: var(--primary);
}

.attention-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: var(--primary);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.attention-btn:hover:not(:disabled) {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.attention-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Feedback Cards */
.feedback-card {
  background: white;
  border-radius: 12px;
  padding: 48px 32px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.feedback-card.error {
  background: #fee;
  color: var(--error);
  border-left: 3px solid var(--error);
}

.feedback-card.info {
  background: #e8f0fe;
}

.feedback-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

/* Faders Grid */
.faders-container {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.faders-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
}

@media (min-width: 1600px) {
  .faders-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}

@media (max-width: 1200px) {
  .faders-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (max-width: 900px) {
  .faders-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 600px) {
  .faders-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.fader-card {
  background: #faf8f6;
  border-radius: 8px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: var(--transition);
  border: 1px solid #e8e0d8;
}

.fader-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.fader-header {
  text-align: center;
}

.channel-number {
  font-size: 13px;
  font-weight: 700;
  color: var(--gray);
}

.fader-wrapper {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fader-input {
  -webkit-appearance: slider-vertical;
  width: 40px;
  height: 180px;
  writing-mode: bt-lr;
  accent-color: var(--primary);
  cursor: pointer;
}

.fader-footer {
  text-align: center;
  width: 100%;
}

.current-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  display: block;
  margin-bottom: 4px;
}

.value-range {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--gray);
}

/* Notificações - Mantendo 2rem */
.notifications-stack {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  pointer-events: none;
}

.notification-banner {
  pointer-events: auto;
  background: white;
  margin: 0 auto;
  animation: slideDown 0.3s ease-out;
  cursor: pointer;
}

.notification-banner.attention {
  background: #fff5eb;
  border-bottom: 2px solid var(--primary);
}

.notification-banner-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.notification-message strong,
.notification-message span {
  font-size: 2rem !important;
}

.notification-icon {
  font-size: 2rem;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.notification-close {
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 24px;
  transition: var(--transition);
}

.notification-close:hover {
  background: rgba(0, 0, 0, 0.1);
}

code {
  background: #f0e8e0;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 13px;
}

/* Mobile Menu Button - Bootstrap Style */
.mobile-menu-btn {
  position: fixed;
  top: 16px;
  left: 16px;
  width: 44px;
  height: 44px;
  background: var(--primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1002;
  display: none;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.hamburger-icon {
  width: 24px;
  height: 18px;
  position: relative;
  display: inline-block;
}

.hamburger-icon span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-icon span:nth-child(1) {
  top: 0;
}

.hamburger-icon span:nth-child(2) {
  top: 8px;
}

.hamburger-icon span:nth-child(3) {
  top: 16px;
}

.hamburger-icon.is-active span:nth-child(1) {
  transform: rotate(45deg);
  top: 8px;
}

.hamburger-icon.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.is-active span:nth-child(3) {
  transform: rotate(-45deg);
  top: 8px;
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
@media (max-width: 768px) {

  .mobile-menu-btn {
    display: flex;
  }
  
  .sidebar-nav {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .sidebar-nav.mobile-open {
    transform: translateX(0);
  }
  
  .main-content {
    margin-top: 10px;
    margin-left: 0 !important;
    padding: 16px;
  }
  
  .main-content.mobile-menu-open {
    filter: blur(2px);
    pointer-events: none;
  }
  
  .content-header {
    flex-direction: column;
    align-items: stretch;
    margin-top: 40px;
  }
  
  .header-actions {
    justify-content: stretch;
  }
  
  .attention-btn {
    justify-content: center;
  }
  
  .notification-message strong,
  .notification-message span {
    font-size: 2rem !important;
  }
  
  .notification-icon {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .main-content {
    margin-top: 15px;
    padding: 12px;
  }
  
  .header-title h1 {
    font-size: 24px;
  }
  
  .faders-container {
    padding: 16px;
  }
  
  .fader-wrapper {
    height: 160px;
  }
  
  .fader-input {
    height: 140px;
  }
  
  .notification-message strong,
  .notification-message span {
    font-size: 2rem !important;
  }
  
  .notification-icon {
    font-size: 1.2rem;
  }

}
</style>