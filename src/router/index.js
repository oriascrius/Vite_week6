import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/IndexView.vue'),
      },
      {
        path: '/products',
        name: '商品列表',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: '商品頁面',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'Login' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/ErrorView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/CouponsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
