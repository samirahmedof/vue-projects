import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules
import AuthModule from './modules/auth';

export default new Vuex.Store({
  state: {
    darkBg: false
  },
  mutations: {
    setDarkBg(state, value) {
      state.darkBg = value;
    }
  },
  actions: {
  },
  modules: {
    auth: AuthModule,
  }
})
