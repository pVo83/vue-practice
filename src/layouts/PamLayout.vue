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

    <Sidebar
      :open="isOpen"
      :collapsed="isCollapsed"
      :wide="isDrawerWide"
      :active-id="activeId"
      @select="selectNav"
      @toggle-collapse="toggleCollapse"
      @transitionend="onSidebarTransitionEnd"
    />

    <div class="pam__body">
      <Header :title="activeItem.label" :menu-open="isOpen" @toggle-menu="toggleSidebar" />

      <main class="pam__main">
        <slot :active-id="activeId" :active-item="activeItem" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useCloseOnEscape } from "@/composables/useCloseOnEscape"
import { useNoScroll } from "@/composables/useNoScroll"
import { useCloseOnBreakpoint } from "@/composables/useCloseOnBreakpoint"
import { navItems } from "@/components/pam/consts/nav"
import Header from "@/components/pam/Header.vue"
import Sidebar from "@/components/pam/Sidebar.vue"

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

  &__main {
    flex: 1;
    min-width: 0;
    padding: 8px 0;
    overflow: hidden;
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
