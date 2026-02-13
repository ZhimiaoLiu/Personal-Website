import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import BlogView from '../view/BlogView.vue'
import AboutView from '../view/AboutView.vue' // 1. 引入新页面

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/blog', name: 'blog', component: BlogView },
        { path: '/about', name: 'about', component: AboutView } // 2. 添加路由规则
    ],
    // 3. (可选) 添加这个功能：每次切换页面都自动回到顶部
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router