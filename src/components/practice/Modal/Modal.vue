<template>
  <div class="modal-demo">
    <button class="modal-demo__button" type="button" @click="modal.toggleModal">
      {{ modal.isOpen ? "Закрыть" : "Открыть" }}
    </button>

    <ModalDialog title="Модальное окно" :desc="description" icon="#face-smiling" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import ModalDialog from "./ModalDialog.vue"
import { useModal } from "./store/useModal.js"

const modal = useModal()

const description = ref(
  "Заказ будет готов после пяти. Если опоздаете — просто напишите, подождём ещё немного. На кассе можно оплатить картой или наличными, чек придёт на почту в течение часа. Парковка бесплатная у входа со стороны двора.",
)
</script>

<style lang="scss" scoped>
.modal-demo {
  &__button {
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
