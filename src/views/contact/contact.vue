<template>
  <div class="contact-container">
    <div class="section-heading">
      contact
    </div>
    <div class="contact-content-container">
      <div class="contact-content">
        <div class="contact-email">
          markbarbuto@outlook.com
          <a href="mailto:markbarbuto@outlook.com" class="form-send-button" type="submit">email me</a>
        </div>
        <!-- <form class="contact-form">
          <p>
            <label for="email">email</label>
            <input v-model="email" class="form-email" placeholder="example@test.com" />
          </p>

          <p>
            <label for="message">message</label>
            <textarea v-model="message" id="message" class="form-message" type="text" placeholder="send me a message"></textarea>
          </p>

          <a href="mailto:markbarbuto@outlook.com" class="form-send-button" type="submit">send</a>
        </form> -->
        <img class="contact-image" src="/assets/succulent.png" alt="mark" />
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'Contact',
  metaInfo: {
    title: 'markbarbuto | contact',
  }
}
</script>

<style scoped src="./contact.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
