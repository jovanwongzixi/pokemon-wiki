import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

router.beforeEach((to, from, next) => {
    if (to.path === '/pokemon' && !from.path) {
      next({
        path: '/pokemon',
        name: 'pokemon',
        component: PokemonView//() => import('../views/PokemonView.vue')
      })
    } else {
      next()
    }
  })

app.mount('#app')
