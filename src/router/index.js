import { createRouter, createWebHistory } from 'vue-router';
import NewTodo from '@/views/NewTodo.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/newtodo',
    name: 'NewTodo',
    component: NewTodo,
  },
  {
    path: '/:notFound(.*)',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
