import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"
import details from './module/details'
import home from "./module/home"
import img from "./module/img"
import offer from './module/offer'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home,
        details,
        img,
        offer
    },
    plugins: [createLogger()]
})