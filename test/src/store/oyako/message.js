export default {
  state: {
    message: 'これはoyakoMessageにあるmessageです',
    count: 0
  },
  getters: {
    messageData (state) {
      return state.message
    },
    countData (state) {
      return state.count
    }
  },
  mutations: {
    increment (state, num) {
      state.count += num
    },
    decrement (state) {
      state.count--
    },
    changeMessage (state, changeMessage) {
      state.message = changeMessage
    }
  },
  actions: {
    increment ({ commit }, { num }) {
      commit('increment', num)
    },
    decrement ({ commit }) {
      commit('decrement')
    },
    changeMessage ({ commit }, changeMessage) {
      commit('changeMessage', changeMessage)
    }
  },
  modules: {
  }
}
