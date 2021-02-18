import Vue from 'vue';
import App from './App.vue';
import 'font-awesome/css/font-awesome.min.css';

import masyButton from './components/masyButton.vue';
import masyDialog from './components/masyDialog.vue';
import masyInput from './components/masyInput.vue';
import masySwitch from './components/masySwitch.vue';
import masyRadio from './components/masyRadio.vue';
import masyRadioGroup from './components/masyRadioGroup.vue';
import masyCheckbox from './components/masyCheckbox.vue';
import masyCheckboxGroup from './components/masyCheckboxGroup.vue';

Vue.config.productionTip = false;

Vue.component(masyButton.name, masyButton);
Vue.component(masyDialog.name, masyDialog);
Vue.component(masyInput.name, masyInput);
Vue.component(masySwitch.name, masySwitch);
Vue.component(masyRadio.name, masyRadio);
Vue.component(masyRadioGroup.name, masyRadioGroup);
Vue.component(masyCheckbox.name, masyCheckbox);
Vue.component(masyCheckboxGroup.name, masyCheckboxGroup);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
