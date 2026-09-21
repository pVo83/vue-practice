<template>
  <ProjectShell :project="project">
    <AuthDemo />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import AuthDemo from "@/components/practice/AuthDemo/AuthDemo.vue"

const project = getProjectBySlug("auth")
</script>
