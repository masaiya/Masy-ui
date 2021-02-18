<template>
  <div class="masy-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'masyForm',
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  provide() {
    return {
      masyForm: this,
    };
  },
};

</script>

<style>

</style>
