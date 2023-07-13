import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: () => import('../views/Editor.vue')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../views/PreView.vue')
    }
  ]
});

export default router;
