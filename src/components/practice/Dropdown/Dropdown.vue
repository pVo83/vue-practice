<template>
  <div class="dropdown">
    <button class="dropdown__btn" type="button" :aria-expanded="isOpen" @click="toggleMenu">
      Открыть
    </button>

    <div v-if="isOpen" class="dropdown__overlay" @click="closeMenu" />

    <Transition name="dropdown">
      <div v-if="isOpen" class="dropdown__list">
        <ul v-if="items.length" class="dropdown__items">
          <li v-for="item in items" :key="item.id" class="dropdown__item">
            {{ item.title }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

const isOpen = ref(false)

interface Item {
  id: number
  title: string
}

const items = ref<Item[]>([
  { id: 1, title: "Главная" },
  { id: 2, title: "О Нас" },
  { id: 3, title: "Продукты" },
  { id: 4, title: "Блог" },
  { id: 5, title: "Контакты" },
])

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function closeEscape(event: KeyboardEvent) {
  if (event.key === "Escape") closeMenu()
}

onMounted(() => {
  window.addEventListener("keydown", closeEscape)
})

onUnmounted(() => {
  window.removeEventListener("keydown", closeEscape)
})
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  width: fit-content;

  &__btn {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    background-color: var(--accent);
    color: var(--white);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }

    &[aria-expanded="true"] {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }
  }

  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
  }

  &__list {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    z-index: 2;
    padding: 6px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--white);
    min-width: 180px;
    box-shadow: 0 8px 24px var(--shadow-md);
  }

  &__items {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    padding: 10px 12px;
    border-radius: 8px;
    color: var(--text);
    font-size: var(--ff-body);
    white-space: nowrap;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &:hover {
      background-color: var(--accent-soft);
      color: var(--accent);
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
