<template>
  <header class="navbar-desktop">
    <span class="nav-home">
      <router-link to="/">markbarbuto</router-link>
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

<style scoped lang="scss">
@import "@/styles/_variables.scss";

.navbar-desktop {
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 30px;
  position:-webkit-sticky;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
}
 
.nav-home {
  color: rgba(0, 0, 0, 1);
  height: auto;
  padding-left: 53px;
  padding-right: 83px;
  text-align: left;
  font-size: 36px;
  font-style: Bold;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.nav-links {
  gap: 100px;
  display: flex;
  padding-right: 53px;
  justify-content: flex-end;

}
 
.nav-item {
  color: rgba(0, 0, 0, 1);
  align-content: center;
  height: auto;
  font-size: $main-font-size;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
</style>
