<template>
  <div class="home-container">
    <div class="home-content-container">
      <div class="home-background">
        <img src="/assets/backgroundblur.png" class="home-background-blur" />
        <div class="home-desktop">
        </div>
      </div>
      <div class="home-content">
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
    <div class="arrow-down" style="position: relative; margin-top: -16px; margin-bottom: -16px; z-index: 1;">
      <a href="#featured" class="arrow-down-link">
        <font-awesome-icon :icon="['fas', 'circle-chevron-down']" size="2xl" />
      </a>
    </div>
    <Featured/>
  </div>
</template>

<script>
import spinner from '@/views/home/spinner.js';
import projects from '@/data/projects';
import Category from '@/models/category';
import Featured from '@/components/featured/featured.vue';

export default {
  name: 'Home',
  metaInfo: {
    title: 'markbarbuto | home',
  },
  components: {
    Featured,
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
