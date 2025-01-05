<template>
  <div class="about-container">
    <div class="section-heading">
      about
    </div>
    <div class="about-content-container">
      <div class="about-content">
        <span class="about-description">
          <p>
            alright mark, let's keep this short and sweet.
          </p>
          <p>
            my name is mark barbuto.
          </p>
          <p>
            i graduated from university of toronto with a bachelor's degree in computer science.
          </p>
          <p>
            i am currently a software developer at BALANCED+, and started in july of 2024.
          </p>
          <p>
            soccer is my thing. and music; just creating things in general. art. that's the word that describes me the best. just look at me. i am art.
          </p>
          <p style="display: inline-flex;">i am also part of the 905gunners <img class="icon-905gunners" src="/assets/905gunners.png" alt="905gunners" /></p>
          <p>a soccer team that posts our games as well as other soccer-related content. so check it out here 
            <a href="https://www.youtube.com/@905-Gunners" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" />
            </a>&nbsp;
            <a href="https://www.instagram.com/905.gunners/" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
            </a>&nbsp;
            <a href="https://www.tiktok.com/@905gunners" target="_blank">
              <font-awesome-icon class="social-icon" :icon="['fab', 'tiktok']" size="sm" />
            </a>
          </p>
          <p>anyway, thanks for stopping by.</p>
        </span>
        <img class="about-image" src="/assets/mark.jpg" alt="mark" />
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'About',
  metaInfo: {
    title: 'markbarbuto | About',
  }
}
</script>

<style scoped src="./about.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
