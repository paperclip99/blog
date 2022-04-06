import { createStore } from 'vuex'
import { postsModule } from './postsModule'
import { userModule } from './userModule'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    postsModule
  }
})
