import { onMounted, onUnmounted } from "vue"

export function useCloseOnBreakpoint(close, maxWidth = 768) {
  function onResize() {
    if (window.innerWidth > maxWidth) close()
  }

  onMounted(() => window.addEventListener("resize", onResize))
  onUnmounted(() => window.removeEventListener("resize", onResize))
}
