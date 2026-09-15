<template>
  <ProjectShell :project="project">
    <Modal />
  </ProjectShell>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectShell from "@/components/layout/ProjectShell.vue"
import Modal from "@/components/practice/Modal/Modal.vue"

const project = getProjectBySlug("modal")
</script>
