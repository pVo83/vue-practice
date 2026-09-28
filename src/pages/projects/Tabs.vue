<template>
  <ProjectLayout :project="project">
    <Tabs />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Tabs from "@/components/practice/Tabs/Tabs.vue"

const project = getProjectBySlug("tabs")
</script>
