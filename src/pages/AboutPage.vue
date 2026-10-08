<template>
  <main class="about">
    <div class="container about__container">
      <section class="about__intro">
        <h1 class="about__title">О проекте</h1>
        <p class="about__lead">
          Небольшой сайт-практикум на Vue 3. Собираю простые задания, чтобы руками пройти
          Composition API, роутер, Pinia и запросы к API — без лишней обвязки.
        </p>
      </section>

      <section class="about__block" aria-labelledby="about-stack">
        <h2 id="about-stack" class="about__heading">Стек</h2>
        <TagList :items="stack" />
      </section>

      <section class="about__block" aria-labelledby="about-arch">
        <h2 id="about-arch" class="about__heading">Как устроено</h2>
        <ul class="about__list">
          <li v-for="item in architecture" :key="item" class="about__list-item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="about__block" aria-labelledby="about-learn">
        <h2 id="about-learn" class="about__heading">Что уже трогал</h2>
        <ul class="about__list">
          <li v-for="item in learned" :key="item" class="about__list-item">{{ item }}</li>
        </ul>
      </section>

      <section class="about__cta">
        <RouterLink class="about__link" :to="{ name: 'tasks' }">
          К заданиям
          <svg class="about__link-icon" width="16" height="16" aria-hidden="true">
            <use href="#arrow-right" />
          </svg>
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<script setup>
import TagList from "@/components/ui/TagList.vue"

const stack = ["Vue 3", "Composition API", "Vue Router", "Pinia", "Axios", "SCSS", "Vite"]

const architecture = [
  "Страницы лежат в pages/, сами демо — в components/practice/",
  "Список заданий один — data/projects.js",
  "Общая рамка задания — ProjectShell",
  "Повторяющуюся логику выношу в composables",
]

const learned = [
  "Компоненты: props, emits, slots, Teleport",
  "Состояние: ref/computed и простая Pinia",
  "Роутер: списки, params, переходы",
  "Запросы: loading, error, empty, retry",
  "Укладка проекта и BEM на SCSS",
]
</script>

<style lang="scss" scoped>
.about {
  padding: 40px 0 64px;

  &__container {
    max-width: 720px;
  }

  &__intro {
    margin-bottom: 40px;
  }

  &__title {
    margin-bottom: 12px;
    color: var(--text);
    font-size: var(--ff-h1);
    font-weight: 600;
    line-height: 1.2;
  }

  &__lead {
    color: var(--text-muted);
    font-size: var(--ff-body);
    line-height: 1.65;
  }

  &__block {
    margin-bottom: 32px;
  }

  &__heading {
    margin-bottom: 14px;
    color: var(--text);
    font-size: var(--ff-h4);
    font-weight: 600;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__list-item {
    position: relative;
    padding-left: 18px;
    color: var(--text-muted);
    font-size: var(--ff-body);

    &::before {
      content: "";
      position: absolute;
      top: 0.65em;
      left: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
    }
  }

  &__cta {
    padding-top: 8px;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent-hover);
    font-size: var(--ff-body);
    font-weight: 600;
    transition: color var(--trs35);

    &:hover {
      color: var(--accent);
    }
  }

  &__link-icon {
    flex-shrink: 0;
  }
}
</style>
