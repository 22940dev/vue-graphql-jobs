<template>
  <at-button-group>
    <at-button icon="icon-arrow-up" :type="newestFirst? 'primary': ''" @click.native="emitSort(true)">Newest first
    </at-button>
    <at-button icon="icon-arrow-down" :type="newestFirst? '': 'primary'" @click.native="emitSort(false)">Olders first
    </at-button>
  </at-button-group>
</template>

<script>
export default {
  data: () => ({
    newestFirst: true
  }),
  methods: {
    emitSort(value) {
      this.newestFirst = value
      this.$emit('sort-update', this.newestFirst)
    }
  }
}

</script>