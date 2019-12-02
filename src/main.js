//引入reset.css
import "./index.css"

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

Vue.prototype.$http = Axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')