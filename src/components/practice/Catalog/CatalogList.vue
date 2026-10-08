<template>
  <div class="catalog">
    <ul class="catalog__list">
      <li v-for="item in catalogItems" :key="item.id" class="catalog__item">
        <button class="catalog__link" type="button" @click="openItem(item.id)">
          <span class="catalog__title">{{ item.title }}</span>
          <span class="catalog__arrow" aria-hidden="true">→</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { catalogItems } from "@/data/catalogItems"

const router = useRouter()

function openItem(id: number) {
  router.push(`/projects/catalog/${id}`)
}
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--white);
  box-shadow: 0 8px 24px var(--shadow);

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    padding: 12px 14px;
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: 8px;
    background: var(--surface-soft);
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover {
      background: var(--accent-soft);
      color: var(--accent);
    }
  }

  &__title {
    min-width: 0;
  }

  &__arrow {
    flex-shrink: 0;
    color: var(--accent);
  }
}
</style>
