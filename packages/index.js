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
// 安装插件的原理：当你调用 Vue.use(插件) 时，
// 它会自动找到 插件 中的index.js 的 install 函数进行执行
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
