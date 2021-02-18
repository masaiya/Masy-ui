<template>
  <div id="app">
    <!-- <masy-input placeholder="请输入用户名" type="text" v-model="username"></masy-input>
    <masy-input type="password" v-model="username" showPassword
    @input(val)="username=val"></masy-input>
    <masy-input type="text" clearable showPassword v-model="password"
    @input(val)="password=val"></masy-input> -->
    <!-- <masy-switch v-model="active" active-color="green" inactive-color="red"></masy-switch> -->
    <!-- <masy-radio label="1" v-model="gender">男</masy-radio>
    <masy-radio label="0" v-model="gender">女</masy-radio>
    <masy-radio-group v-model="gender">
      <masy-radio label="1">男</masy-radio>
      <masy-radio label="0">女</masy-radio>
    </masy-radio-group> -->
    <masy-checkbox v-model="active">唱歌</masy-checkbox>

    <masy-checkbox-group v-model="hobby">
      <masy-checkbox label="吃饭">吃饭</masy-checkbox>
      <masy-checkbox label="睡觉">睡觉</masy-checkbox>
      <masy-checkbox label="打豆豆">打豆豆</masy-checkbox>
    </masy-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      username: '',
      password: '',
      active: false,
      gender: '1',
      hobby: ['睡觉'],
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
#app {
  .masy-input {
    width: 180px;
  }
}
</style>
