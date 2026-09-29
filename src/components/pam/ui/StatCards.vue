<template>
  <ul class="pam-stat-cards" role="list">
    <li v-for="card in cards" :key="card.label" class="pam-stat-cards__item">
      <div class="pam-stat-cards__main">
        <span class="pam-stat-cards__label">{{ card.label }}</span>
        <span class="pam-stat-cards__value">{{ card.value }}</span>
        <span class="pam-stat-cards__hint">{{ card.hint }}</span>
      </div>

      <div class="pam-stat-cards__aside" aria-hidden="true">
        <span class="pam-stat-cards__icon" :class="`pam-stat-cards__icon--${card.tone}`">
          <svg width="20" height="20">
            <use :href="card.icon" />
          </svg>
        </span>
        <SparkBars
          v-if="card.spark?.length"
          :values="card.spark"
          :tone="card.tone"
          :label="`${card.label}: динамика`"
        />
      </div>
    </li>
  </ul>
</template>

<script setup>
import SparkBars from "@/components/ui/SparkBars.vue"

defineProps({
  cards: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.pam-stat-cards {
  display: grid;
  grid-template-columns: repeat(4, minmax(278px, 1fr));
  gap: 12px;
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;

  &__item {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    min-width: 0;
    padding: 16px;
    border: 1px solid var(--border-soft);
    border-radius: 16px;
    background: var(--white);
    scroll-snap-align: start;
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    min-width: 0;
  }

  &__aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    gap: 24px;
  }

  &__label {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
  }

  &__value {
    color: var(--text);
    font-size: var(--ff-h2);
    font-weight: 700;
    line-height: 1.1;
  }

  &__hint {
    color: var(--text-muted);
    font-size: var(--ff-small);
    line-height: 1.35;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
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
</style>
