<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li v-for="tab in tabs" :key="tab.id" class="tabs__item">
        <button
          class="tabs__btn"
          :class="{ 'tabs__btn--active': modelValue === tab.id }"
          type="button"
          @click="updateActiveTab(tab.id)"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>

    <div :key="modelValue" class="tabs__panel">
      <component
        :is="activeTab.component"
        v-if="activeTab?.component"
        v-bind="activeTab.componentProps || {}"
      />

      <slot v-else :name="`panel-${modelValue}`">
        {{ activeTab?.description || "-" }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    validator: (value) => value.length > 0,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
})

const emit = defineEmits(["update:modelValue"])

const activeTab = computed(
  () => props.tabs.find((tab) => tab.id === props.modelValue) || props.tabs[0],
)

function updateActiveTab(id) {
  emit("update:modelValue", id)
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  max-width: 480px;
  gap: 16px;

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    &--active {
      border-color: var(--accent);
      background-color: var(--accent);
      color: var(--white);

      &:hover {
        border-color: var(--accent-hover);
        background-color: var(--accent-hover);
        color: var(--white);
      }
    }
  }

  &__panel {
    padding: 16px;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--white);
    color: var(--text);
    font-size: var(--ff-body);
    line-height: 1.6;
    box-shadow: 0 8px 24px var(--shadow);

    p {
      margin: 0;
      color: var(--text-muted);
    }
  }
}
</style>
