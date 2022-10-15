import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from "@/views/CatalogView";
import CatalogItems from "@/views/CatalogItems";
import ItemView from "@/views/ItemView"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView,
  },
  {
    path: '/catalog/:shoestype',
    name: 'catalogtype',
    component: CatalogItems,
  },
  {
    path: '/catalog/:shoestype/:item',
    name: 'ItemView',
    component: ItemView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
