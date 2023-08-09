import { createRouter, createWebHistory } from 'vue-router'
import Pagina1 from '../views/Pagina1.vue' // porque es la pagina por defecto

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Pagina1
    },
    {
      path: '/pagina2',
      name: 'pagina2',
      component: () => import('../views/Pagina2.vue') // porque se carga solo a requerimiento.
    },
    {
      path: '/pagina3',
      name: 'pagina3',
      component: () => import('../views/Pagina3.vue')
    }    
  ]
})

export default router
