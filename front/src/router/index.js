import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from './../store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.background == 'dark')) {
    store.commit('setDarkBg', true);
  } else {
    store.commit('setDarkBg', false);
  }
  next();
})
const isAuthenticated = true;

router.beforeEach((to, from, next) => {
  if (to.name !== 'sign-in' && !isAuthenticated) next({ name: 'sign-in' });
  else next();
});

export default router
