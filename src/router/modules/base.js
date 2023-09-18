export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/gameLobby',
    name: 'gameLobby',
    component: () => import('@/views/gameLobby.vue'),
  },
  {
    path: '/galleryHome',
    name: 'galleryHome',
    component: () => import('@/views/galleryHome.vue'),
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/chat.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile/deposit',
    name: 'deposit',
    component: () => import('@/views/profile/deposit.vue'),
  },
  {
    path: '/profile/vip',
    name: 'vip',
    component: () => import('@/views/profile/vip.vue'),
  },
];
