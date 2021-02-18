import Vue from 'vue';
import App from './App.vue';
import MasyUi from '../packages';

Vue.config.productionTip = false;
Vue.use(MasyUi);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
