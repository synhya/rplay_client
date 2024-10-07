import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Live from '@/pages/Live.vue'
import Play from '@/pages/Play.vue'
import Search from '@/pages/Search.vue'
import CreatorHome from '@/pages/CreatorHome.vue'
import MyInfo from './pages/MyInfo.vue'
import Chat from './pages/Chat.vue'
import Studio from './pages/Studio.vue'
import Uploader from './pages/Uploader.vue'
import CreatorsAll from './pages/CreatorsAll.vue'
import Category from './pages/Category.vue'
import ChatBox from './pages/ChatBox.vue'
import NavigationLayout from '@/components/layout/NavigationLayout.vue'
import store from './store'
import Info from './pages/Info.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: NavigationLayout,
      children: [
        { path: '', name: 'home', component: Home },
        { path: 'p/:category', name: 'category', component: Category, props: true }
      ]
    },
    // 크리에이터 페이지 // search Param으로 탭이동.
    { path: '/creator/:id', name: 'creator', component: CreatorHome, props: true },
    // 전체 크리에이터 페이지
    { path: '/creators-all/:id', name: 'creators-all', component: CreatorsAll, props: true },
    // 비디오 플레이 페이지
    { path: '/play/:id', name: 'play', component: Play, props: true },
    // 라이브 페이지
    // https://rplay.live/live/chat/box/65a3a7104edcc2e8fc48e241?fs=17&b=rgba%280,0,0,0.45%29&c=rgba%28255,255,255,1%29
    { path: '/live', children: [
      { path: ':id', name: 'live', component: Live, props: true },
      { path: 'chat/box/:id', name: 'chat-box', component: ChatBox, props: true }
    ] },
    // 검색페이지
    { path: '/search/:keyword', name: 'search', component: Search, props: true },
    // 마이페이지
    { path: '/myinfo', name: 'myinfo', component: MyInfo, meta: { requiresAuth: true } },
    // 채팅 (메세지)
    { path: '/chat', name: 'chat', component: Chat, meta: { requiresAuth: true } },
    // 업로드 페이지
    {
      path: '/studio',
      meta: { requiresAuth: true },
      children: [
        { path: '', name: 'studio', component: Studio },
        { path: 'uploader/:type', name: 'uploader', component: Uploader, props: true }
      ]
    },

    // 인포 , 약관 https://rplay.live/info/oppolicy1
    { path: '/info/:type', name: 'info', component: Info, props: true },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isAuthenticated = store.getters.isAuthenticated

  if (requiresAuth && !isAuthenticated) {
    store.commit('setShowLoginModal', true)
    next(false)
  } else {
    next()
  }
})

export default router
