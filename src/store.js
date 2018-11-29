import Vue from 'vue'
import Vuex from 'vuex'
import app from './main'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  user: {}
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateUser (state, data) {
    state.user = data
  },
  updateLang (state, data) {
    app.$i18n.locale = data
    state.lang = data
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  updateUser: (context, data) => {
    context.commit('updateUser', data)
  },
  updateLang: (context, data) => {
    console.log('adsad', data)
    context.commit('updateLang', data)
  }
}

// getters are functions
const getters = {
  user: state => {
    return state.user
  },
  lang: state => {
    return state.lang
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
