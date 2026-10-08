<template>
  <div class="toast">
    <div class="toast__buttons">
      <button class="toast__btn toast__btn--success" type="button" @click="success">Success</button>
      <button class="toast__btn toast__btn--error" type="button" @click="error">Error</button>
      <button class="toast__btn toast__btn--info" type="button" @click="info">Info</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue"

const showToast = inject("showToast")

function success() {
  showToast("Данные успешно сохранены", "success")
}
function error() {
  showToast("Не удалось выполнить запрос", "error")
}
function info() {
  showToast("Обновление будет доступно завтра", "info")
}
</script>

<style lang="scss" scoped>
.toast {
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 12px;
    border: 1px solid transparent;
    border-radius: 8px;
    color: var(--white);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35);

    &--success {
      border-color: var(--accent);
      background-color: var(--accent);

      &:hover {
        border-color: var(--accent-hover);
        background-color: var(--accent-hover);
      }
    }

    &--error {
      border-color: var(--error);
      background-color: var(--error);

      &:hover {
        border-color: var(--error-hover);
        background-color: var(--error-hover);
      }
    }

    &--info {
      border-color: var(--warning);
      background-color: var(--warning);

      &:hover {
        border-color: var(--warning-hover);
        background-color: var(--warning-hover);
      }
    }
  }
}
</style>
