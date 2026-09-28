<template>
  <ProjectLayout :project="project">
    <TodoList />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import TodoList from "@/components/practice/TodoList/TodoList.vue"

const project = getProjectBySlug("todo")
</script>
