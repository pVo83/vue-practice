<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modal.isOpen" class="overlay" @click.self="modal.closeModal" />
    </Transition>

    <Transition name="slide">
      <div v-if="modal.isOpen" class="modal">
        <div class="modal__heading">
          <h4 class="modal__title">{{ title }}</h4>
          <button class="modal__btn" type="button" @click="modal.closeModal">
            <svg width="18" height="18">
              <use href="#close" />
            </svg>
          </button>
        </div>

        <div class="modal__body">
          <svg v-if="icon" class="modal__icon" width="24" height="24">
            <use :href="icon" />
          </svg>
          <p class="modal__desc">
            {{ desc }}
          </p>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useCloseOnEscape } from "@/composables/useCloseOnEscape"
import { useModal } from "./store/useModal"

defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: null,
  },
})

const modal = useModal()

useCloseOnEscape(() => modal.closeModal())
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  background-color: var(--overlay);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: min(500px, calc(100vw - 32px));
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background-color: var(--white);
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 24px var(--shadow-md);
  gap: 16px;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__title {
    margin: 0;
    color: var(--text);
    font-size: var(--ff-label);
    font-weight: 600;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }

  &__icon {
    display: flex;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    color: var(--accent);
  }

  &__body {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }

  &__desc {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--ff-body);
    font-weight: 400;
    line-height: 1.6;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--trs35);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -20%);
}
</style>
