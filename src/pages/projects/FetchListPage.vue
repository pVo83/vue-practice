<template>
  <ProjectShell :project="project">
    <FetchList />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import FetchList from "@/components/practice/FetchList/FetchList.vue"

const project = getProjectBySlug("fetch-list")
</script>
