import { createRouter, createWebHistory } from 'vue-router';
import { baseStore } from 'store';

import baseRouters from './modules/base';

const routes = [...baseRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior () {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

// 导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      baseStore().actions_showLogin(true)
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
