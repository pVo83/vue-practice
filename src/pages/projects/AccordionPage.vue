<template>
  <ProjectShell :project="project">
    <Accordion />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Accordion from "@/components/practice/Accordion/Accordion.vue"

const project = getProjectBySlug("accordion")
</script>
