import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '../pages/HomeScreen.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeScreen
    },
    {
        path:"/notifications",
        name:"Notifications",
        component: () => import(/* webpackChunkName: "about" */ '../pages/NotificationScreen.vue')
    },
    {
        path:"/messages",
        name:"Messages",
        component: () => import(/* webpackChunkName: "about" */ '../pages/MessageScreen.vue')
    },
    {
        path:"/find",
        name:"Search",
        component: () => import(/* webpackChunkName: "about" */ '../pages/SearchScreen.vue')
    },
    {
        path:"/chats/:id",
        name:"Chats",
        component: () => import(/* webpackChunkName: "about" */ '../pages/ChatScreen.vue')
    },
    {
        path:"/reply",
        name:"Reply",
        component: () => import(/* webpackChunkName: "about" */ '../pages/ReplyScreen.vue')
    },
    {
        path:"/register",
        name:"Register",
        component: () => import(/* webpackChunkName: "about" */ '../pages/RegisterScreen.vue')
    },
    {
        path:"/profile",
        name:"Profile",
        component: () => import(/* webpackChunkName: "about" */ '../pages/ProfileScreen.vue')
    }
]

const router = new VueRouter({
    // scrollBehavior: () => ({ x: 0, y: 0 }),
    routes
})

export default router
