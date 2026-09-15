<template>
  <ProjectShell :project="project">
    <Pagination />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Pagination from "@/components/practice/Pagination/Pagination.vue"

const project = getProjectBySlug("pagination")
</script>
