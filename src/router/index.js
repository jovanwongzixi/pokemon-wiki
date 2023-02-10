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
          Promise.resolve(import('../views/PokemonView.vue'))
          .then((component) => {
            next({
            path: '/pokemon', 
            name: 'pokemon',
            component: component,
          })
          })
          .catch(error =>{
            console.error(error)
          })
        }
        else{
          next()
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      beforeEnter: (to, from, next) => {
        next('/')
      }
    }
  ]
})

export default router
