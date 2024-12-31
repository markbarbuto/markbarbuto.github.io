<template>
  <div class="gallery-container">
    <div class="tabs">
      <button class="tab" :class="{ active: currentTab === 'coding' }" @click="currentTab = 'coding'">coding</button>
      <button class="tab" :class="{ active: currentTab === 'modelling' }" @click="currentTab = 'modelling'">3D modelling</button>
      <button class="tab" :class="{ active: currentTab === 'music' }" @click="currentTab = 'music'">music production</button>
    </div>
    <div class="tab-content">
      <div class="featured-item" v-for="project in currentTabComponent" :key="project.id" >
          <div class="featured-item-heading">
            <!-- <div class="featured-item-category" :class="{
              coding: project.category === Category.CODING,
              modelling: project.category === Category.MODELLING,
              music: project.category === Category.MUSIC,
            }">
              {{ project.category }}
            </div> -->
            <div class="featured-item-date">{{ project.date ? moment(project.date).format('YYYY-MM') : 'Ongoing' }}</div>
          </div>
          <router-link :to="{ path: '/gallery/' + project.category + '/' + project.id }">
            <img class="featured-item-image" :src="project.image" :alt="project.title" 
              onerror="this.src='/assets/project-placeholder.svg'; this.className='featured-item-image-placeholder'"
            />
          </router-link>
          <div class="featured-item-content">
            <div class="featured-item-title">
              <router-link :to="{ path: '/gallery/' + project.category + '/' + project.id }">{{ project.title }}</router-link>
            </div>
            <div class="featured-item-description">{{ project.description }}</div>
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
  