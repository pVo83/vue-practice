<template>
  <header class="header">
    <div class="container header__inner">
      <svg class="icon" width="32" height="32">
        <use href="#vue" />
      </svg>
      <RouterLink class="header__brand" :to="{ name: 'home' }">Vue Practice</RouterLink>
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
    gap: 12px;
  }

  &__brand {
    color: var(--black);
    font-size: var(--ff-h4);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &__tagline {
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }
}
</style>
