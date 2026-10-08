<template>
  <form class="form" @submit.prevent="submitForm">
    <h2 class="form__title">Форма регистрации</h2>
    <div class="form__content">
      <div class="form__list">
        <div class="form__item">
          <label for="input-name">Ваше имя</label>
          <input
            id="input-name"
            v-model="name"
            class="form__input"
            :class="{ 'form__input--error': errors.name }"
            type="text"
            placeholder="Введите ваше имя"
            autocomplete="off"
            @blur="onBlur('name')"
          />
          <Transition name="form-message">
            <p v-if="errors.name" class="form__message form__message--error">{{ errors.name }}</p>
          </Transition>
        </div>
        <div class="form__item">
          <label for="input-email">Ваша почта</label>
          <input
            id="input-email"
            v-model="email"
            class="form__input"
            :class="{ 'form__input--error': errors.email }"
            type="text"
            placeholder="Введите вашу почту"
            autocomplete="off"
            @blur="onBlur('email')"
          />
          <Transition name="form-message">
            <p v-if="errors.email" class="form__message form__message--error">{{ errors.email }}</p>
          </Transition>
        </div>
        <div class="form__item">
          <label for="input-password">Ваш пароль</label>
          <input
            id="input-password"
            v-model="password"
            class="form__input"
            :class="{ 'form__input--error': errors.password }"
            type="password"
            placeholder="Введите ваш пароль"
            autocomplete="off"
            @blur="onBlur('password')"
          />
          <Transition name="form-message">
            <p v-if="errors.password" class="form__message form__message--error">
              {{ errors.password }}
            </p>
          </Transition>
        </div>

        <Transition name="form-message">
          <div
            v-if="error || success"
            class="form__message"
            :class="{ 'form__message--error': error, 'form__message--success': success }"
          >
            {{ error || success }}
          </div>
        </Transition>
      </div>
    </div>
    <button class="form__btn" type="submit" :disabled="(submitted && !isValid) || loading">
      {{ loading ? "Загрузка..." : "Зарегистрироваться" }}
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue"

import { useFormValidation } from "@/composables/useFormValidation"

const { name, email, password, submitted, errors, isValid, onBlur, validateAll, validateReset } =
  useFormValidation()

const error = ref("")
const success = ref("")
const loading = ref(false)

async function submitForm() {
  submitted.value = true
  error.value = ""
  success.value = ""

  if (!validateAll()) {
    return
  }

  try {
    loading.value = true

    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    })

    if (!res.ok) {
      throw new Error("Ошибка регистрации")
    }

    validateReset()
    success.value = "Регистрация прошла успешно"

    setTimeout(() => {
      success.value = ""
    }, 3000)
  } catch (err) {
    console.error("Ошибка регистрации", err)
    error.value = "Ошибка регистрации"
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background-color: var(--white);
  gap: 16px;
  box-shadow: 0 8px 24px var(--shadow);

  &__title {
    margin: 0;
    color: var(--text);
    font-size: var(--ff-label);
    font-weight: 600;
    text-align: center;
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      color: var(--text);
      font-size: var(--ff-caption);
      font-weight: 600;
    }
  }

  &__input {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-body);
    outline: none;
    transition: border-color var(--trs35);

    &:focus {
      border-color: var(--accent);
    }

    &--error {
      border-color: var(--error);
    }

    &::placeholder {
      color: var(--text-muted);
    }
  }

  &__message {
    font-size: var(--ff-small);
    font-weight: 500;

    &--error {
      position: absolute;
      bottom: -20px;
      color: var(--error);
    }

    &--success {
      position: absolute;
      bottom: -20px;
      color: var(--accent);
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    margin-top: 16px;
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
}

.form-message-enter-active,
.form-message-leave-active {
  transition: opacity var(--trs35);
}

.form-message-enter-from,
.form-message-leave-to {
  opacity: 0;
}
</style>
