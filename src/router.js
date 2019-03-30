//导入vue
import Vue from 'vue'
//导入路由
import VueRouter from 'vue-router';
//use 一下
Vue.use(VueRouter);
//写入组件
//1.0导入登录的组件
import login from './components/login/login.vue';
//导入首页的组件
import index from './components/index/index.vue';

//写路由规则
let routes=[
    {
        path:'/login',
        component:login
    },
    {
        path:'/',
        component:index
    }
]

//实例化一个路由实例
let router=new VueRouter({
    routes
})

//暴露出去
export default router