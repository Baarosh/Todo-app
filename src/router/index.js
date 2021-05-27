import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';

const routes = [
  { path: '/', component: MainPage, name: 'MainPage' },
  { path: '/:invalid(.*)*', redirect: { name: 'MainPage' } }
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
