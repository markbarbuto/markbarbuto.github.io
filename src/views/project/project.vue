<template>
  <div class="about-container">
    <div class="section-heading">
      {{ project.title }}
    </div>
    <div class="about-content-container">
      <div class="about-content">
        <span class="about-description">
          <p>
            {{ project.description }}
          </p>
        </span>
        <img class="project-image" :src="project.image" :alt="project.title" 
            onerror="this.src='/assets/project-placeholder.svg'; this.className='project-image-placeholder'"
            />
      </div>
    </div>
  </div>
</template>
  
<script>
import { projects } from '@/data/projects';

export default {
  name: 'Project',
  metaInfo() {
    return {
      title: `markbarbuto | ${this.project.title}`
    }
  },
  data() {
    return {
      project: projects.find(p => p.id === this.$route.params.id)
    };
  }
}
</script>

<style scoped src="./project.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
