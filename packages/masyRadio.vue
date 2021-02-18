<template>
  <label class="masy-radio" :class="{'is-checked':label === model}">
    <span class="masy-radio_input">
      <span class="masy-radio_inner"></span>
      <input type="radio" class="masy-radio_original" :value="label" :name="name"
      v-model="model">
    </span>
    <span class="masy-radio_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'masyRadio',
  computed: {
    model: {
      get() {
        return this.isGroup ? this.masyRadioGroup.value : this.value;
      },
      set(value) {
        return this.isGroup ? this.masyRadioGroup.$emit('input', value) : this.$emit('input', value);
      },
    },
    // 用于判断radio是否被radio-group包裹
    isGroup() {
      return !!this.masyRadioGroup;
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    value: null,
    name: {
      type: String,
      default: '',
    },
  },
  inject: {
    masyRadioGroup: {
      default: '',
    },
  },
};

</script>

<style lang="scss">
.masy-radio{
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .masy-radio_input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .masy-radio_inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .masy-radio_original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .masy-radio_label{
    font-size: 14px;
    padding-left: 10px;;
  }
}
// 选中的样式
.masy-radio.is-checked{
  .masy-radio_input{
    .masy-radio_inner{
      border-color: #409eff;
      background-color: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .masy-radio_label{
    color:#409eff;
  }
}
</style>
