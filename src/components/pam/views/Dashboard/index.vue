<template>
  <div class="pam-dashboard">
    <StatCards :cards="cards" />

    <div class="pam-dashboard__mid">
      <div class="pam-dashboard__mid-scroll">
        <Panel
          title="Требует внимания"
          description="Сигналы вне KPI — учётки, MFA входа, ошибки сессий"
          tone="attention"
        />
        <Panel
          title="Здоровье ресурсов"
          description="В сети 0 · Не в сети 2 · Обслуживание 2"
          tone="health"
        />
      </div>
      <Panel
        title="Последняя активность"
        description="Свежие события аудита"
      />
    </div>

    <div class="pam-dashboard__bottom">
      <Panel
        title="Активные сессии"
        description="Сейчас подключены"
      />
      <Panel
        title="Очередь запросов"
        description="Ожидают решения оператора"
      />
    </div>
  </div>
</template>

<script setup>
import StatCards from "@/components/pam/ui/StatCards.vue"
import Panel from "@/components/pam/ui/Panel.vue"
import { cards } from "../../consts/cards"
</script>

<style lang="scss" scoped>
.pam-dashboard {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  &__mid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: stretch;
    min-width: 0;
  }

  &__mid-scroll {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(335px, 1fr);
    gap: 12px;
    min-width: 0;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
  }

  &__bottom {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    align-items: stretch;
    min-width: 0;
  }
}
</style>
