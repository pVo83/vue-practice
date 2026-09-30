<template>
  <ul v-if="items.length" class="pam-panel-list" role="list">
    <li v-for="item in items" :key="item.id" class="pam-panel-list__item">
      <div class="pam-panel-list__row">
        <span
          class="pam-panel-list__icon"
          :class="item.tone && `pam-panel-list__icon--${item.tone}`"
          aria-hidden="true"
        >
          <svg width="16" height="16">
            <use :href="item.icon" />
          </svg>
        </span>
        <span class="pam-panel-list__main">
          <span class="pam-panel-list__title">{{ item.title }}</span>
          <span class="pam-panel-list__meta">{{ item.meta }}</span>
        </span>
        <span
          v-if="item.status"
          class="pam-panel-list__status"
          :class="item.tone && `pam-panel-list__status--${item.tone}`"
        >
          {{ item.status }}
        </span>
      </div>
    </li>
  </ul>
  <div v-else class="pam-panel-empty" :class="{ 'pam-panel-empty--ok': ok }">
    <span v-if="ok" class="pam-panel-list__icon pam-panel-list__icon--success" aria-hidden="true">
      <svg width="16" height="16">
        <use href="#circle-check" />
      </svg>
    </span>
    <p class="pam-panel-empty__text">{{ emptyText }}</p>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  emptyText: {
    type: String,
    default: "Пока нет данных",
  },
  ok: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.pam-panel-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    min-width: 0;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    border-radius: 10px;
    text-align: left;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--surface);
    color: var(--text-muted);

    &--success {
      background: var(--accent-soft);
      color: var(--accent);
    }

    &--warning {
      background: var(--warning-bg);
      color: var(--warning);
    }

    &--error {
      background: var(--error-soft);
      color: var(--error);
    }

    &--info {
      background: var(--info-soft);
      color: var(--info);
    }

    &--muted {
      background: var(--surface);
      color: var(--text-muted);
    }
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  &__title {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__meta {
    color: var(--text-muted);
    font-size: var(--ff-small);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__status {
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: var(--ff-small);
    font-weight: 600;
    white-space: nowrap;

    &--error {
      color: var(--error);
    }

    &--warning {
      color: var(--warning-text);
    }

    &--success {
      color: var(--accent);
    }
  }
}

.pam-panel-empty {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  padding: 4px 8px 0;

  &--ok {
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 4px 0 0;
  }

  &__text {
    margin: 0;
    color: color-mix(in srgb, var(--text) 55%, transparent);
    font-size: var(--ff-caption);
    line-height: 1.4;
  }
}
</style>
