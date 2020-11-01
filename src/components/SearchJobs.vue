<template>
  <at-input placeholder="Please input" append-button size="large" :value="searchQuery" @keyup.native="emitQuery" class="search-input">
    <template slot="append">
      <i class="icon icon-search"></i>
    </template>
  </at-input>
</template>

<script>
export default {
  name: "SearchJobs.vue",
  props: {
    searchQuery: {
      type: String,
      required: true
    }
  },
  methods: {
    emitQuery(e) {
      console.log(e)
      this.$emit('update:searchQuery', e.target.value)
    }
  }
}
</script>

<style scoped>
.search-input {
  margin: var(--s1) 0;
}
</style>