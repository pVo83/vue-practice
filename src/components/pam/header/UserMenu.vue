<template>
  <div class="pam-user">
    <button type="button" class="pam-user__trigger" aria-label="Меню пользователя">
      <span class="pam-user__avatar">
        <picture>
          <source srcset="/img/user_img/user.webp" type="image/webp" />
          <img
            class="pam-user__photo"
            src="/img/user_img/user.png"
            alt=""
            width="40"
            height="40"
          />
        </picture>
        <span class="pam-user__status" aria-hidden="true" title="В сети" />
      </span>

      <span class="pam-user__info">
        <span class="pam-user__text">
          <span class="pam-user__name">Владислав Польшин</span>
          <span class="pam-user__role">Администратор</span>
        </span>
        <svg class="pam-user__chevron" width="20" height="20" aria-hidden="true">
          <use href="#chevron-down" />
        </svg>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pam-user {
  &__trigger {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0;
    border: none;
    background: transparent;
    text-align: start;
    cursor: default;
  }

  &__avatar {
    position: relative;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  &__photo {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__status {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 14px;
    height: 14px;
    border: 2px solid var(--surface);
    border-radius: 50%;
    background: var(--accent);
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__name {
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 600;
    line-height: 1;
  }

  &__role {
    color: var(--text-muted);
    font-size: var(--ff-small);
    font-weight: 400;
    line-height: 1;
  }

  &__chevron {
    flex-shrink: 0;
    color: var(--text);
  }
}
</style>
