<template>
  <main class="landing">
    <div class="container landing__container">
      <section class="landing__hero">
        <span class="landing__badge">Vue 3 · Learning Project</span>
        <h1 class="landing__title">Изучаю Vue 3. Пишу. Практикуюсь.</h1>
        <p class="landing__lead">
          Небольшие практические задания, которые помогают мне развиваться как Frontend Developer.
        </p>
        <div class="landing__actions">
          <RouterLink class="landing__btn landing__btn--primary" :to="{ name: 'tasks' }">
            Смотреть задания
            <svg class="landing__btn-icon" width="16" height="16" aria-hidden="true">
              <use href="#arrow-right" />
            </svg>
          </RouterLink>
          <RouterLink class="landing__btn landing__btn--secondary" :to="{ name: 'about' }">
            О проекте
          </RouterLink>
        </div>
      </section>
      <section class="landing__skills" aria-labelledby="landing-skills-title">
        <h2 id="landing-skills-title" class="landing__skills-title">Что изучаю</h2>
        <TagList :items="skills" variant="glass" />
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
    linear-gradient(var(--landing-veil), var(--landing-veil)),
    url("@/assets/img/landing-bg.png") center / cover no-repeat;
  background-color: var(--surface);

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    width: min(100% - 30px, 520px);
    transform: translate(-50%, -50%);
    gap: 20px;
  }

  &__hero {
    padding: 36px 32px;
    border: 1px solid var(--landing-border);
    border-radius: 20px;
    background: var(--landing-tile);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 24px var(--landing-shadow);
  }

  &__badge {
    display: inline-flex;
    margin-bottom: 16px;
    padding: 6px 12px;
    border-radius: 999px;
    background: var(--accent-soft-alpha);
    color: var(--accent-hover);
    font-size: var(--ff-small);
    font-weight: 600;
  }

  &__title {
    margin-bottom: 14px;
    max-width: 16ch;
    color: var(--text);
    font-size: clamp(26px, 3.6vw, 36px);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  &__lead {
    margin-bottom: 24px;
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
      border: 1px solid var(--landing-border-strong);
      background: var(--landing-fill);
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
    margin-bottom: 12px;
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
      padding: 28px 20px;
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
