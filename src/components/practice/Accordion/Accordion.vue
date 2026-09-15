<template>
  <div class="accordion">
    <AccordionList :items="items" :multiple="true" :index="1" />
    <AccordionList :items="items" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import AccordionList from "./AccordionList.vue"

const items = ref([
  {
    id: 1,
    title: "Первый вариант",
    descr: "Коты спят по шестнадцать часов в сутки и всё равно выглядят уставшими.",
  },
  {
    id: 2,
    title: "Второй вариант",
    descr: "Если суп слишком солёный, в него иногда кладут сырую картошку. Работает не всегда.",
  },
  {
    id: 3,
    title: "Третий вариант",
    descr: "Поезд опоздал на семь минут, зато в вагоне было тихо и пахло кофе.",
  },
])
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
}
</style>
