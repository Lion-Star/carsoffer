//引入reset.css
import "./index.css"

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//引入组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//引入懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')