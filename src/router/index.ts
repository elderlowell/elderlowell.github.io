import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/AboutPage.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/pages/ProjectsPage.vue')
    },
    {
      path: '/projects/test',
      name: 'Test',
      component: () => import('@/pages/TestPage.vue')
    },
    {
      path: '/widgets',
      name: 'Widgets',
      component: () => import('@/pages/WidgetsPage.vue')
    },
    {
      path: '/widgets/analog-timer',
      name: 'Analog Timer',
      component: () => import('@/pages/AnalogTimerPage.vue')
    },
    {
      path: '/widgets/digital-timer',
      name: 'Digital Timer',
      component: () => import('@/pages/DigitalTimerPage.vue')
    }
  ]
})

export default router
