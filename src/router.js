import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'index',
    },
  },
  {
    name: 'index',//首页
    path: '/index',
    component: () => import('./view'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'qrcode',//扫码
    path: '/qrcode',
    component: () => import('./view/qrcode'),
    meta: {
      title: '扫码',
    },
  },
  {
    name: 'syxProductionConfig',//丝印线生产配置
    path: '/syxProductionConfig',
    component: () => import('./view/syxProductionConfig/index'),
    meta: {
      title: '丝印线生产配置',
    },
  },
  {
    name: 'detail',//丝印线生产配置
    path: '/detail',
    component: () => import('./view/syxProductionConfig/detail'),
    meta: {
      title: '丝印线生产配置',
    },
  },
  //以下是官方案例文件
  {
    name: 'user',
    path: '/user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
