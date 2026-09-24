<template>
  <ul class="tag-list" :class="variantClass" :aria-label="ariaLabel || undefined">
    <li v-for="item in items" :key="item" class="tag-list__item">{{ item }}</li>
  </ul>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "glass"].includes(value),
  },
})

const variantClass = computed(() =>
  props.variant === "default" ? undefined : `tag-list--${props.variant}`,
)
</script>

<style lang="scss" scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &__item {
    padding: 10px 16px;
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    background: var(--white);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 500;
  }

  &--glass {
    gap: 8px;
  }

  &--glass &__item {
    padding: 8px 14px;
    border: 1px solid var(--landing-border-soft);
    border-radius: 10px;
    background: var(--landing-tile-soft);
    backdrop-filter: blur(8px);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 500;
  }
}
</style>
