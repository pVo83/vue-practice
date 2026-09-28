<template>
  <ProjectLayout :project="project">
    <Dropdown />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Dropdown from "@/components/practice/Dropdown/Dropdown.vue"

const project = getProjectBySlug("dropdown")
</script>
