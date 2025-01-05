<template>
  <div class="gallery-container">
    <div class="section-heading">gallery</div>
    <div class="tabs">
      <button class="tab" :class="{ active: currentTab === 'coding' }" @click="currentTab = 'coding'">coding</button>
      <button class="tab" :class="{ active: currentTab === 'modelling' }" @click="currentTab = 'modelling'">3D modelling</button>
      <button class="tab" :class="{ active: currentTab === 'music' }" @click="currentTab = 'music'">music production</button>
    </div>
    <div class="tab-content">
      <div class="gallery-item" v-for="project in currentTabComponent" :key="project.id" >
          <div class="gallery-item-heading">
            <div class="gallery-item-date">{{ project.completedDate ? moment(project.completedDate).format('YYYY-MM-DD') : 'ongoing' }}</div>
          </div>
          <router-link :to="{ path: '/gallery/' + project.category.replace(' ', '-') + '/' + project.id }">
            <img class="gallery-item-image" :src="project.image" :alt="project.title" 
              onerror="this.src='/assets/project-placeholder.svg'; this.className='gallery-item-image-placeholder'"
            />
          </router-link>
          <div class="gallery-item-content">
            <div class="gallery-item-title">
              <router-link :to="{ path: '/gallery/' + project.category + '/' + project.id }">{{ project.title }}</router-link>
            </div>
            <div class="gallery-item-description">{{ project.description }}</div>
          </div>
        </div>
    </div>
  </div>
</template>
  
<script>
  import projects from '@/data/projects';
  import Category from '@/models/category';

  export default {
    name: 'Gallery',
    metaInfo: {
      title: 'markbarbuto | gallery',
    },
    data() {
      return {
        currentTab: 'coding',
        projects,
        Category
      };
    },
    computed: {
      currentTabComponent() {
        return {
          coding: projects.coding_projects,
          modelling: projects.modelling_projects,
          music: projects.music_projects,
        }[this.currentTab];
      },
      filteredProjects() {
        return this.projects.filter(project => project.category === this.currentTab);
      }
    }
  }
</script>
  
<style scoped src="./gallery.scss" lang="scss">
  @import "@/styles/_variables.scss";
</style>
  