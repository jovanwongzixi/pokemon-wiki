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
      path: '/pokemon/:id',
      props: route => ({id: route.params.id}),
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue'),
      // beforeEnter: (to, from, next) => {
      //   if(!from.path){
      //     Promise.resolve(import('../views/PokemonView.vue'))
      //     .then((component) => {
      //       next({
      //       path: '/pokemon', 
      //       name: 'pokemon',
      //       component: PokemonView
      //     })
      //     })
      //     .catch(error =>{
      //       console.error(error)
      //     })
      //   }
      //   else{
      //     next()
      //   }
      // }
    }
  ]
})

export default router
