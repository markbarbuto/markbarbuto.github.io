<template>
  <header class="navbar-desktop">
    <span class="nav-home">
      <router-link to="/">markbarbuto</router-link>
      <span class="nav-socials">
        <a href="https://www.github.com/markbarbuto/" target="_blank">
          <img src="/assets/greenorb1.png" width="30px" height="30px" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/mark-barbuto-680124204/" target="_blank">
          <img src="favicon.svg" width="30px" height="30px" alt="linkedin" />
        </a>
        <a href="https://open.spotify.com/user/badieshisha" target="_blank">
          <img src="favicon.svg" width="30px" height="30px" alt="spotify" />
        </a>
        <a href="https://www.youtube.com/@markbarbuto22" target="_blank">
          <img src="favicon.svg" width="30px" height="30px" alt="youtube" />
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
export default {
  name: 'Header'
}
</script>

<style scoped src="./header.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
