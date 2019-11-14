import Vue from 'vue';
import Router from 'vue-router';
import menus from '@/config/menu_config'
Vue.use(Router);
var route ={
    mode: 'hash',
    //base: '/dist/index.html',
    routes: [{
        path: '',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
        iconCls: 'el-icon-platform-eleme',
    }], 
};
// title:标题
// isKeepAlive: 记住路由返回上一页不会刷新数据
// requireAuth: 路由是否需要登录权限
menus.forEach((item) => {
    item.sub.forEach((sub) => {
        route.routes.push({
          path: `/${sub.componentName}`,
          name: sub.componentName,
          component: () => import(`@/views/${sub.componentName}`),
          meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: sub.isKeepAlive,
        },
        })
    })
  })
  console.log(route)
export default new Router(route);

// , {
//     path: '/page1',
//     name: 'page1',
//     component: () => import('../views/page1.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page2',
//     name: 'page2',
//     component: () => import('../views/page2.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page3',
//     name: 'page3',
//     component: () => import('../views/page3.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page4',
//     name: 'page4',
//     component: () => import('../views/page4.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/empty',
//     name: 'empty',
//     component: () => import('../views/empty.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/product',
//     name: 'product',
//     component: () => import('../views/product.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/detail',
//     name: 'detail',
//     component: () => import('../views/product_detail.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/login.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/sign',
//     name: 'sign',
//     component: () => import('../views/signup.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '**',
//     name: '404',
//     component: () => import('../views/home.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }