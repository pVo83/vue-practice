<template>
  <ProjectShell :project="project">
    <TodoList />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import TodoList from "@/components/practice/TodoList/TodoList.vue"

const project = getProjectBySlug("todo")
</script>
