<template>
  <div>
    <at-button @click="modal1=true">Show Customize Modal</at-button>
    <at-modal v-model="modal1" title="Here is title" @on-confirm="handleConfirm" @on-cancel="handleCancel">
      <p>Here is the content!</p>
      <p>Here is the content!</p>
    </at-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false
    }
  },
  methods: {
    handleConfirm() {
      this.$Message('Confirm')
    },
    handleCancel() {
      this.$Message('Cancel')
    }
  }
}

</script>