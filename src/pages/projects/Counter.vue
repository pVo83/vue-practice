<template>
  <ProjectLayout :project="project">
    <Counter />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Counter from "@/components/practice/Counter/Counter.vue"

const project = getProjectBySlug("counter")
</script>
