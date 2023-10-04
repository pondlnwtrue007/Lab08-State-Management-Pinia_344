import { createRouter, createWebHistory } from 'vue-router'
import MainProductView from '../views/MainProductView.vue'
import CartView from '../views/CartView.vue'
import HistoryOrderView from '../views/HistoryOrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/historyorder',
      name: 'historyorder',
      component: HistoryOrderView
    }
  ]
})

export default router
