<template>
  <div class="home-featured" id="featured">
    <div class="featured-heading">
      <a href="#featured" class="featured-heading-text">featured</a>
    </div>
    <div class="featured-items">
        <div class="featured-item" v-for="project in projects.featured" :key="project.id" >
        <div class="featured-item-heading">
            <div class="featured-item-category" :class="{
            coding: project.category === Category.CODING,
            modelling: project.category === Category.MODELLING,
            music: project.category === Category.MUSIC,
            }">
            {{ project.category }}
            </div>
            <div class="featured-item-date">{{ project.completed ? moment(project.date).format('YYYY-MM') : 'ongoing' }}</div>
        </div>
        <router-link :to="{ path: '/gallery/' + project.category.replace(' ', '-') + '/' + project.id }">
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
    <div class="view-gallery">
        <router-link to="/gallery" class="view-gallery-button">view gallery</router-link>
    </div>
  </div>
</template>

<script>
import projects from '@/data/projects';
import Category from '@/models/category';

export default {
name: 'Featured',
data() {
  return {
    projects,
    Category,
  };
}
}
</script>

<style scoped src="./featured.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>