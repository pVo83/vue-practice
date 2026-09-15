<template>
  <div class="contacts">
    <ul class="contacts__list">
      <li v-for="item in items" :key="item.label" class="contacts__item">
        <span class="contacts__label">{{ item.label }}</span>
        <a
          v-if="item.href"
          class="contacts__link"
          :href="item.href"
        >
          {{ item.value }}
        </a>
        <span v-else class="contacts__value">{{ item.value }}</span>
      </li>
    </ul>

    <button class="contacts__btn" type="button" @click="modal.toggleModal">
      Написать
    </button>

    <ModalDialog
      title="Сообщение"
      desc="Напишите нам на hello@example.com или подождите, пока мы сами ответим."
    />
  </div>
</template>

<script setup>
import { ref } from "vue"
import ModalDialog from "../Modal/ModalDialog.vue"
import { useModal } from "@/components/practice/Modal/store/useModal.js"

const items = ref([
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "Телефон",
    value: "+7 (900) 123-45-67",
    href: "tel:+79001234567",
  },
  {
    label: "Город",
    value: "Москва",
  },
])

const modal = useModal()
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 12px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__label {
    color: var(--text-muted);
    font-size: var(--ff-small);
  }

  &__link,
  &__value {
    color: var(--text);
    font-size: var(--ff-body);
  }

  &__link {
    transition: color var(--trs35);

    &:hover {
      color: var(--accent);
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    height: 42px;
    padding: 0 12px;
    border: 1px solid var(--accent);
    border-radius: 8px;
    background-color: var(--accent);
    color: var(--white);
    font-size: var(--ff-body);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--accent-hover);
      background-color: var(--accent-hover);
    }
  }
}
</style>
