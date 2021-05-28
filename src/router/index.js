import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import AddTodo from '../views/AddTodo.vue';

const routes = [
  { path: '/', component: MainPage, name: 'main-page' },
  { path: '/addtodo', component: AddTodo, name: 'add-todo' },
  { path: '/:invalid(.*)*', redirect: { name: 'main-page' } },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
