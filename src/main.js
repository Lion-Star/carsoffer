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

import { ImagePreview } from 'vant';
Vue.use(ImagePreview);

//引入懒加载插件
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: 'http://hbimg.b0.upaiyun.com/1f828e876d3b9aed1bcd3213f28db91c0e8f44589965-9droKD_fw658',
    attempt: 1
})

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')