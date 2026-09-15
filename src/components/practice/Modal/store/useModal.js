import { defineStore } from "pinia"
import { ref } from "vue"

export const useModal = defineStore("modal", () => {
  const isOpen = ref(false)

  function toggleModal() {
    isOpen.value = !isOpen.value
  }

  function closeModal() {
    isOpen.value = false
  }

  return { toggleModal, closeModal, isOpen }
})
