<template>
  <nav class="sidebar-nav" :class="{ 'mobile-open': mobileMenuOpen }">
    <div class="nav-header">
      <div class="logo-area">
        <div class="logo-text">
          <span class="logo-title">Mesa de Som</span>
          <span class="logo-subtitle">Auxiliares</span>
        </div>
      </div>
      <!-- Botão de fechar no mobile quando menu está aberto -->
      <Button 
        v-if="isMobile && mobileMenuOpen" 
        icon="pi pi-times" 
        text rounded 
        class="mobile-close-btn" 
        @click="$emit('close')" 
      />
    </div>

    <div class="nav-content">
      <div class="nav-section">
        <div class="section-label">
          <span>Auxiliares</span>
          <Badge :value="auxiliares.length" severity="contrast" />
        </div>
        
        <div class="nav-items">
          <Button
            v-for="auxiliar in auxiliares"
            :key="auxiliar.id"
            class="nav-link"
            :class="{ active: auxiliar.id === selectedAuxiliarId }"
            :variant="auxiliar.id === selectedAuxiliarId ? 'filled' : 'text'"
            @click="$emit('select', auxiliar.id)"
          >
            <span class="nav-text">{{ auxiliar.id }}</span>
          </Button>
        </div>
      </div>

      <div class="nav-footer">
        <div class="theme-toggle">
          <span class="status-text">Tema</span>
          <Button 
            :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'" 
            rounded text severity="secondary"
            @click="$emit('toggle-theme')" 
          />
        </div>
        <div class="status-info">
          <div class="status-dot" :class="{ syncing: pendingChannel }"></div>
          <span class="status-text">{{ syncLabel }}</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from 'primevue/button'
import Badge from 'primevue/badge'
export default {
  name: 'SidebarNav',
  components: {
    Button,
    Badge
  },
  props: {
    mobileMenuOpen: {
      type: Boolean,
      required: true
    },
    isMobile: {
      type: Boolean,
      required: true
    },
    auxiliares: {
      type: Array,
      required: true
    },
    selectedAuxiliarId: {
      type: String,
      required: true
    },
    pendingChannel: {
      type: String,
      required: false,
      default: ''
    },
    syncLabel: {
      type: String,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.sidebar-nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: var(--sidebar-width, 280px);
  background-color: var(--p-surface-0);
  border-right: 1px solid var(--p-surface-200);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 4px 0 24px rgba(0,0,0,0.02);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s;
}

html.app-dark .sidebar-nav {
  background-color: var(--p-surface-900);
  border-right: 1px solid var(--p-surface-800);
  box-shadow: 4px 0 24px rgba(0,0,0,0.2);
}

.nav-header {
  padding: 32px 24px;
  border-bottom: 1px solid var(--p-surface-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

html.app-dark .nav-header {
  border-bottom-color: var(--p-surface-800);
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.logo-title {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, var(--p-primary-500), var(--p-primary-700));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

html.app-dark .logo-title {
  background: linear-gradient(135deg, var(--p-primary-400), var(--p-primary-200));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo-subtitle {
  font-size: 13px;
  font-weight: 500;
  color: var(--p-surface-500);
  text-transform: uppercase;
  letter-spacing: 1px;
}

html.app-dark .logo-subtitle {
  color: var(--p-surface-400);
}

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
  transition: var(--transition, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
}

.mobile-close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 0;
  overflow-y: auto;
}

.nav-section {
  padding: 0 16px;
}

.section-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--p-surface-500);
}

html.app-dark .section-label {
  color: var(--p-surface-400);
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: 12px;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
}

.nav-text {
  flex: 1;
}

.nav-footer {
  padding: 24px 16px 0;
  border-top: 1px solid var(--p-surface-200);
  margin-top: auto;
}

html.app-dark .nav-footer {
  border-top-color: var(--p-surface-800);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--p-surface-100);
  border-radius: 12px;
  margin-bottom: 12px;
}

html.app-dark .theme-toggle {
  background: var(--p-surface-800);
}

.status-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--p-surface-100);
  border-radius: 12px;
}

html.app-dark .status-info {
  background: var(--p-surface-800);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  transition: var(--transition, all 0.3s cubic-bezier(0.4, 0, 0.2, 1));
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
  font-size: 13px;
  font-weight: 600;
  color: var(--p-surface-600);
}

html.app-dark .status-text {
  color: var(--p-surface-300);
}

@media (max-width: 1024px) {
  .sidebar-nav {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .sidebar-nav.mobile-open {
    transform: translateX(0);
  }
}
</style>
