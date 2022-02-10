import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'client-base',
    component: () => import('@/views/client/layouts/BaseLayout.vue'),
    redirect: { name: 'client-main' },
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
      {
        path: 'meeting/:id',
        name: 'client-meeting',
        component: () => import('@/views/client/meeting/MeetingPage.vue'),
      },
    ]
  },
  {
    path: '/auth/admin',
    name: 'admin-auth',
    component: () => import('@/views/admin/auth/AuthPage.vue'),
  },
  {
    path: '/auth/',
    name: 'client-auth',
    component: () => import('@/views/client/auth/AuthPage.vue'),
  },
  {
    path: '/admin',
    name: 'admin-base',
    component: () => import('@/views/admin/layouts/BaseLayout.vue'),
    redirect: { name: 'admin-auth' },
    children: [
      {
        path: 'admin-users',
        name: 'admin-users',
        component: () => import('@/views/admin/users/UsersPage.vue'),
      },
      
      {
        path: 'admin-groups',
        name: 'admin-groups',
        component: () => import('@/views/admin/groups/GroupsPage.vue'),
      },
      {
        path: 'admin-meetings',
        name: 'admin-meetings',
        component: () => import('@/views/admin/meetings/MeetingsPage.vue'),
      },
      {
        path: 'admin-meetings/:id',
        name: 'admin-meetings-info',
        component: () => import('@/views/admin/meetings/meeting-info/MeetingInfoPage.vue'),
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
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
