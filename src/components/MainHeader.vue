<template>
  <div class="container container-fluid">
    <header class="header row at-row">
      <div class="col-8 col-offset-1">
        <at-button icon="icon-chevrons-left" circle @click.native="backToJobsList"
                   v-if="isBackToJobsListPossible"></at-button>
        <a href="https://github.com/MateuszKawka/vue-graphql-jobs" target="_blank" v-else>
          <i class="icon icon-github"></i>
        </a>
      </div>
      <div class="col-14  col-offset-1 flex-end"><h1>Vue graphql jobs</h1></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainHeader.vue",
  methods: {
    backToJobsList() {
      this.$router.back(-1)
    }
  },
  computed: {
    isBackToJobsListPossible() {
      return this.$route.name === "Job"
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 999;
  padding: var(--s1) var(--s2)
}
</style>