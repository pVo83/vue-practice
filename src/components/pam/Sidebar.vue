<template>
  <aside
    id="pam-sidebar"
    class="pam-sidebar"
    :class="{ 'pam-sidebar--collapsed': collapsed }"
  >
    <div class="pam-sidebar__brand">
      <svg class="pam-sidebar__brand-mark" width="38" height="38" aria-hidden="true">
        <use href="#vue" />
      </svg>
      <div class="pam-sidebar__brand-text-wrap">
        <span class="pam-sidebar__brand-text">Панель</span>
        <span class="pam-sidebar__brand-text-bold">Администратора</span>
      </div>
    </div>

    <nav class="pam-sidebar__nav" aria-label="Меню кабинета">
      <button
        v-for="item in navItems"
        :key="item.id"
        class="pam-sidebar__nav-item"
        type="button"
        :class="{ 'pam-sidebar__nav-item--active': item.id === activeId }"
        :title="collapsed ? item.label : undefined"
        @click="$emit('select', item.id)"
      >
        <svg class="pam-sidebar__nav-icon" width="20" height="20" aria-hidden="true">
          <use :href="item.icon" />
        </svg>
        <span class="pam-sidebar__nav-label">{{ item.label }}</span>
      </button>
    </nav>

    <button
      class="pam-sidebar__collapse"
      type="button"
      :aria-label="collapsed ? 'Развернуть меню' : 'Свернуть меню'"
      :aria-expanded="!collapsed"
      @click="$emit('toggle-collapse')"
    >
      <span class="pam-sidebar__collapse-icon" aria-hidden="true">
        <Transition name="pam-chevron" mode="out-in">
          <span
            v-if="collapsed"
            key="right"
            class="pam-sidebar__chevron pam-sidebar__chevron--right"
          >
            <svg width="20" height="20">
              <use href="#chevrons-right" />
            </svg>
          </span>
          <span v-else key="left" class="pam-sidebar__chevron pam-sidebar__chevron--left">
            <svg width="20" height="20">
              <use href="#chevrons-left" />
            </svg>
          </span>
        </Transition>
      </span>
      <span class="pam-sidebar__collapse-label">Свернуть</span>
    </button>
  </aside>
</template>

<script setup>
import { navItems } from "./consts/nav"

defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
  activeId: {
    type: String,
    required: true,
  },
})

defineEmits(["select", "toggle-collapse"])
</script>

<style lang="scss" scoped>
.pam-sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: var(--pam-current);
  padding: 24px 12px 12px;
  border-radius: 24px;
  background: var(--white);
  box-shadow:
    5px 5px 10px color-mix(in srgb, var(--black) 7%, transparent),
    -2px -2px 6px #fff;
  transition: width var(--trs35);
  overflow: hidden;

  &__brand-text,
  &__brand-text-bold,
  &__nav-label,
  &__collapse-label {
    white-space: nowrap;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
  }

  &--collapsed &__brand-text,
  &--collapsed &__brand-text-bold,
  &--collapsed &__nav-label,
  &--collapsed &__collapse-label {
    opacity: 0;
    transform: translateX(12px);
    pointer-events: none;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 38px;
    margin-bottom: 24px;
    padding: 0 8px;
  }

  &__brand-mark {
    flex-shrink: 0;
  }

  &__brand-text-wrap {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  &__brand-text {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 400;
    line-height: 1;
  }

  &__brand-text-bold {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 700;
    line-height: 1;
  }

  &__nav {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;
    overflow: auto;
  }

  &__nav-item,
  &__collapse {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    min-height: 44px;
    padding: 12px 15px;
    border: none;
    border-radius: 12px;
    background: transparent;
    color: var(--text-muted);
    font-size: var(--ff-caption);
    font-weight: 500;
    text-align: left;

    &:hover {
      background: var(--accent-soft);
      color: var(--accent-hover);
    }
  }

  &__nav-item {
    position: relative;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &--active {
      background: var(--accent-soft);
      color: var(--accent);
      font-weight: 600;

      &::before {
        position: absolute;
        left: 0;
        width: 2px;
        height: 24px;
        border-radius: 0 4px 4px 0;
        background: var(--accent);
        content: "";
      }
    }
  }

  &__nav-icon,
  &__collapse-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  &__collapse {
    margin-top: auto;
    transition:
      background-color var(--trs35),
      color var(--trs35);
  }

  &__collapse-icon {
    overflow: hidden;
  }

  &__chevron {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

.pam-chevron-enter-active,
.pam-chevron-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.pam-chevron-enter-from.pam-sidebar__chevron--left {
  opacity: 0;
  transform: translateX(8px);
}

.pam-chevron-leave-to.pam-sidebar__chevron--left {
  opacity: 0;
  transform: translateX(-8px);
}

.pam-chevron-enter-from.pam-sidebar__chevron--right {
  opacity: 0;
  transform: translateX(-8px);
}

.pam-chevron-leave-to.pam-sidebar__chevron--right {
  opacity: 0;
  transform: translateX(8px);
}
</style>
