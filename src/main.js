import Vue from 'vue'
import App from './App.vue'

//导入 饿了么框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入 总路由
import router from './router.js'
//导入公共样式
import './assets/base.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
