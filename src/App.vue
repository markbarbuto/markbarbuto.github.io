<template>
  <div class="container">
    <Header/>
    <router-view class="content"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/shared/header.vue'
import Footer from './views/shared/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>