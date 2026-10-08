<template>
  <button class="toast__icon-btn" type="button" @click="removeToast(toast.id)">
    <svg width="16" height="16">
      <use href="#close" />
    </svg>
  </button>
</template>

<script setup>
import { inject } from "vue"

defineProps({
  toast: {
    type: Object,
    required: true,
  },
})

const removeToast = inject("removeToast")
</script>

<style lang="scss" scoped>
.toast__icon-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: currentcolor;
  opacity: 0.7;
  transition:
    opacity var(--trs35),
    background-color var(--trs35);

  &:hover {
    background-color: var(--shadow);
    opacity: 1;
  }
}
</style>
