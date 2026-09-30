<template>
  <div class="pam-dashboard">
    <StatCards :cards="cards" />

    <div class="pam-dashboard__mid">
      <div class="pam-dashboard__mid-scroll">
        <Panel
          title="Требует внимания"
          description="Учётки, MFA входа, ошибки сессий"
          tone="attention"
        >
          <PanelList :items="attentionItems" empty-text="Критичных сигналов нет — можно работать спокойно" ok />
        </Panel>
        <Panel
          title="Здоровье ресурсов"
          description="В сети 0 · Не в сети 2 · Обслуживание 2"
          tone="health"
        >
          <PanelList
            :items="healthItems"
            empty-text="Нет ресурсов «не в сети» и на обслуживании"
          />
        </Panel>
      </div>
      <Panel title="Последняя активность" description="Свежие события аудита">
        <PanelList :items="activityItems" empty-text="Журнал пока пуст" />
      </Panel>
    </div>

    <div class="pam-dashboard__bottom">
      <Panel title="Активные сессии" description="Сейчас подключены">
        <PanelList
          :items="sessionItems"
          empty-text="Активных подключений нет"
        />
      </Panel>
      <Panel title="Очередь запросов" description="Ожидают решения оператора">
        <PanelList
          :items="requestItems"
          empty-text="Новых заявок на рассмотрении нет"
        />
      </Panel>
    </div>
  </div>
</template>

<script setup>
import StatCards from "@/components/pam/ui/StatCards.vue"
import Panel from "@/components/pam/ui/Panel.vue"
import PanelList from "@/components/pam/ui/PanelList.vue"
import { cards } from "../../consts/cards"
import {
  attentionItems,
  healthItems,
  activityItems,
  sessionItems,
  requestItems,
} from "../../consts/dashboard"
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
