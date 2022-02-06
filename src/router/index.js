import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'client-base',
    component: () => import('@/views/client/layouts/BaseLayout.vue'),
    redirect: {name: 'client-main'},
    children: [
      {
        path: 'main',
        name: 'client-main',
        component: () => import('@/views/client/main/MainPage.vue'),
      },
      {
        path: 'settings',
        name: 'client-settings',
        component: () => import('@/views/client/settings/SettingsPage.vue'),
      },
    ]
  },
  {
    path: '/vuex-test',
    name: 'vuex-test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/test/ExampleOnVuex.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
