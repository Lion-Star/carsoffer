import Vue from 'vue'
import Vuex from 'vuex'
import details from './module/details'
import home from "./module/home"
import picture from "./module/picture"
import lowprice from "./module/lowprice"
Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        home,
        details,
        picture,
        lowprice
    }
})