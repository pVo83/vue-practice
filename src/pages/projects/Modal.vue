<template>
  <ProjectLayout :project="project">
    <Modal />
  </ProjectLayout>
</template>

<script setup>
import { getProjectBySlug } from "@/data/projects"
import ProjectLayout from "@/layouts/ProjectLayout.vue"
import Modal from "@/components/practice/Modal/Modal.vue"

const project = getProjectBySlug("modal")
</script>
