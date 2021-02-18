<template>
  <div class="masy-input"
    :class="{'masy-input-eye':showPassword, 'masy-input-clear':clearable}">
    <span class="masy-input_eye">
      <i class="fa fa-eye" v-if="showPassword" @click="handlePassword"></i>
    </span>
    <input class="masy-input_inner"
    :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :placeholder="placeholder"
    :name="name"
    :disabled="disabled"
    :value="value"
    :class="{'is-disabled': disabled}"
    @input="handleInput">
    <span class="masy-input_clear">
      <i class="fa fa-close" v-if="clearable && value" @click="clear"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'masyInput',
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
    clear() {
      this.$emit('input', '');
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};

</script>

<style lang="scss">
.masy-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .masy-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;
    &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
.masy-input-eye {
  .masy-input_inner{
    padding-left: 30px;
  }
  .masy-input_eye {
    position: absolute;
    left: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i{
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
.masy-input-clear{
  .masy-input_inner{
    padding-right: 30px;
  }
  .masy-input_clear{
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i{
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
</style>
