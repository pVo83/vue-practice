<template>
  <ProjectLayout :project="project">
    <FetchList />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import FetchList from "@/components/practice/FetchList/FetchList.vue"

const project = getProjectBySlug("fetch-list")
</script>
