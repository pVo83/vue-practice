<template>
  <PamDesktopOnly v-if="isNarrow" />
  <PamLayout v-else>
    <DashboardView />
  </PamLayout>
</template>

<script setup>
import { useMediaQuery } from "@/composables/useMediaQuery"
import PamDesktopOnly from "@/components/pam/PamDesktopOnly.vue"
import PamLayout from "@/layouts/PamLayout.vue"
import DashboardView from "@/components/pam/views/DashboardView.vue"

const isNarrow = useMediaQuery("(width <= 1024px)")
</script>
