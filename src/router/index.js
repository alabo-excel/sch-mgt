import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard.vue'
import result from '../views/result.vue'
import card from '../views/card'
import admission from '../views/admission'
import certificate from '../views/certificate'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },

    {
        path: '/result',
        name: 'result',
        component: result
    },

    {
        path: '/card',
        name: 'card',
        component: card
    },

    {
        path: '/admission',
        name: 'admission',
        component: admission
    },

    {
        path: '/certificate',
        name: 'certificate',
        component: certificate
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router