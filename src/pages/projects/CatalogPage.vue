<template>
  <ProjectShell :project="project">
    <CatalogList />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import CatalogList from "@/components/practice/Catalog/CatalogList.vue"

const project = getProjectBySlug("catalog")
</script>
