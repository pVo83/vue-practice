<template>
  <ProjectShell :project="project">
    <Counter />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Counter from "@/components/practice/Counter/Counter.vue"

const project = getProjectBySlug("counter")
</script>
