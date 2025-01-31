import App from '@/App.vue';
import MainLayout from '@/pages/layout/MainLayout.vue';
import Weather from '@/pages/weather/weather.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: "/",
    component: MainLayout, // Parent layout
    children: [
      { path: "", name: "Home", component: App },
      { path: '/weather', name: 'WeatherUpdate', component: Weather },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
