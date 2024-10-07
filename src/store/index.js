import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null,
      showLoginModal: false,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = null
    },
    setShowLoginModal(state, value) {
      state.showLoginModal = value
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user)
    },
    logout({ commit }) {
      commit('clearUser')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})

export default store
