import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import axios from 'axios'
import 'vant/lib/button/style';
=======

import Axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
>>>>>>> f8046e1ca5deb4d2de830302a972baae1f06071b

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')