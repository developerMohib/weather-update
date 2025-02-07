
import Home from '@/pages/home/Home.vue';
import NotFound from '@/pages/NotFound/NotFound.vue';
import Weather from '@/pages/weather/weather.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/weather', component: Weather },
  // Catch-all route for 404 pages
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
