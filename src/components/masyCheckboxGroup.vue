<template>
  <div class="masy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'masyCheckboxGroup',
  provide() {
    return {
      masyCheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
};

</script>

<style>

</style>
