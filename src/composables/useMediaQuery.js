import { onMounted, onUnmounted, ref } from "vue"

/** Реактивный matchMedia. `query` — например `(width <= 1024px)`. */
export function useMediaQuery(query) {
  const matches = ref(
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  )
  let mql

  function onChange() {
    matches.value = mql.matches
  }

  onMounted(() => {
    mql = window.matchMedia(query)
    onChange()
    mql.addEventListener("change", onChange)
  })

  onUnmounted(() => {
    mql?.removeEventListener("change", onChange)
  })

  return matches
}
