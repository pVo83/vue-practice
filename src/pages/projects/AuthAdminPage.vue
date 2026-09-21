<template>
  <ProjectShell :project="project">
    <div class="auth-admin">
      <p class="auth-admin__badge">Только для админа</p>
      <p class="auth-admin__text">
        Сюда пустил router guard (<code>beforeEnter</code>). Покупателя и гостя сюда не пускает.
      </p>
      <RouterLink class="auth-admin__link" :to="{ name: 'project-auth' }">
        <svg class="auth-admin__link-icon" width="16" height="16" aria-hidden="true">
          <use href="#arrow-left" />
        </svg>
        Назад к демо Auth
      </RouterLink>
    </div>
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"

const project = getProjectBySlug("auth")
</script>

<style lang="scss" scoped>
.auth-admin {
  max-width: 480px;
  padding: 16px;
  border: 1px solid var(--border-soft);
  border-radius: 12px;
  background: var(--white);
  box-shadow: 0 8px 24px var(--shadow);

  &__badge {
    display: inline-block;
    margin: 0 0 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent-hover);
    font-size: var(--ff-small);
    font-weight: 600;
  }

  &__text {
    margin: 0 0 14px;
    color: var(--text);
    font-size: var(--ff-body);
    line-height: 1.5;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--accent-hover);
    font-size: var(--ff-caption);
    font-weight: 600;
  }

  &__link-icon {
    flex-shrink: 0;
  }
}
</style>
