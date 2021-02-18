# masy-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

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