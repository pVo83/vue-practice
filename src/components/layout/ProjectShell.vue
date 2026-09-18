<template>
  <main class="project-shell">
    <div class="container">
      <div class="project-shell__head">
        <RouterLink class="project-shell__back" :to="{ name: 'tasks' }">
          <svg class="project-shell__back-icon" width="16" height="16" aria-hidden="true">
            <use href="#arrow-left" />
          </svg>
          К списку
        </RouterLink>
        <h1 class="project-shell__title">{{ project.title }}</h1>
        <p class="project-shell__desc">{{ project.description }}</p>
        <TagList :items="project.skills" aria-label="Навыки" />
      </div>

      <section class="project-shell__workspace" aria-label="Демо">
        <slot />
      </section>
    </div>
  </main>
</template>

<script setup>
import TagList from "@/components/ui/TagList.vue"

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.project-shell {
  padding: 32px 0 64px;

  &__head {
    margin-bottom: 28px;
  }

  &__back {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 16px;
    color: var(--accent);
    font-size: var(--ff-caption);
    transition: color var(--trs35);

    &:hover {
      color: var(--accent-hover);
    }
  }

  &__back-icon {
    flex-shrink: 0;
  }

  &__title {
    margin-bottom: 10px;
    font-size: var(--ff-h1);
    font-weight: 600;
    line-height: 1.25;
  }

  &__desc {
    margin-bottom: 14px;
    max-width: 42rem;
    color: var(--text-muted);
  }
}
</style>
