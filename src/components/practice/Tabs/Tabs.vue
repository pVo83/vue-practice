<template>
  <TabPanel v-model="activeTab" :tabs="tabs">
    <template #panel-1>
      <p>Сегодня облачно, вечером возможен небольшой дождь. Не забудь зонт.</p>
    </template>
  </TabPanel>
</template>

<script setup>
import { ref } from "vue"
import TabPanel from "./TabPanel.vue"
import ContactsPanel from "./ContactsPanel.vue"

const tabs = ref([
  {
    id: 1,
    title: "Главная",
  },
  {
    id: 2,
    title: "О нас",
    description: "Работаем с 2019 года. Пьём кофе, спорим про отступы и иногда успеваем в срок.",
  },
  {
    id: 3,
    title: "Контакты",
    component: ContactsPanel,
  },
])

const activeTab = ref(tabs.value[0].id)
</script>
