<template>
  <vue-simple-markdown :source="content"></vue-simple-markdown>
</template>

<script>
export default {
  name: "JobDescription.vue",
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>