import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        // 主页
        path: '/',
        name: 'home',
        component: () =>
            import ("../views/Home.vue")
    },
    {
        //详情页
        path: '/details',
        name: 'details',
        component: () =>
            import ("../views/details.vue")
    },
    {
        //图片页
        path: '/picture',
        name: 'picture',
        component: () =>
            import ("../views/Picture.vue")
    },
    {
        //询价页
        path: '/asklowprice',
        name: 'asklowprice',
        component: () =>
            import ("../views/asklowprice.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router