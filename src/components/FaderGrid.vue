<template>
  <section class="faders-container">
    <div class="faders-grid">
      <div
        v-for="channel in selectedAuxiliar.channels"
        :key="channel.key"
        class="fader-card"
        :data-auxiliar="selectedAuxiliar.id"
        :data-channel="channel.key"
      >
        <div class="fader-header">
          <span class="channel-number">{{ getIdentificadorCanal(channel.key) }}</span>
        </div>

        <div class="fader-wrapper">
          <Slider
            orientation="vertical"
            :min="channel.min"
            :max="channel.max"
            :step="1"
            :modelValue="channel.value"
            :disabled="pendingChannel === channelUniqueKey(selectedAuxiliar.id, channel.key)"
            @change="(val) => $emit('channel-input', selectedAuxiliar.id, channel.key, { target: { value: val } })"
            @mousedown="$emit('drag-start', $event, selectedAuxiliar.id, channel.key)"
            class="fader-slider"
          />
        </div>

        <div class="fader-footer">
          <strong class="current-value">{{ channel.value }}</strong>
          <span class="channel-number">Canal {{ channel.key }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from 'primevue/slider'

export default {
  name: 'FaderGrid',
  components: {
    Slider
  },
  props: {
    selectedAuxiliar: {
      type: Object,
      required: true
    },
    pendingChannel: {
      type: String,
      default: ''
    },
    getIdentificadorCanal: {
      type: Function,
      required: true
    }
  },
  methods: {
    channelUniqueKey(auxiliarId, channelKey) {
      return `${auxiliarId}:${channelKey}`
    }
  }
}
</script>

<style scoped>
/* Faders Grid */
.faders-container {
  background: var(--p-surface-0);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid var(--p-surface-200);
}

html.app-dark .faders-container {
  background: var(--p-surface-900);
  border-color: var(--p-surface-800);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
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
  background: var(--p-surface-50);
  border-radius: 12px;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: var(--transition, all 0.4s cubic-bezier(0.16, 1, 0.3, 1));
  border: 1px solid var(--p-surface-200);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
}

html.app-dark .fader-card {
  background: var(--p-surface-950);
  border-color: var(--p-surface-800);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.fader-card:hover {
  transform: translateY(-4px);
  border-color: var(--p-primary-500);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
}

html.app-dark .fader-card:hover {
  border-color: var(--p-primary-400);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.fader-header {
  text-align: center;
}

.channel-number {
  font-size: 14px;
  font-weight: 700;
  color: var(--p-surface-500);
  text-transform: uppercase;
  letter-spacing: 1px;
}

html.app-dark .channel-number {
  color: var(--p-surface-400);
}

.fader-wrapper {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fader-slider {
  height: 180px;
}

.fader-footer {
  text-align: center;
  width: 100%;
}

.current-value {
  font-size: 24px;
  font-weight: 800;
  color: var(--p-primary-500);
  display: block;
  margin-bottom: 4px;
}

html.app-dark .current-value {
  color: var(--p-primary-400);
}

.value-range {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--gray, #6f655c);
}

@media (max-width: 480px) {
  .faders-container {
    padding: 16px;
  }
  
  .fader-wrapper {
    height: 160px;
  }
  
  .fader-slider {
    height: 140px;
  }
}
</style>
