<template>
  <main class="project-shell">
    <div class="container">
      <div class="project-shell__head">
        <RouterLink class="project-shell__back" :to="{ name: 'tasks' }">← К списку</RouterLink>
        <h1 class="project-shell__title">{{ project.title }}</h1>
        <p class="project-shell__desc">{{ project.description }}</p>
        <ul class="project-shell__skills" aria-label="Навыки">
          <li v-for="skill in project.skills" :key="skill" class="project-shell__skill">
            {{ skill }}
          </li>
        </ul>
      </div>

      <section class="project-shell__workspace" aria-label="Демо">
        <slot />
      </section>
    </div>
  </main>
</template>

<script setup>
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
    display: inline-block;
    margin-bottom: 16px;
    color: var(--accent);
    font-size: var(--ff-caption);
    transition: color var(--trs35);

    &:hover {
      color: var(--accent-hover);
    }
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

  &__skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__skill {
    padding: 4px 10px;
    border: 1px solid var(--border);
    border-radius: 6px;
    background: var(--surface);
    color: var(--text);
    font-size: var(--ff-small);
  }
}
</style>
