<template>
  <ProjectLayout :project="project">
    <CatalogList />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import CatalogList from "@/components/practice/Catalog/CatalogList.vue"

const project = getProjectBySlug("catalog")
</script>
