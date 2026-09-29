<template>
  <div
    v-if="values.length"
    class="spark-bars"
    :class="toneClass"
    role="img"
    :aria-label="ariaLabel"
  >
    <span
      v-for="(bar, index) in values"
      :key="index"
      class="spark-bars__bar"
      :style="{ height: `${barHeight(bar)}%` }"
    />
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  values: {
    type: Array,
    default: () => [],
  },
  tone: {
    type: String,
    default: "muted",
    validator: (value) => ["success", "muted", "danger", "info"].includes(value),
  },
  label: {
    type: String,
    default: "",
  },
})

const toneClass = computed(() => `spark-bars--${props.tone}`)

const ariaLabel = computed(() => props.label || `Мини-график: ${props.values.join(", ")}`)

const maxValue = computed(() => Math.max(...props.values, 1))

function barHeight(value) {
  return Math.max(18, Math.round((Number(value) / maxValue.value) * 100))
}
</script>

<style lang="scss" scoped>
.spark-bars {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  width: 40px;
  height: 28px;

  &--success {
    color: var(--accent);
  }

  &--muted {
    color: var(--text-muted);
  }

  &--danger {
    color: var(--error);
  }

  &--info {
    color: var(--info);
  }

  &__bar {
    flex: 1;
    min-height: 4px;
    border-radius: 2px;
    background: currentcolor;
    opacity: 0.7;
  }
}
</style>
