import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"
import details from './module/details'
Vue.use(Vuex)

export default new Vuex.Store({
    
    modules: {
        details
    },
    plugins: [createLogger()]
})