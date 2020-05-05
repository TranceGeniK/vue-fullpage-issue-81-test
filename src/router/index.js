import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/fullpage',
    name: 'Fullpage',
    component: () => import(/* webpackChunkName: "fullpage" */ '../views/Fullpage.vue'),
  },
  {
    path: '/fullpage2',
    name: 'Fullpage2',
    component: () => import(/* webpackChunkName: "fullpage" */ '../views/Fullpage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
