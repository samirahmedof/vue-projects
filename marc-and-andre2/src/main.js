import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/style.css';
import Vuelidate from 'vuelidate';
import { router } from './assets/js/router';
import { store } from './assets/js/store';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

router.beforeEach((to, from, next) => {
  if (store.getters.getUserStatus == 'user') {
    if (to.path == '/users' || to.path == '/quick-registration' || to.path == '/exhibition') {
      next('/orders');
    }
  }
  // else {
  //   if (to.path == '/orders' || to.path == '/order-details' || to.path == '/shipping-and-payment' || to.path == '/about') {
  //     console.log('manager')
  //     next('/users');
  //   }
  // }
  if (to.path == '/catalog') {
    store.commit('setHideSearch', false);
  }
  else {
    store.commit('setHideSearch', true);
  }
  if (to.path == '/login') {
    if (store.getters.getIsLogged) {
      next('/');
    }
    else {
      next();
    }
  }
  else {
    if (!store.getters.getIsLogged) {
      next('/login');
    }
    else {
      next();
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
