<template>
  <PamDesktopOnly v-if="isNarrow" />
  <PamLayout v-else>
    <Dashboard />
  </PamLayout>
</template>

<script setup>
import { useMediaQuery } from "@/composables/useMediaQuery"
import PamDesktopOnly from "@/components/pam/PamDesktopOnly.vue"
import PamLayout from "@/layouts/PamLayout.vue"
import Dashboard from "@/components/pam/views/Dashboard/index.vue"

const isNarrow = useMediaQuery("(width <= 1024px)")
</script>
