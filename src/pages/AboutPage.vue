<template>
  <main class="about">
    <div class="container about__container">
      <section class="about__intro">
        <h1 class="about__title">О проекте</h1>
        <p class="about__lead">
          Учебный сайт-лаборатория: набор небольших практических заданий на Vue 3.
          Цель — закрепить Composition API, роутинг, состояние и работу с API на живых
          примерах.
        </p>
      </section>

      <section class="about__block" aria-labelledby="about-stack">
        <h2 id="about-stack" class="about__heading">Стек</h2>
        <ul class="about__tags">
          <li v-for="item in stack" :key="item" class="about__tag">{{ item }}</li>
        </ul>
      </section>

      <section class="about__block" aria-labelledby="about-arch">
        <h2 id="about-arch" class="about__heading">Архитектура</h2>
        <ul class="about__list">
          <li v-for="item in architecture" :key="item" class="about__list-item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="about__block" aria-labelledby="about-learn">
        <h2 id="about-learn" class="about__heading">Чему научился</h2>
        <ul class="about__list">
          <li v-for="item in learned" :key="item" class="about__list-item">{{ item }}</li>
        </ul>
      </section>

      <section class="about__cta">
        <RouterLink class="about__link" :to="{ name: 'tasks' }">
          Перейти к заданиям
          <span aria-hidden="true">→</span>
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<script setup>
const stack = ["Vue 3", "Composition API", "Vue Router", "Pinia", "Axios", "SCSS", "Vite"]

const architecture = [
  "Страницы в pages/, практики в components/practice/",
  "Данные заданий — единый список в data/projects.js",
  "Общая оболочка задания — ProjectShell",
  "Логика вынесена в composables там, где повторяется",
]

const learned = [
  "Компоненты, props, emits, slots и Teleport",
  "Состояние через ref/computed и Pinia",
  "Роутинг: списки, params, навигация",
  "Асинхронные запросы: loading, error, empty",
  "Структура проекта и BEM + SCSS",
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

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__tag {
    padding: 8px 14px;
    border: 1px solid var(--border-soft);
    border-radius: 999px;
    background: var(--surface-soft);
    color: var(--text);
    font-size: var(--ff-caption);
    font-weight: 500;
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
}
</style>
