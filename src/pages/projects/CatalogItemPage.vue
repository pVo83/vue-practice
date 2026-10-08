<template>
  <main class="catalog-item-page">
    <div class="container">
      <CatalogItem />
    </div>
  </main>
</template>

<script setup>
import CatalogItem from "@/components/practice/Catalog/CatalogItem.vue"
</script>

<style lang="scss" scoped>
.catalog-item-page {
  padding: 32px 0 64px;
}
</style>
