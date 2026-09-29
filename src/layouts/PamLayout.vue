<template>
  <div class="pam" :class="{ 'pam--collapsed': isCollapsed }">
    <Sidebar
      :collapsed="isCollapsed"
      :active-id="activeId"
      @select="selectNav"
      @toggle-collapse="toggleCollapse"
    />

    <div class="pam__body">
      <Header />

      <main class="pam__main">
        <header class="pam__page-head">
          <h1 class="pam__page-title">{{ activeItem.label }}</h1>
          <p class="pam__page-description">{{ activeItem.description }}</p>
        </header>
        <slot :active-id="activeId" :active-item="activeItem" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { navItems } from "@/components/pam/consts/nav"
import Header from "@/components/pam/Header.vue"
import Sidebar from "@/components/pam/Sidebar.vue"

const activeId = ref(navItems[0].id)
const isCollapsed = ref(false)

const activeItem = computed(
  () => navItems.find((item) => item.id === activeId.value) ?? navItems[0],
)

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
}

function selectNav(id) {
  activeId.value = id
}
</script>

<style lang="scss" scoped>
.pam {
  --pam-w: 240px;
  --pam-w-sm: 80px;
  --pam-gap: 24px;
  --pam-current: var(--pam-w);

  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: var(--pam-gap);
  width: 100%;
  height: 100dvh;
  max-height: 100dvh;
  min-height: 0;
  padding: 16px;
  background: var(--surface);
  overflow: hidden;

  &--collapsed {
    --pam-current: var(--pam-w-sm);
  }

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
  }

  &__main {
    flex: 1;
    min-width: 0;
    min-height: 0;
    padding: 16px 0;
    overflow: auto;
    overscroll-behavior: contain;
  }

  &__page-head {
    margin: 0 0 16px;
  }

  &__page-title {
    margin: 0 0 6px;
    color: var(--text);
    font-size: var(--ff-h3);
    font-weight: 600;
    line-height: 1.2;
  }

  &__page-description {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--ff-caption);
    font-weight: 400;
    line-height: 1.45;
  }
}
</style>
