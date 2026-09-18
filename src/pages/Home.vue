<template>
  <main class="landing">
    <div class="container landing__container">
      <section class="landing__hero">
        <span class="landing__badge">
          <svg class="landing__badge-icon" width="14" height="14" aria-hidden="true">
            <use href="#graduation-cap" />
          </svg>
          Vue 3 · Learning Project
        </span>
        <h1 class="landing__title">Изучаю Vue 3. Пишу. Практикуюсь.</h1>
        <p class="landing__lead">
          Небольшие практические задания, которые помогают мне развиваться как Frontend
          Developer.
        </p>
        <div class="landing__actions">
          <RouterLink class="landing__btn landing__btn--primary" :to="{ name: 'tasks' }">
            Смотреть задания
            <svg class="landing__btn-icon" width="16" height="16" aria-hidden="true">
              <use href="#arrow-right" />
            </svg>
          </RouterLink>
          <RouterLink class="landing__btn landing__btn--secondary" :to="{ name: 'about' }">
            <svg class="landing__btn-icon" width="16" height="16" aria-hidden="true">
              <use href="#info" />
            </svg>
            О проекте
          </RouterLink>
        </div>
      </section>

      <section class="landing__skills" aria-labelledby="landing-skills-title">
        <h2 id="landing-skills-title" class="landing__skills-title">Что изучаю</h2>
        <TagList :items="skills" />
      </section>
    </div>
  </main>
</template>

<script setup>
import TagList from "@/components/ui/TagList.vue"

const skills = ["Vue 3", "Composition API", "JavaScript", "SCSS"]
</script>

<style lang="scss" scoped>
.landing {
  flex: 1;
  padding: 48px 0 64px;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgb(66 184 131 / 12%), transparent),
    var(--surface);

  &__container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__hero {
    padding: 48px 40px;
    border: 1px solid var(--border-soft);
    border-radius: 24px;
    background: var(--white);
    box-shadow: 0 12px 40px var(--shadow);
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 20px;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent-hover);
    font-size: var(--ff-small);
    font-weight: 600;
  }

  &__badge-icon {
    flex-shrink: 0;
  }

  &__title {
    margin-bottom: 16px;
    max-width: 16ch;
    color: var(--text);
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  &__lead {
    margin-bottom: 28px;
    max-width: 36rem;
    color: var(--text-muted);
    font-size: var(--ff-body);
    line-height: 1.6;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 10px;
    font-size: var(--ff-caption);
    font-weight: 600;
    transition:
      background-color var(--trs35),
      border-color var(--trs35),
      color var(--trs35);

    &--primary {
      background: var(--accent);
      color: var(--white);

      &:hover {
        background: var(--accent-hover);
      }
    }

    &--secondary {
      border: 1px solid var(--border);
      background: var(--white);
      color: var(--text);

      &:hover {
        border-color: var(--accent);
        color: var(--accent-hover);
      }
    }
  }

  &__btn-icon {
    flex-shrink: 0;
  }

  &__skills-title {
    margin-bottom: 14px;
    color: var(--text-muted);
    font-size: var(--ff-small);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

@media (width <= 640px) {
  .landing {
    padding: 24px 0 40px;

    &__hero {
      padding: 32px 20px;
    }

    &__actions {
      flex-direction: column;
    }

    &__btn {
      width: 100%;
    }
  }
}
</style>
