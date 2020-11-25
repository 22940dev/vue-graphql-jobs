<template>
  <div>
    <div v-if="locations.length > 0">
      <p v-for="(location, index) in locations" :key="`location__${index}`"> {{ location.name }} | {{ location.country.name }}</p>
    </div>
    <p v-else>Remote</p>
  </div>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array,
      default: () => []
    }
  }
}
</script>