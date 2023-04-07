import { createRouter, createWebHistory } from 'vue-router'
import Transaction from '../views/Transaction.vue';
import Food from '../views/Food.vue'
import AddMenu from '../views/AddMenu.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'transaction',
        component: Transaction
      },
      {
        path: '/food',
        name: 'food',
        component: Food
      },
      {
        path: '/food/addmenu',
        name: 'addmenu',
        component: AddMenu
      }
    ]
  })

  export default router