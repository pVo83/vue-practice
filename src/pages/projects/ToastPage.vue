<template>
  <ProjectShell :project="project">
    <ToastDemo />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import ToastDemo from "@/components/practice/ToastDemo/ToastDemo.vue"

const project = getProjectBySlug("toast")
</script>
