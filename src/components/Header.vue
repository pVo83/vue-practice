<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink class="header__brand" :to="{ name: 'home' }">
        <svg class="header__logo" width="28" height="28" aria-hidden="true">
          <use href="#vue" />
        </svg>
        <span class="header__name">Vue Practice Lab</span>
      </RouterLink>

      <nav class="header__nav" aria-label="Основная навигация">
        <RouterLink
          class="header__link"
          :to="{ name: 'tasks' }"
          active-class="header__link--active"
        >
          Задания
        </RouterLink>
        <RouterLink
          class="header__link"
          :to="{ name: 'about' }"
          active-class="header__link--active"
        >
          О проекте
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--border-soft);
  padding: 16px 0;
  background: var(--white);

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text);
  }

  &__logo {
    flex-shrink: 0;
  }

  &__name {
    font-size: var(--ff-h4);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__link {
    padding: 8px 12px;
    border-radius: 8px;
    color: var(--text-muted);
    font-size: var(--ff-caption);
    font-weight: 500;
    transition:
      color var(--trs35),
      background-color var(--trs35);

    &:hover {
      background: var(--surface);
      color: var(--text);
    }

    &--active {
      background: var(--accent-soft);
      color: var(--accent-hover);
    }
  }
}
</style>
