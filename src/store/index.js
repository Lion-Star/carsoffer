import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"
import home from "./module/home"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    },
    plugins: [createLogger()]
})