import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/home',
        name: 'home',
        component: () =>
            import ("../views/Home.vue")
    },
    {
        path: '/details',
        name: 'details',
        component: () =>
            import ("../views/details.vue")
    },
    {
        path: "*",
        redirect: "/home"
    }
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router