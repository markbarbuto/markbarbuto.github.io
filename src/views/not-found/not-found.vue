<template>
  <div class="not-found-container">
    <h3>oops! page not found</h3>
    <div class="not-found-code-container">
      <h1 class="not-found-code">404</h1>
    </div>
    <div class="not-found-text-container">
      <h2 class="not-found-text">
        sorry, i didn't make this page yet oops
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: '404 - Not Found',
  },
}
</script>

<style scoped src="./not-found.scss" lang="scss">
@import "@/styles/_variables.scss";
</style>
