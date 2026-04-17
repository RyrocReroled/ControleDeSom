<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand-card">
        <span class="eyebrow">Controle de Som</span>
        <h1>Mesa de auxiliares</h1>
        <p>
          Cada auxiliar e cada canal refletem em tempo real o estado salvo no
          Firestore.
        </p>
      </div>

      <section class="menu-card">
        <div class="menu-header">
          <div>
            <span class="menu-label">Auxiliares</span>
            <strong>{{ auxiliares.length }}</strong>
          </div>
          <span class="sync-badge">{{ syncLabel }}</span>
        </div>

        <nav v-if="auxiliares.length" class="auxiliar-nav" aria-label="Auxiliares">
          <button
            v-for="auxiliar in auxiliares"
            :key="auxiliar.id"
            type="button"
            class="nav-item"
            :class="{ active: auxiliar.id === selectedAuxiliarId }"
            @click="selectedAuxiliarId = auxiliar.id"
          >
            <span>{{ auxiliar.id }}</span>
            <small>{{ activeChannelsCount(auxiliar) }} canais com valor</small>
          </button>
        </nav>

        <p v-else class="empty-message">
          Nenhum documento foi encontrado na coleção <code>Auxiliares</code>.
        </p>
      </section>
    </aside>

    <main class="workspace">
      <header class="workspace-header">
        <div>
          <span class="workspace-label">Auxiliar atual</span>
          <h2>{{ selectedAuxiliar ? selectedAuxiliar.id : 'Aguardando auxiliar' }}</h2>
        </div>

        <div class="limits-card">
          <span>Intervalo atual</span>
          <strong>{{ globalLimits.min }} a {{ globalLimits.max }}</strong>
        </div>
      </header>

      <section v-if="errorMessage" class="feedback-card error-card">
        {{ errorMessage }}
      </section>

      <section v-else-if="!selectedAuxiliar" class="feedback-card">
        Crie documentos como <code>Auxiliar1</code>, <code>Auxiliar2</code> e
        assim por diante dentro da coleção <code>Auxiliares</code> para ver os
        controles aparecerem aqui.
      </section>

      <section v-else class="console-card">
        <div class="console-header">
          <div>
            <span class="workspace-label">Canais 1 a 16</span>
            <p>
              Ajuste os faders abaixo. Cada movimento grava no Firestore e a tela
              é sincronizada para todos os usuários conectados.
            </p>
          </div>
        </div>

        <div class="faders-grid">
          <article
            v-for="channel in selectedAuxiliar.channels"
            :key="channel.key"
            class="fader-card"
            :data-auxiliar="selectedAuxiliar.id"
            :data-channel="channel.key"
          >
            <span class="fader-index">Canal {{ channel.key }}</span>

            <div class="fader-track-wrap">
              <input
                :id="`channel-${selectedAuxiliar.id}-${channel.key}`"
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

            <strong class="fader-value">{{ channel.value }}</strong>
            <small class="fader-limits">{{ channel.min }} / {{ channel.max }}</small>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { doc, onSnapshot, collection, updateDoc } from 'firebase/firestore'
import { db } from './firebase'

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
      limitsMap: {
        global: DEFAULT_LIMITS,
        perChannel: Object.fromEntries(CHANNEL_KEYS.map((key) => [key, DEFAULT_LIMITS]))
      },
      selectedAuxiliarId: '',
      pendingChannel: '',
      errorMessage: '',
      unsubscribeAuxiliares: null,
      unsubscribeLimits: null,
      isDragging: false,
      currentDragAuxiliar: null,
      currentDragChannel: null,
      currentDragFaderRect: null
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
      return this.pendingChannel ? 'Sincronizando...' : 'Ao vivo'
    }
  },
  mounted() {
    this.subscribeToLimits()
    this.subscribeToAuxiliares()
  },
  beforeUnmount() {
    if (this.unsubscribeAuxiliares) {
      this.unsubscribeAuxiliares()
    }

    if (this.unsubscribeLimits) {
      this.unsubscribeLimits()
    }
    
    this.stopDrag()
  },
  methods: {
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
            'Nao foi possivel ler MaxMin/ControleVolumes. Verifique as permissoes do Firestore.'
        }
      )
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
            'Nao foi possivel ler a colecao Auxiliares. Verifique as permissoes do Firestore.'
        }
      )
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
          `Nao foi possivel atualizar o canal ${channelKey} do documento ${auxiliarId}.`
      } finally {
        if (this.pendingChannel === channelId) {
          this.pendingChannel = ''
        }
      }
    },
    startDragFromInput(event, auxiliarId, channelKey) {
      event.preventDefault()
      event.stopPropagation()
      
      // Pega o elemento fader-card e suas dimensões
      const faderCard = event.target.closest('.fader-card')
      if (!faderCard) return
      
      this.isDragging = true
      this.currentDragAuxiliar = auxiliarId
      this.currentDragChannel = channelKey
      this.currentDragFaderRect = faderCard.getBoundingClientRect()
      
      // Calcula o valor inicial baseado na posição do clique
      this.updateValueFromMousePosition(event.clientY)
      
      // Adiciona listeners globais
      window.addEventListener('mousemove', this.onDrag)
      window.addEventListener('mouseup', this.stopDrag)
      
      // Previne seleção de texto durante o arrasto
      document.body.style.userSelect = 'none'
    },
    
    onDrag(event) {
      if (!this.isDragging) return
      
      // Atualiza a posição do retângulo em tempo real (caso a página role)
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
      
      // Encontra o canal atual
      const channel = this.selectedAuxiliar?.channels.find(c => c.key === this.currentDragChannel)
      if (!channel) return
      
      // Calcula a posição do mouse em relação ao fader-card
      let mouseYRelative = mouseY
      
      // Permite arrastar mesmo fora do card (até 50px para fora)
      mouseYRelative = Math.max(this.currentDragFaderRect.top - 50, Math.min(this.currentDragFaderRect.bottom + 50, mouseYRelative))
      
      // Calcula o valor (0 = topo = max, 1 = base = min)
      let percent = (this.currentDragFaderRect.bottom - mouseYRelative) / this.currentDragFaderRect.height
      percent = Math.max(0, Math.min(1, percent))
      
      const value = Math.round(channel.min + (channel.max - channel.min) * percent)
      
      // Encontra o input element e atualiza
      const faderCard = document.querySelector(`.fader-card[data-auxiliar="${this.currentDragAuxiliar}"][data-channel="${this.currentDragChannel}"]`)
      if (faderCard) {
        const inputElement = faderCard.querySelector('.fader-input')
        if (inputElement && parseInt(inputElement.value) !== value) {
          inputElement.value = value
          // Cria um evento fake e chama o handler existente
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
  color-scheme: light;
  --bg: #e9ddd0;
  --bg-deep: #d7c5b4;
  --panel: rgba(255, 251, 245, 0.76);
  --panel-strong: rgba(255, 248, 238, 0.92);
  --line: rgba(75, 56, 38, 0.14);
  --text: #2d241b;
  --muted: #6f655c;
  --accent: #bc5f2c;
  --accent-strong: #8f4218;
  --success: #256b55;
  --error: #9a2f2f;
  --shadow: 0 24px 60px rgba(61, 43, 24, 0.18);
}

* {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
}

body {
  margin: 0;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(188, 95, 44, 0.22), transparent 28%),
    radial-gradient(circle at bottom right, rgba(37, 107, 85, 0.18), transparent 20%),
    linear-gradient(135deg, var(--bg), var(--bg-deep));
}

button,
input {
  font: inherit;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
  gap: 24px;
  padding: 24px;
}

.sidebar,
.workspace {
  min-width: 0;
}

.sidebar {
  display: grid;
  gap: 18px;
}

.brand-card,
.menu-card,
.console-card,
.feedback-card,
.limits-card {
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--panel);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.brand-card,
.menu-card,
.feedback-card {
  padding: 24px;
}

.brand-card h1,
.workspace-header h2 {
  margin: 0;
}

.brand-card p,
.console-header p,
.feedback-card {
  color: var(--muted);
  line-height: 1.6;
}

.eyebrow,
.workspace-label,
.menu-label {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.menu-header,
.workspace-header,
.console-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.sync-badge {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(37, 107, 85, 0.12);
  color: var(--success);
  font-size: 0.82rem;
  font-weight: 700;
}

.auxiliar-nav {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.nav-item {
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(75, 56, 38, 0.08);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.56);
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: transform 0.16s ease, border-color 0.16s ease, background 0.16s ease;
}

.nav-item span,
.nav-item small {
  display: block;
}

.nav-item span {
  font-weight: 700;
}

.nav-item small {
  margin-top: 4px;
  color: var(--muted);
}

.nav-item:hover {
  transform: translateX(3px);
  border-color: rgba(188, 95, 44, 0.34);
}

.nav-item.active {
  background: linear-gradient(135deg, rgba(188, 95, 44, 0.18), rgba(255, 255, 255, 0.66));
  border-color: rgba(188, 95, 44, 0.42);
}

.workspace {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
}

.workspace-header {
  align-items: stretch;
}

.workspace-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
}

.limits-card {
  min-width: 180px;
  padding: 18px 20px;
  align-self: center;
  text-align: center;
  background: var(--panel-strong);
}

.limits-card span {
  display: block;
  color: var(--muted);
  font-size: 0.88rem;
}

.limits-card strong {
  display: block;
  margin-top: 6px;
  font-size: 1.2rem;
}

.feedback-card {
  display: grid;
  place-items: center;
  min-height: 220px;
  text-align: center;
  font-size: 1.02rem;
}

.error-card {
  color: var(--error);
}

.console-card {
  padding: 28px;
}

.faders-grid {
  display: grid;
  grid-template-columns: repeat(8, minmax(110px, 1fr));
  gap: 18px;
  margin-top: 26px;
}

.fader-card {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 18px 12px 16px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.64), rgba(233, 221, 208, 0.92));
  border: 1px solid rgba(75, 56, 38, 0.08);
}

.fader-index,
.fader-limits {
  color: var(--muted);
}

.fader-index {
  font-size: 0.84rem;
  font-weight: 700;
}

.fader-track-wrap {
  height: 260px;
  display: grid;
  place-items: center;
}

.fader-input {
  -webkit-appearance: slider-vertical;
  width: 42px;
  height: 220px;
  writing-mode: bt-lr;
  accent-color: var(--accent);
  cursor: grab;
}

.fader-input:active {
  cursor: grabbing;
}

.fader-input:disabled {
  cursor: progress;
  opacity: 0.65;
}

.fader-value {
  font-size: 1.4rem;
}

.empty-message {
  margin: 18px 0 0;
  color: var(--muted);
  line-height: 1.6;
}

code {
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(45, 36, 27, 0.08);
  font-family: "Courier New", monospace;
}

@media (max-width: 1280px) {
  .faders-grid {
    grid-template-columns: repeat(4, minmax(110px, 1fr));
  }
}

@media (max-width: 920px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .workspace-header,
  .console-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .limits-card {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding: 16px;
  }

  .brand-card,
  .menu-card,
  .console-card,
  .feedback-card {
    padding: 20px;
  }

  .faders-grid {
    grid-template-columns: repeat(2, minmax(110px, 1fr));
  }
}
</style>