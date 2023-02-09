import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/pokemon' && !from.path) {
    next({
      path: '/pokemon',
      component: () => import('../views/PokemonView.vue')
    })
  } else {
    next()
  }
})

export default router
