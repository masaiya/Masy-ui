# masy-ui

这是一个基于 vue-cli3，参考了 element-ui 封装的一个 前端ui组件库。

### 使用方法

1. 初始化 vue 项目

   ` vue create demo`

2. 安装 masy-ui 组件库

   `npm install masy-ui -g`

3. 全局导入

   `import MasyUI from 'masy-ui'`

   `import 'masy-ui/lib/masy-ui.css'`

   `Vue.use(MasyUI)`

4. 使用组件 

    这里演示了 masy-form，masy-form-item，masy-switch，masy-input等组件的基础使用。

   ```javascript
   <template>
     <div id="app">
       <masy-form :model="model" label-width="90px">
         <masy-form-item label="用户名">
           <masy-input placeholder="请输入用户名" v-model="model.username"></masy-input>
         </masy-form-item>
         <masy-form-item label="选择">
           <masy-switch v-model="model.active" active-color="green"></masy-switch>
         </masy-form-item>
         <masy-form-item label="爱好">
           <masy-checkbox-group v-model="model.hobby">
             <masy-checkbox label="吃饭">吃饭</masy-checkbox>
             <masy-checkbox label="睡觉">睡觉</masy-checkbox>
             <masy-checkbox label="打豆豆">打豆豆</masy-checkbox>
           </masy-checkbox-group>
         </masy-form-item>
         <masy-form-item label="性别">
           <masy-radio-group v-model="model.gender">
             <masy-radio label="1">男</masy-radio>
             <masy-radio label="2">女</masy-radio>
           </masy-radio-group>
         </masy-form-item>
       </masy-form>
     </div>
   </template>
   
   <script>
   export default {
     name: 'App',
     data() {
       return {
         model: {
           username: '',
           active: false,
           hobby: [],
           gender: null,
         },
       };
     },
     methods: {
     },
   };
   </script>
   ```

### 封装UI组件步骤

###### 1.通过vue-cli创建项目

`vue create masy-ui`

###### 2.vue-cli预处理
在这里我选择了babel，esLint，以及css预处理器（Scss）

###### 3.封装组件

（1）button组件

 参数支持：

| 参数名   | 参数描述                                        | 参数类型 | 默认值  |
| -------- | ----------------------------------------------- | -------- | ------- |
| type     | 按钮类型（primary/success/warning/danger/info） | string   | default |
| plain    | 是否是朴素按钮                                  | boolean  | false   |
| round    | 是否是圆角按钮                                  | boolean  | false   |
| circle   | 是否是圆形按钮                                  | boolean  | false   |
| disabled | 是否禁用按钮                                    | boolean  | false   |
| icon     | 图标类名                                        | string   | 无      |

事件支持：

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |

（2）dialog组件

参数支持：

| 参数名  | 参数描述       | 参数类型 | 默认值 |
| ------- | -------------- | -------- | ------ |
| title   | 对话框标题     | string   | 提示   |
| width   | 宽度           | string   | 50%    |
| top     | 与顶部的距离   | string   | 15vh   |
| visible | 是否显示dialog | boolean  | false  |

事件支持：

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 对话框显示的事件 |
| closed | 对话框隐藏的事件 |

插槽说明：

| 插槽名称 | 插槽描述     |
| -------- | ------------ |
| default  | dialog的内容 |
| title    | dialog的标题 |
| footer   | dialog的底部 |

<style lang="scss" scoped></style>

`scoped`会给当前组件的模板中的所有的元素都添加一个随机的属性，且该属性是惟一的。

`scoped`会给当前组件的所有的样式添加一个对应的属性选择器。

在封装组件库时一般不使用scoped，因为每个组件都会有自己专属的名字，一般不会和其他组件重名。使用scoped后，外界传入的slot可能会出现名称不对应问题。

但是如果一定要使用scoped，可以使用深度选择器  ::v-deep 选择器{} 来进行传入的slot的样式修改。

（3）Input组件

参数支持：

| 参数名称      | 参数描述                      | 参数类型 | 默认值 |
| ------------- | ----------------------------- | -------- | ------ |
| placeholder   | 占位符                        | string   | 无     |
| type          | 文本框的类型（text/password） | string   | text   |
| disabled      | 禁用                          | boolean  | false  |
| clearable     | 是否显示清空按钮              | boolean  | false  |
| show-password | 是否显示密码切换按钮          | boolean  | false  |
| name          | name属性                      | string   | ''     |
| value         | 初始化绑定的值                | string   | ''     |

事件支持：

| 事件名称 | 事件描述     |
| -------- | ------------ |
| blur     | 失去焦点事件 |
| change   | 内容改变事件 |
| focus    | 获取焦点事件 |

问题1：使用masyInput组件时，使用v-model双向数据绑定

`<masy-input v-model="username"></masy-input>`

在封装组件时，可以理解为

`<masy-input  :value="username" @input="input"></masy-input>`

所以，封装组件时传递一个prop—value属性，并且对 input 事件进行监听，并向父组件$emit input事件。

这样就可以使用v-model双向数据绑定。

问题2：在<style></style>中使用scoped，导致传入的 button 样式不能统一。

（4）Switch组件：

参数支持：

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向数据绑定         | boolean  | false  |
| name          | name属性             | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   |        |
| inactiveColor | 自定义的不激活的颜色 | string   |        |

事件支持：

| 事件名称 | 事件描述         |
| -------- | ---------------- |
| change   | change触发的事件 |

注意：虽然我们用的时switch开关，但是实际上这还是一个表单，所以我们要在封装组件时内置一个隐藏的input表单。

`<input type="checkbox">`

（5）Radio组件

参数支持：

| 参数名称 | 参数描述        | 参数类型                | 默认值 |
| -------- | --------------- | ----------------------- | ------ |
| v-model  | 双向数据绑定    | boolean                 | false  |
| label    | 单选框的radio值 | string，number，boolean | ''     |
| name     | name属性        | string                  | ''     |

（6）Radio-group组件

用来包裹 Radio 组件，v-model双向绑定到 radio-group 上。

要实现把v-model绑定到radio-group上，但是值要传递到radio中，这里采用provide/inject，在radio-group中直接把整个radio-group传递过去，让radio可以直接操控radio-group。以此来获取radio-group接收到的value值。

参数支持：

| 参数名称 | 参数描述     | 参数类型 | 默认值 |
| -------- | ------------ | -------- | ------ |
| v-model  | 双向数据绑定 |          | null   |



在这里，我封装的效果是，既可以单独使用radio(要给同组每一个radio都双向绑定参数)，也可以把radio放在radio-group中使用(只需要给radio-group双向绑定参数即可)。

（7）Checkbox组件

参数支持：

| 参数名称 | 参数描述     | 参数类型 | 默认值 |
| -------- | ------------ | -------- | ------ |
| v-model  | 双向数据绑定 | boolean  | false  |
| label    | 复选框的值   | string   | ''     |
| name     | name属性     | string   | ''     |

（8）CheckboxGroup组件

用来包裹checkbox组件。

（9）Form组件

| 参数名称   | 参数描述    | 参数类型 | 默认值 |
| ---------- | ----------- | -------- | ------ |
| model      | 表单数据    | object   | {}     |
| labelWidth | label的宽度 | string   | '80px' |

model是整个表单数据的绑定值。

```javascript
model: {
  username: '',
  active: false,
  hobby: [],
  gender: null
}
```

（10）FormItem组件

| 参数名称 | 参数描述   | 参数类型 | 默认值 |
| -------- | ---------- | -------- | ------ |
| label    | 表单提示值 | string   | ''     |

###### 4.修改配置

（1）添加packages文件夹，并且修改 src 文件夹为 examples（不改也可以，但是在组件库中该文件夹主要做测试，所以改为examples更为合理）。

（2）新建 vue.config.js ，并修改配置

```javascript
const path = require('path');
module.exports = {
  pages: {
    index: {
      // 修改项目的入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options;
      })
  }
}
```

（3）在 packages 文件夹中新建 index.js，这是整个包的入口，在这里导入所有的资源以及组件，并在这里注册。

**安装插件的原理：当你调用 Vue.use(插件) 时，它会自动找到 插件 中的 index.js 的 install 函数进行执行。**

```javascript
// 整个包的入口
// 导入字体图标
import 'font-awesome/css/font-awesome.min.css';
// 导入所有组件
import masyButton from './masyButton.vue';
import masyDialog from './masyDialog.vue';
import masyInput from './masyInput.vue';
import masySwitch from './masySwitch.vue';
import masyRadio from './masyRadio.vue';
import masyRadioGroup from './masyRadioGroup.vue';
import masyCheckbox from './masyCheckbox.vue';
import masyCheckboxGroup from './masyCheckboxGroup.vue';
import masyForm from './masyForm.vue';
import masyFormItem from './masyFormItem.vue';

// 存储所有的组件列表
const components = [
  masyButton,
  masyDialog,
  masyInput,
  masySwitch,
  masyRadio,
  masyRadioGroup,
  masyCheckbox,
  masyCheckboxGroup,
  masyForm,
  masyFormItem,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册。
const install = function (Vue) {
  // 注册所有的组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};

```

（4）在 package.json 中构建成库的命令

"scripts": {

  "serve": "vue-cli-service serve",

  "build": "vue-cli-service build",

  "lint": "vue-cli-service lint",

  **"lib": "vue-cli-service build --target lib packages/index.js"**

 }

其中 packages/index.js 是我需要打包到的目录。

（5）打包成功 出现类似于如下显示即是打包成功。

| File                    | Size       | Gzipped   |
| ----------------------- | ---------- | --------- |
| dist\masy-ui.umd.min.js | 34.12 KiB  | 11.52 KiB |
| dist\masy-ui.umd.js     | 124.93 KiB | 27.40 KiB |
| dist\masy-ui.common.js  | 124.55 KiB | 27.26 KiB |
| dist\masy-ui.css        | 38.57 KiB  | 8.71 KiB  |

 （6）如果你还希望自己的ui组件库可以上传到npm，作为一个公共的ui组件库，请继续往下看。

- 首先，修改 package.json 中的属性 private 为false ，这样这个ui组件库才不是私有的，才能上传到 npm 上。

  ` "private": false`

- 其次，向 package.json 中添加一个下载组件库的入口文件 

  `"main": "dist/masy-ui.umd.min.js"`

- 然后，在根目录下创建一个 .npmignore ，在改文件中可以选择那些文件不被npm上传

  ```
  # 忽略目录
  examples/
  packages/
  public/
  # 忽略指定文件
  vue.config.js
  babel.config.js
  *.map
  ```

- 注册 npm 并登录

- npm login

- npm publish