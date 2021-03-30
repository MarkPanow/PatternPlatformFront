import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: localStorage
  })],
  strict: true,
  state: {
    root: "http://hci-dev.hochschule-trier.de:8080",
    // root: "http://localhost:8080",
    isLogged: false,
    isOpen: false,
  },
  mutations: {
    statusLogin(state, newState: boolean){
      state.isLogged = newState
    },
    toggleComments(state, newState: boolean){
      state.isOpen = newState
    }
  },
  actions: {
  },
  modules: {
  }
})
