import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/navData'
import main from './modules/mainData'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    nav,
    main
  },
  strict: debug
})
