<template>
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

      <Button 
        v-if="selectedAuxiliar" 
        severity="primary"
        icon="pi pi-bell"
        label="Chamar Atenção"
        class="attention-btn"
        @click="$emit('call-attention')"
        :disabled="isCallingAttention"
      />
    </div>
  </header>
</template>

<script>
import Button from 'primevue/button'
export default {
  name: 'AppHeader',
  components: {
    Button
  },
  props: {
    selectedAuxiliar: {
      type: Object,
      default: null
    },
    globalLimits: {
      type: Object,
      required: true
    },
    isCallingAttention: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
/* Header */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 24px;
}

.header-title h1 {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  color: var(--p-surface-900);
  margin-bottom: 8px;
}

html.app-dark .header-title h1 {
  color: var(--p-surface-0);
}

.header-description {
  color: var(--p-surface-500);
  font-size: 16px;
  font-weight: 500;
}

html.app-dark .header-description {
  color: var(--p-surface-400);
}

.header-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.limits-card {
  background: var(--p-surface-0);
  padding: 12px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  text-align: center;
  border: 1px solid var(--p-surface-200);
}

html.app-dark .limits-card {
  background: var(--p-surface-900);
  border-color: var(--p-surface-800);
}

.limits-card span {
  display: block;
  font-size: 11px;
  color: var(--p-surface-500);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 4px;
}

html.app-dark .limits-card span {
  color: var(--p-surface-400);
}

.limits-card strong {
  font-size: 20px;
  font-weight: 800;
  color: var(--p-primary-500);
}

html.app-dark .limits-card strong {
  color: var(--p-primary-400);
}

.attention-btn {
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 600;
}

@media (max-width: 1024px) {
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
}

@media (max-width: 480px) {
  .header-title h1 {
    font-size: 28px;
  }
}
</style>
