<template>
  <ProjectShell :project="project">
    <FormValidation />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import FormValidation from "@/components/practice/FormValidation/FormValidation.vue"

const project = getProjectBySlug("form")
</script>
