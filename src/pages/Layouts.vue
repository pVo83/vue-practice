<template>
  <main class="layouts">
    <div class="container">
      <section class="layouts__intro">
        <h1 class="layouts__title">Макеты</h1>
        <p class="layouts__lead">
          Страницы и каркасы UI: вёрстка, сетка, адаптив.
        </p>
      </section>

      <ul class="layouts__list">
        <li v-for="(layout, index) in layouts" :key="layout.slug" class="layouts__item">
          <RouterLink class="layouts__link" :to="`/layouts/${layout.slug}`">
            <span class="layouts__index">{{ String(index + 1).padStart(2, "0") }}</span>
            <span class="layouts__content">
              <span class="layouts__name">{{ layout.title }}</span>
              <span class="layouts__skills">{{ layout.skills.join(" · ") }}</span>
              <span class="layouts__desc">{{ layout.description }}</span>
            </span>
            <svg class="layouts__arrow" width="18" height="18" aria-hidden="true">
              <use href="#arrow-right" />
            </svg>
          </RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { layouts } from "@/data/layouts"
</script>

<style lang="scss" scoped>
.layouts {
  padding: 40px 0;

  &__intro {
    margin-bottom: 36px;
    max-width: 40rem;
  }

  &__title {
    margin-bottom: 12px;
    font-size: var(--ff-h1);
    font-weight: 600;
    line-height: 1.2;
  }

  &__lead {
    color: var(--text-muted);
    font-size: var(--ff-body);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 10px;
  }

  &__item {
    height: 100%;
  }

  &__link {
    display: grid;
    align-items: start;
    height: 100%;
    padding: 18px 20px;
    border: 1px solid var(--border-soft);
    border-radius: 12px;
    background: var(--white);
    color: inherit;
    transition:
      border-color var(--trs35),
      background-color var(--trs35);
    grid-template-columns: auto 1fr auto;
    gap: 16px;

    &:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
  }

  &__index {
    color: var(--accent);
    font-size: var(--ff-caption);
    font-weight: 600;
    line-height: 1.6;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
  }

  &__name {
    font-size: var(--ff-h4);
    font-weight: 600;
    line-height: 1;
  }

  &__skills {
    color: var(--text-muted);
    font-size: var(--ff-small);
  }

  &__desc {
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }

  &__arrow {
    flex-shrink: 0;
    color: var(--accent);
  }
}

@media (width <= 480px) {
  .layouts__list {
    grid-template-columns: 1fr;
  }
}
</style>
