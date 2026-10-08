<template>
  <ProjectShell :project="project">
    <Tabs />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Tabs from "@/components/practice/Tabs/Tabs.vue"

const project = getProjectBySlug("tabs")
</script>
