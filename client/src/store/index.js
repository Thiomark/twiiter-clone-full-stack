import Vue from 'vue'
import Vuex from 'vuex'
import helpers from './modules/helpers'
import twoots from './modules/twoots'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        helpers,
        twoots,
        user
    }
})
