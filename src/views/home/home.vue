<template>
  <div class="home-container">
    <div class="home-home">
      <div class="home-background">
        <div class="home-orb1">
          <img src="/assets/greenorb1.png" class="home-green-orb1" />
        </div>
        <div class="home-orb2">
          <img src="/assets/greenorb2.png" class="home-green-orb2" />
        </div>
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
  </div>
</template>

<script>
import spinner from '@/views/home/spinner.js';

export default {
  name: 'Home',
  metaInfo: {
    title: 'markbarbuto | Home',
  },
  mixins: [spinner]
}
</script>

<style scoped src="./home.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
