<template>
  <div class="pagination">
    <ul v-if="pageItems.length" class="pagination__list">
      <li v-for="item in pageItems" :key="item.id" class="pagination__item">{{ item.title }}</li>
    </ul>
    <p v-else class="pagination__empty">Нет элементов</p>

    <div class="pagination-controls">
      <button
        class="pagination-controls__btn"
        type="button"
        :disabled="currentPage === 1"
        @click="goTo(currentPage - 1)"
      >
        Назад
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        class="pagination-controls__btn"
        :class="{ 'pagination-controls__btn--active': page === currentPage }"
        type="button"
        @click="goTo(page)"
      >
        {{ page }}
      </button>

      <button
        class="pagination-controls__btn"
        type="button"
        :disabled="currentPage === totalPages"
        @click="goTo(currentPage + 1)"
      >
        Вперед
      </button>
    </div>

    <div class="pagination__meta">
      Страница: {{ currentPage }} из {{ totalPages }} <span>Всего: {{ items.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

const pageSize = 5
const currentPage = ref(1)

const items = ref(
  Array.from({ length: 23 }, (_, index) => ({
    id: index + 1,
    title: `Элемент: ${index + 1}`,
  })),
)

const pageItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return items.value.slice(start, start + pageSize)
})

const totalPages = computed(() => Math.max(1, Math.ceil(items.value.length / pageSize)))

function goTo(page) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 420px;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 6px;
  }

  &__item {
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    font-size: var(--ff-body);
  }

  &__empty,
  &__meta {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
}

.pagination-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  gap: 6px;

  &__btn {
    min-width: 36px;
    height: 36px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--white);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }

    &--active {
      border-color: var(--accent);
      background: var(--accent);
      color: var(--white);

      &:hover:not(:disabled) {
        border-color: var(--accent-hover);
        background: var(--accent-hover);
        color: var(--white);
      }
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
}
</style>
