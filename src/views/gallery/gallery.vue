<template>
  <div class="gallery-container">
    <div class="section-heading">gallery</div>
    <div class="tabs">
      <button class="tab" :class="{ active: currentTab === Category.CODING }" @click="currentTab = Category.CODING">coding</button>
      <button class="tab" :class="{ active: currentTab === Category.MODELLING }" @click="currentTab = Category.MODELLING">3D modelling</button>
      <button class="tab" :class="{ active: currentTab === Category.MUSIC }" @click="currentTab = Category.MUSIC">music production</button>
    </div>
    <div class="tab-content">
      <div class="gallery-item" v-for="project in currentTabProjects" :key="project.id" >
          <div class="gallery-item-heading">
            <div class="gallery-item-date">{{ project.completedDate ? moment(project.completedDate).format('YYYY-MM-DD') : 'ongoing' }}</div>
          </div>
          <router-link :to="{ path: '/gallery/' + project.id }">
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
  import { projects } from '@/data/projects';
  import Category from '@/models/category';

  export default {
    name: 'Gallery',
    metaInfo: {
      title: 'markbarbuto | gallery',
    },
    data() {
      return {
        currentTab: Category.CODING,
        projects,
        Category
      };
    },
    computed: {
      currentTabProjects() {
        return this.projects.filter(p => p.category === this.currentTab);
      }
    }
  }
</script>
  
<style scoped src="./gallery.scss" lang="scss">
  @import "@/styles/_variables.scss";
</style>
  