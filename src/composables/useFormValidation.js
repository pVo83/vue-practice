import { computed, ref, watch } from "vue"
import { EMAIL_REGEX, HAS_LETTER, HAS_DIGIT } from "@/composables/validation"

export function useFormValidation() {
  const name = ref("")
  const email = ref("")
  const password = ref("")
  const submitted = ref(false)

  const errors = ref({ name: "", email: "", password: "" })

  function validateName() {
    if (!name.value.trim()) return "Поле 'Ваше имя' должно быть заполнено"
    if (name.value.trim().length < 3) return "Имя: минимум 3 символа"
    return ""
  }

  function validateEmail() {
    if (!email.value.trim()) return "Поле 'Ваша почта' должно быть заполнено"
    if (!EMAIL_REGEX.test(email.value.trim())) return "Некорректный email"
    return ""
  }

  function validatePassword() {
    if (!password.value.trim()) return "Поле 'Ваш пароль' должно быть заполнено"
    if (password.value.length < 6) return "Пароль: минимум 6 символов"

    if (!HAS_LETTER.test(password.value)) return "Пароль: нужна хотя бы одна буква"
    if (!HAS_DIGIT.test(password.value)) return "Пароль: нужна хотя бы одна цифра"
    return ""
  }

  const isValid = computed(() => !validateName() && !validateEmail() && !validatePassword())

  watch([name, email, password], () => {
    errors.value = {
      name: errors.value.name ? validateName() : "",
      email: errors.value.email ? validateEmail() : "",
      password: errors.value.password ? validatePassword() : "",
    }
  })

  function onBlur(field) {
    const validators = {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
    }

    errors.value = {
      ...errors.value,
      [field]: validators[field](),
    }
  }

  function validateAll() {
    errors.value = {
      name: validateName(),
      email: validateEmail(),
      password: validatePassword(),
    }

    return !errors.value.name && !errors.value.email && !errors.value.password
  }

  function validateReset() {
    submitted.value = false
    errors.value = { name: "", email: "", password: "" }
    name.value = ""
    email.value = ""
    password.value = ""
  }

  return { name, email, password, submitted, errors, isValid, onBlur, validateAll, validateReset }
}
