<template>
  <div class="container">
    <Header/>
    <router-view class="content"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
import Footer from './components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>