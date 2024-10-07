import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Live from '@/pages/Live.vue'
import NavigationLayout from './components/layout/NavigationLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NavigationLayout,
      children: [
        { path: '', name: 'home', component: Home },
        { path: 'p/:category', name: 'category', component: Live, props: true }
      ]
    },
    {

    }
  ]
})

export default router
