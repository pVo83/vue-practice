<template>
  <main class="home">
    <div class="container">
      <section class="home__intro">
        <h1 class="home__title">Задания</h1>
        <p class="home__lead">
          Практические задания на Vue 3: компоненты, состояние, работа с API.
        </p>
      </section>

      <ul class="home__list">
        <li v-for="(project, index) in projects" :key="project.slug" class="home__item">
          <RouterLink class="home__link" :to="`/projects/${project.slug}`">
            <span class="home__index">{{ String(index + 1).padStart(2, "0") }}</span>
            <span class="home__content">
              <span class="home__name">{{ project.title }}</span>
              <span class="home__meta">
                <span class="home__skills">{{ project.skills.join(" · ") }}</span>
              </span>
              <span class="home__desc">{{ project.description }}</span>
            </span>
            <span class="home__arrow" aria-hidden="true">→</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { projects } from "@/data/projects"
</script>

<style lang="scss" scoped>
.home {
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

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 8px 12px;
    color: var(--text-muted);
    font-size: var(--ff-small);
  }

  &__desc {
    color: var(--text-muted);
    font-size: var(--ff-caption);
  }

  &__arrow {
    color: var(--accent);
    font-size: 18px;
    line-height: 1;
  }
}
</style>
