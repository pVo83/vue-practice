<template>
  <div class="search-filter">
    <div class="search-filter__categories">
      <button
        v-for="item in categories"
        :key="item"
        class="search-filter__btn"
        :class="{ 'search-filter__btn--active': category === item }"
        type="button"
        @click="category = item"
      >
        {{ item }}
      </button>
    </div>

    <input
      v-model="search"
      class="search-filter__input"
      type="text"
      placeholder="Введите имя для поиска..."
    />

    <ul v-if="listUser.length" class="search-filter__list">
      <li v-for="user in listUser" :key="user.id" class="search-filter__item">
        {{ user.name }}
      </li>
    </ul>
    <span v-else class="search-filter__empty">Ничего не найдено</span>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"

const search = ref("")
const category = ref("all")

const categories = ["all", "frontend", "backend", "design"]

const users = ref([
  { id: 1, name: "Анна", category: "frontend" },
  { id: 2, name: "Борис", category: "frontend" },
  { id: 3, name: "Мария", category: "backend" },
  { id: 4, name: "Николай", category: "design" },
  { id: 5, name: "Евгений", category: "design" },
])

const listUser = computed(() => {
  let list = users.value

  if (category.value !== "all") {
    list = list.filter((user) => user.category === category.value)
  }

  const searchText = search.value.toLowerCase().trim()

  if (searchText) {
    list = list.filter((user) => user.name.toLowerCase().includes(searchText))
  }

  return list
})
</script>

<style lang="scss" scoped>
.search-filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 348px;

  &__categories {
    display: flex;
    gap: 8px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    &--active {
      border-color: var(--accent);
      background-color: var(--accent);
      color: var(--white);

      &:hover {
        border-color: var(--accent-hover);
        background-color: var(--accent-hover);
        color: var(--white);
      }
    }
  }

  &__input {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--white);
    color: var(--text);
    font-size: var(--ff-body);
    outline: none;
    transition: border-color var(--trs35);

    &:focus {
      border-color: var(--accent);
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__item {
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--accent-soft);
    color: var(--text);
    font-size: var(--ff-body);
  }

  &__empty {
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }
}
</style>
