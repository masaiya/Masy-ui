<template>
  <label class="masy-checkbox" :class="{'is-checked': isChecked}">
    <span class="masy-checkbox_input">
      <span class="masy-checkbox_inner">
        <i class="fa fa-check" v-show="isChecked"></i>
      </span>
      <input type="checkbox" class="masy-checkbox_original" :name="name"
      v-model="model" :value="label">
    </span>
    <span class="masy-checkbox_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'masyCheckbox',
  inject: {
    masyCheckboxGroup: {
      default: '',
    },
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.masyCheckboxGroup.value : this.value;
      },
      set(value) {
        return this.isGroup ? this.masyCheckboxGroup.$emit('input', value) : this.$emit('input', value);
      },
    },
    isGroup() {
      return !!this.masyCheckboxGroup;
    },
    isChecked() {
      // 如果是group包裹，判断 label 是否在model上
      // 如果不是group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
};

</script>

<style lang="scss">
.masy-checkbox{
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .masy-checkbox_input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .masy-checkbox_inner{
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),
      background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
      &:after{
        box-sizing: content-box;
        content: '';
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .masy-checkbox_original{
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .masy-checkbox_label{
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
.fa-check {
  color: #409eff;
  transition: all .3s;
}
</style>
