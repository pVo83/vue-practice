<template>
  <div class="pam-search" role="button" tabindex="0" aria-label="Глобальный поиск">
    <span class="pam-search__icon" aria-hidden="true">
      <svg width="20" height="20">
        <use href="#search" />
      </svg>
    </span>
    <span class="pam-search__placeholder">Поиск</span>
    <span class="pam-search__shortcut" aria-hidden="true">
      <kbd class="pam-search__key">
        <svg width="13" height="13">
          <use href="#command" />
        </svg>
      </kbd>
      <kbd class="pam-search__key">K</kbd>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.pam-search {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  height: 45px;
  padding: 0 12px;
  border: 1px solid color-mix(in srgb, var(--border) 80%, transparent);
  border-radius: 10px;
  background: var(--white);
  color: var(--text-muted);
  cursor: default;

  &__icon {
    display: flex;
    flex-shrink: 0;
  }

  &__placeholder {
    flex: 1;
    min-width: 0;
    font-size: var(--ff-body);
    line-height: 1;
  }

  &__shortcut {
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    color: var(--text);
  }

  &__key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 14px;
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: var(--ff-caption);
    font-weight: 400;
    line-height: 1;
  }
}
</style>
