<template>
  <div class="masy-form-item">
    <label class="masy-form-item_label" :style="{width:this.masyForm.labelWidth}">
      {{ label }}
    </label>
    <div class="masy-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'masyFormItem',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  inject: ['masyForm'],
};

</script>

<style lang="scss">
.masy-form-item{
  margin-bottom: 25px;
  .masy-form-item_label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .masy-form-item_content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
