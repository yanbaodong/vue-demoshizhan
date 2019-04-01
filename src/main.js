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

//在 mani.js 文件中引入 font-awesome
import 'font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
