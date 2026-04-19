<template>
  <div class="notifications-stack">
    <Message 
      v-for="notif in notifications"
      :key="notif.id"
      severity="success"
      :closable="true"
      @close="$emit('remove', notif.id)"
      class="notification-message-box"
    >
      <div class="notification-content-flex">
        <i v-if="notif.type === 'attention'" class="pi pi-bell attention-icon"></i>
        <strong v-if="notif.type === 'attention'" class="attention-title">ATENÇÃO!</strong>
        <span class="attention-text">{{ notif.message }}</span>
      </div>
    </Message>
  </div>
</template>

<script>
import Message from 'primevue/message'

export default {
  name: 'NotificationsStack',
  components: {
    Message
  },
  props: {
    notifications: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.notifications-stack {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  z-index: 9999;
  pointer-events: none;
}

.notification-message-box {
  pointer-events: auto;
  margin: 0 !important;
  border-radius: 0 !important;
  border: none !important;
  width: 100vw;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  animation: slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: var(--p-primary-500) !important;
  color: #ffffff !important;
  align-items: center;
}

html.app-dark .notification-message-box {
  background-color: var(--p-primary-600) !important;
}

.notification-message-box :deep(.p-message-icon) {
  display: none !important;
}

.notification-message-box :deep(.p-message-close-button) {
  color: #ffffff !important;
}

.notification-content-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
  padding: 24px 0;
}

.attention-icon {
  font-size: 48px;
  animation: ring 1s ease-in-out infinite;
}

.attention-title {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.attention-text {
  font-size: 40px;
  font-weight: 600;
}

@keyframes ring {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-15deg); }
  100% { transform: rotate(0deg); }
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

@media (max-width: 1024px) {
  .attention-title { font-size: 32px; }
  .attention-icon { font-size: 36px; }
  .notification-content-flex {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .attention-text { 
    font-size: 32px; 
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .attention-title { font-size: 24px; }
  .attention-icon { font-size: 28px; }
  
  .notification-content-flex {
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .attention-text { 
    font-size: 24px; 
    width: 100%;
    text-align: center;
  }
}
</style>
