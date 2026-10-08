<template>
  <div class="fetch-list">
    <span v-if="loading" class="fetch-list__loading">Загрузка...</span>
    <template v-else-if="error">
      <span class="fetch-list__error">{{ error }}</span>
      <button class="fetch-list__btn fetch-list__btn--retry" type="button" @click="retry">
        Повторить
      </button>
    </template>
    <ul v-else-if="users.length" class="fetch-list__users">
      <li v-for="user in users" :key="user.id" class="fetch-list__item">
        {{ user.id }} | {{ user.name }}
        <button
          class="fetch-list__btn"
          type="button"
          :disabled="deletingId === user.id"
          @click="deleteUser(user.id)"
        >
          Удалить
        </button>
      </li>
    </ul>
    <span v-else class="fetch-list__text">Пусто...</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { API, type User } from "@/components/api/API"

const loading = ref(false)
const error = ref<string | null>(null)
const deletingId = ref<number | null>(null)
const users = ref<User[]>([])

async function loadUsers() {
  if (loading.value) return

  loading.value = true
  error.value = null

  try {
    const res = await API.getAll()

    users.value = res.data
  } catch (err) {
    console.error("Ошибка загрузки", err)
    error.value = "Ошибка загрузки пользователей"
  } finally {
    loading.value = false
  }
}

async function deleteUser(id: number) {
  if (deletingId.value !== null) return
  deletingId.value = id

  error.value = null

  try {
    await API.deleteUser(id)

    users.value = users.value.filter((user) => user.id !== id)
  } catch (err) {
    console.error("Ошибка удаления", err)
    error.value = "Ошибка удаления пользователя"
  } finally {
    deletingId.value = null
  }
}

onMounted(loadUsers)

function retry() {
  loadUsers()
}
</script>

<style lang="scss" scoped>
.fetch-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 420px;
  min-height: 220px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--white);
  box-shadow: 0 8px 24px var(--shadow);

  &__loading,
  &__error,
  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    text-align: center;
    font-size: var(--ff-body);
    font-weight: 600;
  }

  &__loading {
    color: var(--accent);
  }

  &__error {
    padding: 16px;
    border-radius: 8px;
    background: var(--error-soft);
    color: var(--error);
  }

  &__btn {
    width: fit-content;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    background-color: var(--accent);
    color: var(--white);
    cursor: pointer;
    transition:
      background-color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &--retry {
      margin: 0 auto;
    }
  }

  &__text {
    color: var(--text-muted);
    font-weight: 500;
  }

  &__users {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: auto;
    gap: 6px;
    max-height: 280px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface-soft);
    color: var(--text);
    font-size: var(--ff-body);
    border-left: 3px solid var(--accent);
  }
}
</style>
