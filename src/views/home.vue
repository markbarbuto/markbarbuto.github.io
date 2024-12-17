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
        <div class="home-succulent">
          <img
            src="/assets/succulent.png"
            alt="succulent"
            class="home-succulent1"
          />
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
        <button class="home-view-gallery-button">
          <span class="home-view-gallery">view gallery</span>
        </button>
      </div>
      <div class="navbar-desktop">
        <span class="nav-markbarbuto">markbarbuto</span>
        <div class="nav-links">
          <span class="nav-home">
            <router-link to="/">home</router-link>
          </span>
          <span class="nav-gallery">
            <router-link to="/not-found">gallery</router-link>
          </span>
          <span class="nav-about">
            <router-link to="/not-found">about</router-link>
          </span>
          <span class="nav-contact">
            <router-link to="/not-found">contact</router-link>
          </span>
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
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
 
.home-home {
  width: 100%;
  height: 900px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(242, 242, 242, 1);
}
 
.home-background {
  width: 100%;
  height: 900px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
 
.home-orb1 {
  top: 277px;
  left: 216px;
  width: 176px;
  height: 179px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.home-green-orb1 {
  top: 0px;
  left: 0px;
  width: 176px;
  height: 179px;
  position: absolute;
}
 
.home-orb2 {
  top: 455px;
  left: 1079px;
  width: 128px;
  height: 131px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.home-green-orb2 {
  top: 0px;
  left: 0px;
  width: 128px;
  height: 131px;
  position: absolute;
}
 
.home-desktop {
  top: 0px;
  left: 0px;
  width: 100%; /* 1440px; */
  height: 900px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.home-background-blur {
  top: 0px;
  left: 0px;
  width: 1440px;
  height: 900px;
  position: absolute;
}
 
.home-content-desktop {
  gap: 48px;
  top: 325px;
  left: 83px;
  width: 710px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}
 
.home-heading-body {
  gap: 18px;
  width: 711px;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}
 
.home-greeting {
  color: rgba(0, 0, 0, 1);
  width: 711px;
  height: auto;
  font-size: 49px;
  font-style: Bold;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 120.00000476837158%;
  font-stretch: normal;
  text-decoration: none;
}
 
.home-description {
  color: rgba(0, 0, 0, 1);
  width: 711px;
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.home-view-gallery-button {
  gap: 10px;
  top: 772px;
  left: 630px;
  width: 180px;
  display: flex;
  padding: 12px 36px;
  position: absolute;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
}
 
.home-view-gallery {
  color: rgb(255, 255, 255);
  height: auto;
  font-size: 20px;
  font-style: Bold;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 120%;
  font-stretch: normal;
  text-decoration: none;
}
 
.navbar-desktop {
  top: 0px;
  left: 0px;
  width: 100%; /* 1440px; */
  height: 96px;
  display: flex;
  padding: 24px 80px;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
}
 
.nav-markbarbuto {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 36px;
  font-style: Bold;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 700;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.nav-links {
  gap: 100px;
  display: flex;
  align-items: flex-start;
}
 
.nav-home {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.nav-gallery {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.nav-about {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.nav-contact {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: SF Pro Display;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
 
.home-succulent {
  top: 182px;
  right: 15%;
  width: 500px;
  height: 500px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.home-succulent1 {
  top: 0px;
  left: 0px;
  width: 500px;
  height: 500px;
  position: absolute;
}
</style>
