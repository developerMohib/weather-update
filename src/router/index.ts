import Weather from '@/pages/weather/weather.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [{ path: '/weather', name: 'Weather Update', component: Weather }]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
