import Vue from 'vue'
import Vuex from 'vuex'
import frame from './frame'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    frame,
    home,
  }
})
