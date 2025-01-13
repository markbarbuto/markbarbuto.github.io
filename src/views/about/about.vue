<template>
  <div class="about-container">
    <div class="section-heading">
      about
    </div>
    <!-- section 1 -->
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
        </span>
        <img class="about-image" src="/assets/mark.jpg" alt="mark" />
      </div>
    </div>
    <!-- section 2 -->
    <div class="about-content-container" style="padding-top: 100px">
      <div class="about-content">
        <img class="about-image" src="/assets/905gunners-mark.png" alt="905gunners-mark" />
        <span class="about-description">
          <p style="display: inline-flex;">i am also part of the 905gunners
            <font-awesome-icon class="social-icon" :icon="['fas', 'futbol']" size="lg" style="margin-left: 5px; margin-top: 2px;" />
            <img class="icon-905gunners" src="/assets/905gunners.png" alt="905gunners" />
          </p>
          <p>we are a soccer team that plays weekly, and we post our matches each week as well as other soccer-related content. so check it out here 
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
          <p>here's a player shot i made of myself. i made one of these for each player on our team and printed them onto a deck of cards.</p>
          <p>we also like to collaborate with other social media presences and join local events.</p>
        </span>
      </div>
    </div>
    <!-- section 3 -->
    <div class="about-content-container" style="padding-top: 100px">
      <div class="about-content">
        <span class="about-description">
          <p>lastly, i recently discovered my desire to travel.</p>
          <p>these pictures were taken in spain in the summer of 2024. 
            all of these photos were taken in different towns in mallorca, one of the small balearic island off the east coast of spain.
          </p>
          <p>the largest photo is my favourite because of its vibrant colours and i think the subject is perfectly placed.</p>
          <p>anyway, thanks for stopping by.</p>
        </span>
        <div class="images">
            <img class="about-image" src="/assets/mallorca2.jpg" alt="mallorca" style="position: relative; z-index: 3; top: -50px; left: 50px;" />
            <img class="about-image" src="/assets/mallorca3.jpg" alt="mallorca" style="position: relative; z-index: 2; top: -100px; left: 200px;" />
            <img class="about-image" src="/assets/mallorca.jpg" alt="mallorca" style="position: relative; z-index: 1; top: -450px; left: -50px;" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'About',
  metaInfo: {
    title: 'markbarbuto | about',
  }
}
</script>

<style scoped src="./about.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
