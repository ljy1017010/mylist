import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListHistory from './views/ListHistory.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/history',
      name: 'about',
      component: ListHistory,
    },
  ],
});
