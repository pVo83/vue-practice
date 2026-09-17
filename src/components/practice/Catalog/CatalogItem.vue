<template>
  <div class="catalog-item">
    <template v-if="item">
      <h2 class="catalog-item__title">{{ item.title }}</h2>
      <p class="catalog-item__text">{{ item.text }}</p>
    </template>
    <p v-else class="catalog-item__empty">Товар не найден</p>

    <button class="catalog-item__back" type="button" @click="goBack">К списку</button>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { catalogItems } from "@/data/catalogItems"

const route = useRoute()
const router = useRouter()

const item = computed(() => {
  const id = Number(route.params.id)
  return catalogItems.find((entry) => entry.id === id) ?? null
})

function goBack() {
  router.push("/projects/catalog")
}
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--white);
  box-shadow: 0 8px 24px var(--shadow);
  gap: 12px;

  &__title {
    margin: 0;
    color: var(--text);
    font-size: var(--ff-h4);
    font-weight: 600;
    line-height: 1.3;
  }

  &__text {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--ff-body);
    line-height: 1.6;
  }

  &__empty {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--ff-body);
    font-weight: 500;
  }

  &__back {
    height: 42px;
    margin-top: 4px;
    padding: 0 14px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    background-color: var(--accent);
    color: var(--white);
    font-size: var(--ff-body);
    font-weight: 600;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      border-color var(--trs35);
    align-self: flex-start;

    &:hover {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }
  }
}
</style>
