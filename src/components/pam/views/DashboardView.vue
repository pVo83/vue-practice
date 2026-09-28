<template>
  <div class="pam-dashboard">
    <p class="pam-dashboard__heading" aria-hidden="true">{{ title }}</p>
    <ul class="pam-dashboard__cards">
      <li v-for="card in cards" :key="card.label" class="pam-dashboard__card">
        <div class="pam-dashboard__card-main">
          <span class="pam-dashboard__card-label">{{ card.label }}</span>
          <span class="pam-dashboard__card-value">{{ card.value }}</span>
          <span class="pam-dashboard__card-hint">{{ card.hint }}</span>
        </div>
        <span
          class="pam-dashboard__card-icon"
          :class="`pam-dashboard__card-icon--${card.tone}`"
          aria-hidden="true"
        >
          <svg width="18" height="18">
            <use :href="card.icon" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { cards } from "../consts/cards"

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.pam-dashboard {
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
</style>
