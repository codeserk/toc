import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'

// Views
import SectionsView from '@/views/SectionsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: SectionsView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
