<template>
  <div class="row at-row">
    <div class="col is-12 flex-start">
      <p v-if="email"><i class="icon icon-mail"></i>{{ email }} </p>
    </div>
    <div class="col is-12 flex-end">
      <a v-if="applyLink" :href="applyLink">Apply<i class="at-btn__icon icon icon-log-in"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobApply.vue",
  props: {
    applyLink: {
      type: String
    },
    email: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>