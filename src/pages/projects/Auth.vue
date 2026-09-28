<template>
  <ProjectLayout :project="project">
    <AuthDemo />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import AuthDemo from "@/components/practice/AuthDemo/AuthDemo.vue"

const project = getProjectBySlug("auth")
</script>
