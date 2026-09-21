<template>
  <div class="auth-demo">
    <section class="auth-demo__section">
      <h3 class="auth-demo__title">1. Кто ты (authentication)</h3>
      <p v-if="!auth.isAuthenticated" class="auth-demo__status">Гость — ещё не вошёл</p>
      <p v-else class="auth-demo__status">
        Вошёл: <strong>{{ auth.user.name }}</strong
        >, роль:
        <strong>{{ auth.user.role }}</strong>
      </p>

      <div class="auth-demo__actions">
        <button class="auth-demo__btn" type="button" @click="auth.loginAs('user')">
          Войти как покупатель
        </button>
        <button
          class="auth-demo__btn auth-demo__btn--primary"
          type="button"
          @click="auth.loginAs('admin')"
        >
          Войти как админ
        </button>
        <button
          class="auth-demo__btn auth-demo__btn--ghost"
          type="button"
          :disabled="!auth.isAuthenticated"
          @click="auth.logout"
        >
          Выйти
        </button>

        <span v-if="auth.error" class="auth-demo__error">{{ auth.error }}</span>
      </div>
    </section>

    <section class="auth-demo__section">
      <h3 class="auth-demo__title">2. Защита страниц (router guard)</h3>
      <p class="auth-demo__text">
        Ссылка на админ-панель видна только admin. Guard на маршруте не пускает гостя и
        покупателя, даже по прямому URL.
      </p>
      <div v-if="auth.isAdmin" class="auth-demo__links">
        <RouterLink class="auth-demo__link" :to="{ name: 'project-auth-admin' }">
          Открыть админ-панель
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAuth } from "./store/useAuth"

const auth = useAuth()
</script>

<style lang="scss" scoped>
.auth-demo {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  gap: 16px;

  &__section {
    padding: 16px;
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    background: var(--white);
    box-shadow: 0 8px 24px var(--shadow);
  }

  &__title {
    margin: 0 0 10px;
    color: var(--text);
    font-size: var(--ff-h4);
    font-weight: 600;
  }

  &__status,
  &__text {
    margin: 0 0 12px;
    color: var(--text);
    font-size: var(--ff-caption);
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__btn {
    height: 40px;
    padding: 0 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      opacity var(--trs35);

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent-hover);
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &--primary {
      border-color: var(--accent);
      background: var(--accent);
      color: var(--white);

      &:hover:not(:disabled) {
        border-color: var(--accent-hover);
        background: var(--accent-hover);
        color: var(--white);
      }
    }

    &--ghost {
      background: transparent;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__link {
    color: var(--accent-hover);
    font-size: var(--ff-caption);
    font-weight: 600;
  }

  &__error {
    flex-basis: 100%;
    margin: 0;
    color: var(--error);
    font-size: var(--ff-small);
    font-weight: 500;
  }
}
</style>
