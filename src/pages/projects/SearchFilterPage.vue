<template>
  <ProjectShell :project="project">
    <SearchFilter />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import SearchFilter from "@/components/practice/SearchFilter/SearchFilter.vue"

const project = getProjectBySlug("search-filter")
</script>
