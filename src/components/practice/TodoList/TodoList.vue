<template>
  <div class="todo">
    <div class="todo__tabs">
      <button
        class="todo__tab"
        :class="{ 'todo__tab--active': filter === 'all' }"
        type="button"
        @click="filter = 'all'"
      >
        Все
      </button>
      <button
        class="todo__tab"
        :class="{ 'todo__tab--active': filter === 'active' }"
        type="button"
        @click="filter = 'active'"
      >
        Активные
      </button>
      <button
        class="todo__tab"
        :class="{ 'todo__tab--active': filter === 'completed' }"
        type="button"
        @click="filter = 'completed'"
      >
        Завершенные
      </button>
    </div>

    <div class="todo__top">
      <input v-model="newTodoText" class="todo__input" type="text" @keyup.enter="addTodo" />
      <button class="todo__btn-add" type="button" :disabled="!newTodoText.trim()" @click="addTodo">
        Создать
      </button>
    </div>

    <div class="todo__body">
      <ul v-if="todos.length" class="todo__list">
        <li v-for="todo in todosFilter" :key="todo.id" class="todo__item">
          <label class="todo__text">
            <input v-model="todo.done" type="checkbox" class="todo__checkbox" />
            {{ todo.text }}
          </label>

          <button class="todo__btn-remove" type="button" @click="removeTodo(todo.id)">
            Удалить
          </button>
        </li>
      </ul>
      <span v-else class="todo__empty">Ничего не создано</span>

      <button
        v-if="filter === 'completed' && todosFilter.length"
        type="button"
        class="todo__btn-clear"
        @click="clearCompleted"
      >
        Очистить выполненное
      </button>

      <button
        v-if="filter === 'all' && todos.length"
        type="button"
        class="todo__btn-all"
        @click="deleteAll"
      >
        Удалить все
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodos } from "@/components/practice/TodoList/composable/useTodos"

const { newTodoText, filter, todos, todosFilter, addTodo, removeTodo, clearCompleted, deleteAll } = useTodos()
</script>

<style lang="scss" scoped>
.todo {
  display: flex;
  flex-direction: column;
  max-width: 420px;
  gap: 16px;

  &__tabs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  &__tab {
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

  &__top {
    display: flex;
    align-items: center;
    gap: 8px;
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

  &__btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
      border-color var(--trs35),
      opacity var(--trs35);

    &:hover:not(:disabled) {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
    gap: 8px;
    max-height: 280px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-shrink: 0;
    min-height: 42px;
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--accent-soft);
  }

  &__checkbox {
    width: 16px;
    height: 16px;
    accent-color: var(--accent-hover);
  }

  &__text {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    color: var(--text);
    font-size: var(--ff-body);
  }

  &__btn-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--error);
    border-radius: 8px;
    background-color: var(--white);
    color: var(--error);
    font-size: var(--ff-caption);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &:hover {
      background-color: var(--error);
      color: var(--white);
    }
  }

  &__btn-all,
  &__btn-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    height: 36px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover {
      border-color: var(--error);
      color: var(--error);
    }
  }

  &__empty {
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }
}
</style>
