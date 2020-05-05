import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js/dist/fullpage.css';
import VueFullPage from '@/components/vue-fullpage';

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
