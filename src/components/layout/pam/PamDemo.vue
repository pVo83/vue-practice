<template>
  <div
    class="pam"
    :class="{
      'pam--collapsed': isCollapsed,
      'pam--drawer-wide': isDrawerWide,
    }"
  >
    <Transition name="fade">
      <div v-if="isOpen" class="pam__overlay" aria-hidden="true" @click="closeSidebar" />
    </Transition>

    <PamSidebar
      :open="isOpen"
      :collapsed="isCollapsed"
      :wide="isDrawerWide"
      :active-id="activeId"
      @select="selectNav"
      @toggle-collapse="toggleCollapse"
      @transitionend="onSidebarTransitionEnd"
    />

    <div class="pam__body">
      <header class="pam__topbar">
        <div class="pam__topbar-start">
          <h1 class="pam__title">{{ activeItem.label }}</h1>
          <button
            class="pam__menu-btn"
            type="button"
            :aria-expanded="isOpen"
            aria-controls="pam-sidebar"
            :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
            @click="toggleSidebar"
          >
            <svg width="22" height="22" aria-hidden="true">
              <use :href="isOpen ? '#close' : '#menu'" />
            </svg>
          </button>
        </div>
        <span class="pam__avatar" aria-hidden="true" title="Admin">A</span>
      </header>

      <main class="pam__main">
        <p class="pam__heading" aria-hidden="true">{{ activeItem.label }}</p>
        <ul class="pam__cards">
          <li v-for="card in cards" :key="card.label" class="pam__card">
            <div class="pam__card-main">
              <span class="pam__card-label">{{ card.label }}</span>
              <span class="pam__card-value">{{ card.value }}</span>
              <span class="pam__card-hint">{{ card.hint }}</span>
            </div>
            <span class="pam__card-icon" :class="`pam__card-icon--${card.tone}`" aria-hidden="true">
              <svg width="18" height="18">
                <use :href="card.icon" />
              </svg>
            </span>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useCloseOnEscape } from "@/composables/useCloseOnEscape"
import { useNoScroll } from "@/composables/useNoScroll"
import { useCloseOnBreakpoint } from "@/composables/useCloseOnBreakpoint"
import { cards } from "./consts/cards"
import { navItems } from "./consts/nav"
import PamSidebar from "./component/PamSidebar.vue"

const MOBILE_MAX = 1024

const activeId = ref(navItems[0].id)
const isOpen = ref(false)
const isCollapsed = ref(false)
/** Полный drawer: пока открыт и пока доигрывает transform при закрытии */
const isDrawerWide = ref(false)

const activeItem = computed(
  () => navItems.find((item) => item.id === activeId.value) ?? navItems[0],
)

function openSidebar() {
  isDrawerWide.value = true
  isOpen.value = true
}

function closeSidebar() {
  isOpen.value = false
  if (window.innerWidth > MOBILE_MAX) isDrawerWide.value = false
}

function toggleSidebar() {
  if (isOpen.value) closeSidebar()
  else openSidebar()
}

function onSidebarTransitionEnd(event) {
  if (event.propertyName !== "transform") return
  if (!isOpen.value) isDrawerWide.value = false
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
}

function selectNav(id) {
  activeId.value = id
  closeSidebar()
}

useNoScroll(isOpen)
useCloseOnEscape(() => {
  if (isOpen.value) closeSidebar()
})
useCloseOnBreakpoint(closeSidebar, MOBILE_MAX)
</script>

<style lang="scss" scoped>
.pam {
  --pam-w: 240px;
  --pam-w-sm: 80px;
  --pam-gap: 24px;
  --pam-current: var(--pam-w);

  box-sizing: border-box;
  min-height: 100vh;
  padding: 16px;
  background: var(--surface);

  &--collapsed {
    --pam-current: var(--pam-w-sm);
  }

  &__overlay {
    position: fixed;
    z-index: 40;
    background: var(--overlay);
    cursor: pointer;
    inset: 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: calc(100vh - 32px);
    transition: padding-inline-start var(--trs35);

    @media (width >= 1025px) {
      padding-inline-start: calc(var(--pam-current) + var(--pam-gap));
    }
  }

  &__topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    height: 56px;
  }

  &__topbar-start {
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

  &__main {
    flex: 1;
    min-width: 0;
    padding: 8px 0;
    overflow: hidden;
  }

  &__heading {
    margin: 0 0 16px;
    color: var(--text);
    font-size: var(--ff-h3);
    font-weight: 600;
    line-height: 1.2;
    transition:
      opacity var(--trs35),
      transform var(--trs35);
    transform: translateX(100px);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;

    @media (width <= 1024px) {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(278px, 1fr));
    gap: 12px;
    width: 100%;
    min-width: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
  }

  &__card {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    min-width: 0;
    padding: 16px;
    border: 1px solid var(--border-soft);
    border-radius: 16px;
    background: var(--white);
    scroll-snap-align: start;
  }

  &__card-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  &__card-label {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
  }

  &__card-value {
    color: var(--text);
    font-size: var(--ff-h2);
    font-weight: 700;
    line-height: 1.1;
  }

  &__card-hint {
    color: var(--text-muted);
    font-size: var(--ff-small);
    line-height: 1.35;
  }

  &__card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 10px;

    &--success {
      background: var(--accent-soft);
      color: var(--accent);
    }

    &--muted {
      background: var(--surface);
      color: var(--text-muted);
    }

    &--danger {
      background: var(--error-soft);
      color: var(--error);
    }

    &--info {
      background: var(--info-soft);
      color: var(--info);
    }
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
</style>
