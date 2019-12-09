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
        path: '/offer',
        name: 'offer',
        component: () =>
            import ("../views/Offer.vue")
    },
    {
        path: '/img',
        name: 'img',
        component: () =>
            import ("../views/Img.vue")
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