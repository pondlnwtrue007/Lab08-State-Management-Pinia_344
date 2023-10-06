import { createRouter, createWebHistory } from 'vue-router'
import MainProductView from '../views/MainProductView.vue'
import CartView from '../views/CartView.vue'
import HistoryOrderView from '../views/HistoryOrderView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainProductView
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailView,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/historyorder',
      name: 'historyOrder',
      component: HistoryOrderView
    }
  ]
})

export default router
