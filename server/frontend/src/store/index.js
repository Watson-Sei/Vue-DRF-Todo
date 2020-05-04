import Vue from 'vue'
import Vuex from 'vuex'

import client from "../api";

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'


export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    loggedIn (state, token) {
      state.isLoggedIn = true
      client.defaults.headers.common['Authorization'] = `JWT ${token}`
      localStorage.setItem('token', token)
    },
    loggedOut (state) {
      state.isLoggedIn = false
      delete client.defaults.headers.common['Authorization']
      localStorage.clear()
    },
  },
  actions: {
    login ({commit}, [username, password]) {
      return client.auth.login(username, password).then(res => {
        commit('loggedIn', res.data.access)
        return res
      })
    },
    logout ({commit}) {
      commit('loggedOut')
    },
    tryLoggedIn ({commit}) {
      const token = localStorage.getItem('token')
      if (token) {
        client.auth.verify(token).then(() => {
          console.log(token)
          commit('loggedIn', token)
        }, () => {
          // 不正なtoken
          localStorage.clear()
        })
      }
    },
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
  },
  modules: {
  }
})
