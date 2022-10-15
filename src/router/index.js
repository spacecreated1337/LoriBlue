import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import CatalogView from "@/views/CatalogView";
import CatalogItems from "@/views/CatalogItems";
import ItemView from "@/views/ItemView"
const routes = [{
    path: '/',
    name: 'CatalogView',
    component: CatalogView,
  },
  {
    path: '/:shoestype',
    name: 'CatalogItems',
    component: CatalogItems,
  },
  {
    path: '/:shoestype/:item',
    name: 'ItemView',
    component: ItemView,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router