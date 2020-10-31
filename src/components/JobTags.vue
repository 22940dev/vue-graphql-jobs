<template>
  <div class="tags">
    <at-tag color="primary" v-for="tag in tags" :key="tag.name">{{ tag.name }}</at-tag>
  </div>
</template>

<script>
export default {
  name: "JobTags.vue",
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.tags .at-tag {
  margin-right: 4px;
  margin-top: 8px;
}
</style>