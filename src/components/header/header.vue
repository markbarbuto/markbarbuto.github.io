<template>
  <header class="navbar-desktop">
    <span class="nav-home">
      <router-link to="/">markbarbuto</router-link>
      <span class="nav-socials">
        <a href="https://www.github.com/markbarbuto/" target="_blank">
          <font-awesome-icon class="social-icon" :icon="['fab', 'github']" size="xs" />
        </a>
        <a href="https://www.linkedin.com/in/mark-barbuto-680124204/" target="_blank">
          <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" size="xs" />
        </a>
        <a href="https://open.spotify.com/user/badieshisha" target="_blank">
          <font-awesome-icon class="social-icon" :icon="['fab', 'spotify']" size="xs" />
        </a>
        <a href="https://www.youtube.com/@markbarbuto22" target="_blank">
          <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" size="xs" />
        </a>
      </span>
    </span>
    <nav class="nav-links">
      <span class="nav-item">
        <router-link to="/gallery">gallery</router-link>
      </span>
      <span class="nav-item">
        <router-link to="/about">about</router-link>
      </span>
      <span class="nav-item">
        <router-link to="/contact">contact</router-link>
      </span>
    </nav>
  </header>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Header'
}
</script>

<style scoped src="./header.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
