<template>
  <div class="counter">
    <div class="counter__count" :class="{ 'counter__count--odd': !isEven }">
      {{ count }}
    </div>

    <span class="counter__parity" :class="{ 'counter__parity--odd': !isEven }">
      {{ isEven ? "чётное" : "нечётное" }}
    </span>

    <div class="counter__buttons">
      <div class="counter__buttons-top">
        <button class="counter__btn" type="button" :disabled="disabledMIN" @click="minus">−</button>
        <button
          class="counter__btn counter__btn--primary"
          type="button"
          :disabled="disabledMAX"
          @click="plus"
        >
          +
        </button>
      </div>
      <button
        class="counter__btn counter__btn--ghost"
        type="button"
        :disabled="disabledMIN"
        @click="reset"
      >
        Сброс
      </button>
    </div>
  </div>
</template>

<script setup >
import { computed, ref } from "vue"

const MIN = 0
const MAX = 10
const count = ref(0)

const disabledMIN = computed(() => count.value <= MIN)
const disabledMAX = computed(() => count.value >= MAX)

const isEven = computed(() => count.value % 2 === 0)

function plus() {
  if (!disabledMAX.value) count.value++
}

function minus() {
  if (!disabledMIN.value) count.value--
}

function reset() {
  count.value = MIN
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  gap: 12px;

  &__count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px 0;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: var(--ff-numbers);
    font-weight: 700;
    line-height: 1;
    transition:
      color var(--trs35),
      background-color var(--trs35),
      border-color var(--trs35);

    &--odd {
      border-color: var(--border);
      background: var(--surface);
      color: var(--text);
    }
  }

  &__parity {
    color: var(--accent);
    font-size: var(--ff-small);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;

    &--odd {
      color: var(--text-muted);
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    &-top {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35),
      opacity var(--trs35);

    &:hover:not(:disabled) {
      border-color: var(--accent);
      color: var(--accent);
    }

    &--primary {
      border-color: var(--accent);
      background-color: var(--accent);
      color: var(--white);

      &:hover:not(:disabled) {
        border-color: var(--accent-hover);
        background-color: var(--accent-hover);
        color: var(--white);
      }
    }

    &--ghost {
      background-color: transparent;

      &:hover:not(:disabled) {
        background-color: var(--accent-soft);
      }
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
}
</style>
