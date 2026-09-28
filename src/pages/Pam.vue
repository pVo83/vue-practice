<template>
  <div class="pam-page">
    <RouterLink class="pam-page__back" :to="{ name: 'layouts' }">
      <svg class="pam-page__back-icon" width="16" height="16" aria-hidden="true">
        <use href="#arrow-left" />
      </svg>
      К макетам
    </RouterLink>

    <PamLayout v-slot="{ activeItem }">
      <DashboardView :title="activeItem.label" />
    </PamLayout>
  </div>
</template>

<script setup>
import PamLayout from "@/layouts/PamLayout.vue"
import DashboardView from "@/components/pam/views/DashboardView.vue"
</script>

<style lang="scss" scoped>
.pam-page {
  position: relative;
  min-height: 100vh;

  &__back {
    position: fixed;
    top: 24px;
    right: 16px;
    z-index: 20;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border: 1px solid var(--border-soft);
    border-radius: 8px;
    background: var(--white);
    color: var(--accent);
    font-size: var(--ff-caption);
    font-weight: 600;
    box-shadow: 0 2px 8px var(--shadow);
    transition:
      color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--accent);
      color: var(--accent-hover);
    }
  }

  &__back-icon {
    flex-shrink: 0;
  }
}
</style>
