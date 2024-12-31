<template>
  <div class="home-container">
    <div class="home-home">
      <div class="home-background">
        <div class="home-desktop">
          <img src="/assets/backgroundblur.png" class="home-background-blur" />
        </div>
      </div>
      <div class="home-content-desktop">
        <div class="home-heading-body">
          <span class="home-greeting">hello, this is my portfolio.</span>
          <span class="home-description">
            I am a software developer, among many other things; click around and
            find out
          </span>
        </div>
        <div class="home-succulent" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag" :style="{ transform: `rotate(${rotation}deg)` }">
          <img
            src="/assets/succulent.png"
            alt="succulent"
            class="home-succulent-img"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <div class="home-featured">
      <div class="featured-heading">
        featured
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
  </div>
</template>

<script>
import spinner from '@/views/home/spinner.js';
import projects from '@/data/projects';
import Category from '@/models/category';

export default {
  name: 'Home',
  metaInfo: {
    title: 'markbarbuto | home',
  },
  mixins: [spinner],
  data() {
    return {
      projects,
      Category,
    };
  }
}
</script>

<style scoped src="./home.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
