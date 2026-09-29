<template>
  <div class="pam-bell">
    <button type="button" class="pam-bell__trigger" aria-label="Уведомления">
      <svg width="24" height="24" aria-hidden="true">
        <use href="#bell" />
      </svg>
      <span class="pam-bell__badge">3</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pam-bell {
  &__trigger {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    background: transparent;
    color: var(--text);
    cursor: default;
  }

  &__badge {
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    border-radius: 999px;
    background: var(--info);
    color: var(--white);
    font-size: var(--ff-small);
    font-weight: 500;
    line-height: 1;
  }
}
</style>
