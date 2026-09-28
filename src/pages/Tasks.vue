<template>
  <main class="tasks">
    <div class="container">
      <section class="tasks__intro">
        <h1 class="tasks__title">Задания</h1>
        <p class="tasks__lead">
          Практические задания на Vue 3: компоненты, состояние, работа с API.
        </p>
      </section>

      <ul class="tasks__list">
        <li v-for="(project, index) in projects" :key="project.slug" class="tasks__item">
          <RouterLink class="tasks__link" :to="`/projects/${project.slug}`">
            <span class="tasks__index">{{ String(index + 1).padStart(2, "0") }}</span>
            <span class="tasks__content">
              <span class="tasks__name">{{ project.title }}</span>
              <span class="tasks__meta">
                <span class="tasks__skills">{{ project.skills.join(" · ") }}</span>
              </span>
              <span class="tasks__desc">{{ project.description }}</span>
            </span>
            <svg class="tasks__arrow" width="18" height="18" aria-hidden="true">
              <use href="#arrow-right" />
            </svg>
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
.tasks {
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
    flex-shrink: 0;
    color: var(--accent);
  }
}

@media (width <= 480px) {
  .tasks__list {
    grid-template-columns: 1fr;
  }
}
</style>
