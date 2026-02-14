import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import BlogView from '../view/BlogView.vue'
import AboutView from '../view/AboutView.vue'
import BlogPost from '../view/BlogPost.vue' // 1. 引入新组件

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/blog', name: 'blog', component: BlogView },
        // 2. 添加动态路由 (:id 是变量)
        { path: '/blog/:id', name: 'post', component: BlogPost },
        { path: '/about', name: 'about', component: AboutView }
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router