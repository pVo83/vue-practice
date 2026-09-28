<template>
  <ProjectLayout :project="project">
    <Pagination />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Pagination from "@/components/practice/Pagination/Pagination.vue"

const project = getProjectBySlug("pagination")
</script>
