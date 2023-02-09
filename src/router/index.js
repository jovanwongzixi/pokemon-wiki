import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from '../views/PokemonView.vue'

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
      component: () => import('../views/PokemonView.vue'),
      beforeEnter: (to, from, next) => {
        if(!from.path){
          next({
            path: '/pokemon', 
            name: 'pokemon',
            component: PokemonView
          })
        }
        else{
          next()
        }
      }
    }
  ]
})

export default router
