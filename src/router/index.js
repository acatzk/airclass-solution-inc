import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '@/services'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import('@/views/Welcome')
  },
  {
    path: '/v',
    name: 'home',
    component: () => import('@/views/Home'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/components/pages/home-sections/DashboardSection')
      },
      {
        path: 'my-classes',
        name: 'my-classes',
        component: () => import('@/components/pages/home-sections/MyClassesSection')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/')
  } else if (!requiresAuth && currentUser) {
    next('/v/dashboard')
  } else {
    next()
  }
})

export default router
