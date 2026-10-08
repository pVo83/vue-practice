<template>
  <ProjectShell :project="project">
    <Dropdown />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Dropdown from "@/components/practice/Dropdown/Dropdown.vue"

const project = getProjectBySlug("dropdown")
</script>
