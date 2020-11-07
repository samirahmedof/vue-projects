import Vue from 'vue';

let wait = false;

export default ({ app }) => {
  // Don't use the middleware on server-side
  if (process.server) return

  if (wait) return;

  wait = true;

  app.router.beforeResolve(async (to, from, next) => {
    if (to.name.startsWith('index')) {
      await app.store.dispatch('pageData/getPageData', 6);
    } else if (to.name.startsWith('about-us')) {
      await app.store.dispatch('pageData/getPageData', 2);
    } else if (to.name.startsWith('portfolio')) {
      await app.store.dispatch('pageData/getPageData', 3);
    } else if (to.name.startsWith('services')) {
      await app.store.dispatch('pageData/getPageData', 4);
    } else if (to.name.startsWith('partners')) {
      await app.store.dispatch('pageData/getPageData', 5);
    } else if (to.name.startsWith('contacts')) {
      await app.store.dispatch('pageData/getPageData', 1);
    }
    next();
  });

  // Return a promise to tell nuxt.js to wait for the end of it
  app.router.afterEach((to, from) => {
    if (from.name) {
      if (to.name.startsWith('index')) {
        Vue.prototype.$nuxt.$emit('setSlider', 0);
      } else if (to.name.startsWith('about-us')) {
        Vue.prototype.$nuxt.$emit('setSlider', 1);
      } else if (to.name.startsWith('portfolio')) {
        Vue.prototype.$nuxt.$emit('setSlider', 2);
      } else if (to.name.startsWith('services')) {
        Vue.prototype.$nuxt.$emit('setSlider', 3);
      } else if (to.name.startsWith('partners')) {
        Vue.prototype.$nuxt.$emit('setSlider', 4);
      } else if (to.name.startsWith('contacts')) {
        Vue.prototype.$nuxt.$emit('setSlider', 5);
      }
    } else {
      let routerMap = ['index', 'about-us', 'portfolio', 'services', 'partners', 'contacts']
      let fromIndex = routerMap.findIndex(route => route === to.name) + 1
      Vue.prototype.$nuxt.$emit('setSlider', fromIndex)
    }
    setTimeout(() => {
      wait = false;
    }, 500);
  });
}
