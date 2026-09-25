import { onUnmounted, watch } from "vue"

export function useNoScroll(isOpen) {
  watch(isOpen, (open) => {
      document.body.classList.toggle("no-scroll", open)
    },
    { immediate: true },
  )

  onUnmounted(() => {
    document.body.classList.remove("no-scroll")
  })
}
