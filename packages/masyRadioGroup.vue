<template>
  <div class="masy-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'masyRadioGroup',
  props: {
    // 接收value值，给radio进行双向绑定
    value: null,
  },
  provide() {
    return {
      masyRadioGroup: this,
    };
  },
};

</script>

<style>

</style>
