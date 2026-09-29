<template>
  <header class="pam-header">
    <SearchGlobal class="pam-header__search" />

    <div class="pam-header__actions">
      <NotificationBell />
      <div class="pam-header__divider" aria-hidden="true" />
      <UserMenu />
    </div>
  </header>
</template>

<script setup>
import SearchGlobal from "@/components/pam/header/SearchGlobal.vue"
import NotificationBell from "@/components/pam/header/NotificationBell.vue"
import UserMenu from "@/components/pam/header/UserMenu.vue"
</script>

<style lang="scss" scoped>
.pam-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 32px;
  align-items: center;
  min-height: 90px;
  padding: 0 0 16px;
  border-bottom: 1px solid var(--border-soft);

  &__search {
    justify-self: center;
    width: 100%;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  &__divider {
    flex-shrink: 0;
    width: 1px;
    height: 24px;
    background: var(--border);
  }
}
</style>
