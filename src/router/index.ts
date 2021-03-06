import Vue from 'vue'

import VueRouter, { RouteConfig } from 'vue-router'

import NewHome from '@/views/Home.vue'
import About from '@/views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: NewHome
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

export default new VueRouter({ routes })
