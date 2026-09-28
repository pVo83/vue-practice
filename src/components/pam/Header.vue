<template>
  <header class="pam-header">
    <div class="pam-header__start">
      <h1 class="pam-header__title">{{ title }}</h1>
      <button
        class="pam-header__menu-btn"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="pam-sidebar"
        :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
        @click="$emit('toggle-menu')"
      >
        <svg width="22" height="22" aria-hidden="true">
          <use :href="menuOpen ? '#close' : '#menu'" />
        </svg>
      </button>
    </div>
    <span class="pam-header__avatar" aria-hidden="true" title="Admin">A</span>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  menuOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["toggle-menu"])
</script>

<style lang="scss" scoped>
.pam-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 56px;

  &__start {
    position: relative;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: var(--ff-small);
    font-weight: 700;
  }

  &__title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: max-content;
    margin: 0;
    color: var(--text);
    font-size: var(--ff-h3);
    font-weight: 600;
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35),
      visibility var(--trs35);

    @media (width <= 1024px) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transform: translateX(-100px);
    }
  }

  &__menu-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-soft);
    border-radius: 8px;
    background: var(--white);
    color: var(--text);
    transition:
      opacity var(--trs35),
      transform var(--trs35),
      border-color var(--trs35),
      color var(--trs35),
      background-color var(--trs35);
    transform: translateX(200px);
    opacity: 0;
    pointer-events: none;

    &:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
      color: var(--accent);
    }

    @media (width <= 1024px) {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
  }
}
</style>
