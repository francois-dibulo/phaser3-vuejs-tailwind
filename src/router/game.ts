import { createRouter, createWebHistory } from 'vue-router'
import GameStandaloneView from '@/views/Game/GameStandaloneView.vue'

const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameStandaloneView,
    },
  ],
})

export default router
