import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Faq from '../views/Faq.vue'
import Log from '../views/Log.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/log',
        name: 'Log',
        component: Log
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router