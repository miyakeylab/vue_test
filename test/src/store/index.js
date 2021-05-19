import Vue from 'vue'
import Vuex from 'vuex'
import oyakoMessage from './oyako/message'

Vue.use(Vuex)

// Storeを生成
export default new Vuex.Store({
  state: {
    message: 'これはStoreデフォルトにあるmessage'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    oyakoMessage: oyakoMessage
  }
})
