//引入reset.css
import "./index.css"

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//引入VantUI组件库

//全局加载
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//vant按需加载
import { Notify, Popup, Checkbox, CheckboxGroup, Dialog, ImagePreview } from 'vant';

Vue.use(Notify)
    .use(Popup)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Dialog)
    .use(ImagePreview)

//引入懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: '//img0.imgtn.bdimg.com/it/u=3166634645,2091947273&fm=26&gp=0.jpg',
    attempt: 1
})

Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')