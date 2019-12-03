import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from 'vuex/dist/logger';

// 引入子模块
import home from './module/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    },
    plugins: [creareLogger()]
})