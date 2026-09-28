<template>
  <ProjectLayout :project="project">
    <SearchFilter />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import SearchFilter from "@/components/practice/SearchFilter/SearchFilter.vue"

const project = getProjectBySlug("search-filter")
</script>
