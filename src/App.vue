<template>
  <div class="site-container">
    <Header v-if="!route.meta.hideHeader" />
    <router-view />
    <Icons />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import Header from "@/components/Header.vue"
import Icons from "./assets/Icons.vue"

const route = useRoute()
</script>
