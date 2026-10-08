<template>
  <div class="site-container">
    <Header />
    <router-view />
    <Icons />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Icons from "./assets/Icons.vue"
</script>
