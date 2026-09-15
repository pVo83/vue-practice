import { onMounted, onUnmounted } from "vue"

export function useCloseOnEscape(onClose) {
  function onKeydown(event) {
    if (event.key === "Escape") {
      onClose()
    }
  }

  onMounted(() => {
    window.addEventListener("keydown", onKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener("keydown", onKeydown)
  })
}
