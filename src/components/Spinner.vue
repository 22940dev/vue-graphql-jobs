<template>
  <div class="spinner">
    <GridLoader color="#78a4f4"/>
  </div>
</template>

<script>
import GridLoader from 'vue-spinner/src/GridLoader.vue'

export default {
  name: "Spinner.vue",
  components: {
    GridLoader
  }
}
</script>

<style scoped>
.spinner {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>