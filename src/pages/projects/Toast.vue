<template>
  <ProjectLayout :project="project">
    <ToastDemo />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import ToastDemo from "@/components/practice/ToastDemo/ToastDemo.vue"

const project = getProjectBySlug("toast")
</script>
