<template>
  <footer class="footer">
    <p>&copy; 2024 Mark Barbuto.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

footer{
  background-color: #f8f9fa;
  padding: 2rem;
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
  font-size: 15px;
}
</style>
