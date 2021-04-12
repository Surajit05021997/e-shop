import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import About from '../views/About.vue';
import GameDetails from '../components/GameDetails.vue';
import Cart from '../components/Cart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/gamedeatails/:selectedGame',
    name: 'GameDetails',
    component: GameDetails,
  },
  {
    path: '/cart',
    name: 'Crat',
    component: Cart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
