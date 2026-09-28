<template>
  <ProjectLayout :project="project">
    <Accordion />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Accordion from "@/components/practice/Accordion/Accordion.vue"

const project = getProjectBySlug("accordion")
</script>
