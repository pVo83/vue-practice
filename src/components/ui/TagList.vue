<template>
  <ul class="tag-list" :aria-label="ariaLabel || undefined">
    <li v-for="item in items" :key="item" class="tag-list__item">{{ item }}</li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
})
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
}
</style>
