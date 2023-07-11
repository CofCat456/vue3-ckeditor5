import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Ckeditor',
      component: () => import('../components/Ckeditor.vue')
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../components/PreView.vue')
    }
  ]
});

export default router;
