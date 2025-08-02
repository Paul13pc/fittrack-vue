// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },    
  {
    path: '/signup',
    name: '/signup',
    component: Signup,
  },
  // puedes agregar más rutas aquí, como dashboard, registro, etc.
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
