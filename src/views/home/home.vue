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
        <div class="home-succulent">
          <img
            src="/assets/succulent.png"
            alt="succulent"
            class="home-succulent1"
          />
        </div>
        <button class="home-view-gallery-button">
          <span class="home-view-gallery">view gallery</span>
        </button>
      </div>
    </div>
    <div class="home-featured">
        <div class="featured-heading">
          featured
        </div>
        <div class="featured-items">
          <div class="featured-item" v-for="project in projects" :key="project.id">
            <img :src="project.image" class="featured-image" :alt="project.title" 
              onerror="this.src='/assets/project-placeholder.svg'; style='padding: 100px;'"
            />
            <div class="featured-item-content">
              <div class="featured-item-title">{{ project.title }}</div>
              <div class="featured-item-date">{{ project.date }}</div>
              <div class="featured-item-description">{{ project.description }}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'markbarbuto | Home',
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          date: '2021',
          description: 'This is a description of project 1',
          image: '/assets/project1.png',
        },
        {
          id: 2,
          title: 'Project 2',
          date: '2021',
          description: 'This is a description of project 2',
          image: '/assets/project2.png',
        },
        {
          id: 3,
          title: 'Project 3',
          date: '2021',
          description: 'This is a description of project 3',
          image: '/assets/project3.png',
        },
      ],
    };
  }
}
</script>

<style scoped src="./home.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
