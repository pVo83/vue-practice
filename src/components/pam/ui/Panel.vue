<template>
  <section class="pam-panel" :class="tone && `pam-panel--${tone}`">
    <header class="pam-panel__header">
      <div class="pam-panel__titles">
        <div class="pam-panel__title-row">
          <h3 class="pam-panel__title">{{ title }}</h3>
          <RouterLink v-if="to" class="pam-panel__link" :to="to">
            {{ linkLabel }}
          </RouterLink>
        </div>
        <p v-if="description" class="pam-panel__description">{{ description }}</p>
      </div>
    </header>
    <div class="pam-panel__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  to: {
    type: [String, Object],
    default: null,
  },
  linkLabel: {
    type: String,
    default: "Открыть",
  },
  tone: {
    type: String,
    default: "",
    validator: (value) => ["", "attention", "health"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.pam-panel {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 220px;
  height: 100%;
  padding: 16px;
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  background: var(--white);
  scroll-snap-align: start;

  &--attention {
    border-color: color-mix(in srgb, var(--warning) 28%, var(--border-soft));
    background: color-mix(in srgb, var(--warning) 6%, var(--white));
  }

  &--health {
    border-color: color-mix(in srgb, var(--error) 28%, var(--border-soft));
    background: color-mix(in srgb, var(--error) 6%, var(--white));
  }

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 12px;
  }

  &__titles {
    width: 100%;
    min-width: 0;
  }

  &__title-row {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 4px 8px;
  }

  &__title {
    margin: 0;
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    line-height: 1.2;
  }

  &__description {
    margin: 4px 0 0;
    color: var(--text-muted);
    font-size: var(--ff-small);
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__link {
    flex-shrink: 0;
    color: var(--accent);
    font-size: var(--ff-small);
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  &__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
  }
}
</style>
