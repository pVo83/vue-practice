import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useAuth = defineStore("auth", () => {
  const error = ref("")

  const user = ref(null)
  const isAuthenticated = computed(() => user.value !== null)

  const isAdmin = computed(() => user.value?.role === "admin")

  function loginAs(role) {
    error.value = ""

    const names = {
      admin: "Администратор",
      user: "Пользователь",
    }

    if (!names[role]) {
      error.value = "Неизвестная роль"

      setTimeout(() => {
        error.value = ""
      }, 3000)
      return
    }

    user.value = {
      name: names[role],
      role,
    }
  }

  function logout() {
    user.value = null
  }

  return { user, error, loginAs, logout, isAuthenticated, isAdmin }
})
