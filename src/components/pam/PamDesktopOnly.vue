<template>
  <main class="pam-desktop-only">
    <div class="pam-desktop-only__panel">
      <svg class="pam-desktop-only__logo" width="50" height="60" aria-hidden="true">
        <use href="#vue" />
      </svg>

      <h1 class="pam-desktop-only__title">Макет для компьютера</h1>

      <p class="pam-desktop-only__text">
        Демо <strong>PAM</strong> рассчитано на широкий экран: на телефоне макет не
        адаптирован.
      </p>

      <p class="pam-desktop-only__note">Открой с экрана шире 1024&nbsp;px.</p>

      <RouterLink class="pam-desktop-only__back" :to="{ name: 'layouts' }">
        <svg width="16" height="16" aria-hidden="true">
          <use href="#arrow-left" />
        </svg>
        К макетам
      </RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.pam-desktop-only {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 24px;
  background: var(--surface);

  &__panel {
    box-sizing: border-box;
    width: 100%;
    max-width: 360px;
    padding: 40px 28px;
    border: 1px solid var(--border-soft);
    border-radius: 24px;
    background: var(--white);
    box-shadow:
      5px 5px 10px color-mix(in srgb, var(--black) 7%, transparent),
      -2px -2px 6px #fff;
    text-align: center;
  }

  &__logo {
    display: block;
    margin: 0 auto 24px;
  }

  &__title {
    margin: 0 0 16px;
    color: var(--text);
    font-size: var(--ff-h4);
    font-weight: 700;
    line-height: 1.25;
  }

  &__text,
  &__note {
    margin: 0;
    font-size: var(--ff-caption);
    line-height: 1.6;
  }

  &__text {
    margin-bottom: 16px;
    color: var(--text);
  }

  &__note {
    margin-bottom: 28px;
    color: var(--text-muted);
  }

  &__back {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    padding: 0 16px;
    border: 1px solid var(--border-soft);
    border-radius: 8px;
    background: var(--white);
    color: var(--accent);
    font-size: var(--ff-caption);
    font-weight: 600;
    transition:
      color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--accent);
      color: var(--accent-hover);
    }
  }
}
</style>
