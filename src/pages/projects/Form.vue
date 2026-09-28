<template>
  <ProjectLayout :project="project">
    <FormValidation />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import FormValidation from "@/components/practice/FormValidation/FormValidation.vue"

const project = getProjectBySlug("form")
</script>
