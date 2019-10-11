import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/app.css';
import api from './core/net/api';
import VueCookies from 'vue-cookies';
import echarts from 'echarts'
Vue.use(ElementUI)
Vue.config.productionTip = false;
// 全局变量定义
Vue.prototype.$cookies = VueCookies;
Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
Vue.prototype.$echarts = echarts 

// 授权
router.beforeEach((to, from, next) => {
    // 配置标题
    document.title = to.meta.title ? to.meta.title : 'support';
    next();
});


new Vue({
    router,
    // store: stores,
    render: h => h(App),
}).$mount('#app');