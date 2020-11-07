import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Mixins
import GlobalMixin from './mixins/GlobalMixin';
Vue.mixin(GlobalMixin);

// Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import picker from 'vue-3d-picker';
Vue.component(picker.name, picker);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
