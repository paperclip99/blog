import { createRouter, createWebHistory } from 'vue-router'
import BlogHome from '@/components/BlogHome.vue'
import BlogLogin from '@/components/BlogLogin.vue'
import BlogRegistration from '@/components/BlogRegistration.vue'
import BlogCreate from '@/components/BlogCreate.vue'

const routes = [
  {
    path: '/',
    name: 'posts',
    component: BlogHome
  },
  {
    path: '/create',
    name: 'create',
    component: BlogCreate
  },
  {
    path: '/register',
    name: 'register',
    component: BlogRegistration
  },
  {
    path: '/login',
    name: 'login',
    component: BlogLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
