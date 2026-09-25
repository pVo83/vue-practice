<template>
  <header class="header" :class="{ 'header--overlay': isOverlay }">
    <div class="container header__inner">
      <RouterLink class="header__brand" :to="{ name: 'home' }" @click="closeMenu">
        <svg class="header__logo" width="28" height="28" aria-hidden="true">
          <use href="#vue" />
        </svg>
        <span class="header__name">Vue Practice Lab</span>
      </RouterLink>

      <button
        class="header__toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="header-nav"
        @click="toggleMenu"
      >
        <svg class="header__toggle-icon" width="22" height="22" aria-hidden="true">
          <use :href="isMenuOpen ? '#close' : '#menu'" />
        </svg>
        <span class="visually-hidden">{{ isMenuOpen ? "Закрыть меню" : "Открыть меню" }}</span>
      </button>

      <nav class="header__nav" aria-label="Основная навигация">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          class="header__link"
          :to="{ name: item.name }"
          active-class="header__link--active"
        >
          <svg class="header__link-icon" width="16" height="16" aria-hidden="true">
            <use :href="item.icon" />
          </svg>
          {{ item.label }}
        </RouterLink>
      </nav>

      <div v-if="isMenuOpen" class="header-overlay" @click="closeMenu" />

      <Transition name="header-nav">
        <nav
          v-if="isMenuOpen"
          id="header-nav"
          class="header__dropdown"
          aria-label="Основная навигация"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            class="header__link"
            :to="{ name: item.name }"
            active-class="header__link--active"
            @click="closeMenu"
          >
            <svg class="header__link-icon" width="16" height="16" aria-hidden="true">
              <use :href="item.icon" />
            </svg>
            {{ item.label }}
          </RouterLink>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute } from "vue-router"
import { useNoScroll } from "@/composables/useNoScroll"
import { useCloseOnBreakpoint } from "@/composables/useCloseOnBreakpoint"

const route = useRoute()
const isOverlay = computed(() => route.name === "home")
const isMenuOpen = ref(false)

const navItems = [
  { name: "tasks", label: "Задания", icon: "#clipboard-list" },
  { name: "about", label: "О проекте", icon: "#info" },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => closeMenu(),
)

useNoScroll(isMenuOpen)
useCloseOnBreakpoint(closeMenu)
</script>

<style lang="scss" scoped>
.header {
  z-index: 10;
  width: 100%;
  padding: 16px 0;
  background: var(--white);
  border-bottom: 1px solid var(--border-soft);

  &--overlay {
    position: absolute;
    background: var(--header-overlay);
    backdrop-filter: saturate(100%) blur(5px);
    border-bottom-color: var(--landing-border);
  }

  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
  }

  &__logo {
    flex-shrink: 0;
  }

  &__name {
    font-size: var(--ff-h4);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__toggle {
    display: none;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border: 1px solid var(--border-soft);
    border-radius: 10px;
    background: var(--white);
    color: var(--text);
    transition:
      background-color var(--trs35),
      border-color var(--trs35);

    &:hover {
      background: var(--surface);
    }
  }

  &__toggle-icon {
    display: block;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    left: 0;
    z-index: 11;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    margin: 0 16px;
    padding: 8px;
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    background: var(--white);
    box-shadow: 0 8px 24px var(--shadow-md);
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 8px;
    color: var(--text-muted);
    font-size: var(--ff-caption);
    font-weight: 500;
    transition:
      color var(--trs35),
      background-color var(--trs35);

    &:hover {
      background: var(--surface);
      color: var(--text);
    }

    &--active {
      background: var(--accent-soft);
      color: var(--accent-hover);
    }
  }

  &__link-icon {
    flex-shrink: 0;
  }
}

.header-nav-enter-active,
.header-nav-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.header-nav-enter-from,
.header-nav-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (width <= 768px) {
  .header {
    &--overlay &__toggle {
      background: var(--landing-fill);
      border-color: var(--landing-border);
      backdrop-filter: blur(8px);
    }

    &--overlay &__dropdown {
      border-color: var(--landing-border);
      background: var(--header-menu);
      box-shadow: 0 8px 24px var(--header-menu-shadow);
    }

    &__toggle {
      display: inline-flex;
    }

    &__nav {
      display: none;
    }

    &__dropdown {
      display: flex;
    }

    &__dropdown &__link {
      padding: 12px 14px;
    }
  }

  .header-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100dvh;
    background-color: transparent;
  }
}
</style>
