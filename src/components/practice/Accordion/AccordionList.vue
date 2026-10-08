<template>
  <div class="accordion">
    <ul class="accordion__list">
      <li v-for="item in items" :key="item.id" class="accordion__item">
        <button
          :id="`accordion-button-${item.id}`"
          class="accordion__button"
          :class="{ 'accordion__button--open': isOpen(item.id) }"
          type="button"
          :aria-expanded="isOpen(item.id)"
          :aria-controls="`accordion-panel-${item.id}`"
          @click="toggle(item.id)"
        >
          <span class="accordion__title">{{ item.title }}</span>

          <svg class="accordion__icon" width="24" height="24">
            <use href="#chevron-down" />
          </svg>
        </button>

        <div
          :id="`accordion-panel-${item.id}`"
          class="accordion__panel"
          :class="{ 'accordion__panel--open': isOpen(item.id) }"
          role="region"
          :aria-labelledby="`accordion-button-${item.id}`"
        >
          <div class="accordion__panel-inner">
            <p class="accordion__text">{{ item.descr }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array,
    required: true,
  },
})

const openId = ref([props.items[props.index].id])

function isOpen(id) {
  return openId.value.includes(id)
}

function toggle(id) {
  if (props.multiple) {
    if (isOpen(id)) {
      openId.value = openId.value.filter((open) => open !== id)
    } else {
      openId.value = [...openId.value, id]
    }
  } else {
    openId.value = isOpen(id) ? [] : [id]
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  max-width: 420px;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }

  &__item {
    border: 1px solid var(--border);
    border-radius: 12px;
    background-color: var(--white);
    overflow: hidden;
    box-shadow: 0 8px 24px var(--shadow);
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 12px;
    padding: 14px 16px;
    border: none;
    background-color: var(--surface);
    color: var(--text);
    font-size: var(--ff-body);
    font-weight: 600;
    text-align: left;
    transition:
      background-color var(--trs35),
      color var(--trs35);

    &:hover {
      background-color: var(--accent-soft);
      color: var(--accent);
    }

    &--open {
      background-color: var(--accent-soft);
      color: var(--accent);
    }
  }

  &__icon {
    flex-shrink: 0;
    color: currentcolor;
    transition: transform var(--trs35);

    .accordion__button--open & {
      transform: rotate(180deg);
    }
  }

  &__panel {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--trs35);

    &--open {
      grid-template-rows: 1fr;
    }
  }

  &__panel-inner {
    overflow: hidden;
    min-height: 0;
  }

  &__text {
    margin: 0;
    padding: 12px 16px 16px;
    color: var(--text-muted);
    font-size: var(--ff-body);
    line-height: 1.6;
  }
}
</style>
