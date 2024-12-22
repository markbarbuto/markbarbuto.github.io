<template>
  <div>
    <Header/>
    <router-view/>
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