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
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import('@/components/pages/home-sections/MessageSection')
      },
      {
        path: 'lessons',
        name: 'lessons',
        component: () => import('@/components/pages/home-sections/LessonSection')
      },
      {
        path: 'rewards',
        name: 'rewards',
        component: () => import('@/components/pages/home-sections/RewardSection')
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


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  NProgress.configure({ easing: 'ease', speed: 2000, showSpinner: false })
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
  window.scrollTo(0, 0)
})

export default router
