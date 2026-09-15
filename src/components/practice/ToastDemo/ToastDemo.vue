<template>
  <div>
    <ToastButtons />

    <TransitionGroup class="toast__list" name="slide" tag="ul">
      <li
        v-for="toast in toasts"
        :key="toast.id"
        class="toast__item"
        :class="`toast__item--${toast.type}`"
      >
        <svg class="toast__icon" width="20" height="20" aria-hidden="true">
          <use :href="toastIcon[toast.type]" />
        </svg>

        <span class="toast__text">{{ toast.text }}</span>
        <ToastItem :toast="toast" />
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { provide, ref } from "vue"
import ToastButtons from "./ToastButtons.vue"
import ToastItem from "./ToastItem.vue"

const toasts = ref([])

const toastIcon = {
  success: "#circle-check",
  error: "#circle-alert",
  info: "#info",
}

function showToast(text, type) {
  const toastId = Date.now()

  toasts.value.push({
    id: toastId,
    text,
    type,
  })

  setTimeout(() => {
    removeToast(toastId)
  }, 3000)
}

function removeToast(toastId) {
  toasts.value = toasts.value.filter((toast) => toast.id !== toastId)
}

provide("removeToast", removeToast)
provide("showToast", showToast)
</script>

<style lang="scss" scoped>
.toast {
  &__list {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: flex-start;
    width: fit-content;
    max-width: 320px;
    padding: 12px 36px 12px 12px;
    border: 1px solid transparent;
    border-radius: 12px;
    gap: 10px;
    font-size: var(--ff-caption);
    font-weight: 500;
    line-height: 1.4;
    box-shadow: 0 8px 24px var(--shadow-md);

    &--success {
      border-color: var(--accent);
      background-color: var(--accent-soft);
      color: var(--accent-hover);
    }

    &--error {
      border-color: var(--error);
      background-color: var(--error-soft);
      color: var(--error);
    }

    &--info {
      border-color: var(--warning);
      background-color: var(--warning-bg);
      color: var(--warning-text);
    }
  }

  &__icon {
    flex-shrink: 0;
    margin-top: 1px;
  }

  &__text {
    flex: 1;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(40%);
  opacity: 0;
}

.slide-move {
  transition: transform var(--trs35);
}
</style>
