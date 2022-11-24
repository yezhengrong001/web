import { createApp } from 'vue'
import { SwipeCell, Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';

import TDesign from 'tdesign-mobile-vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import axios from 'axios'
import App from './App.vue'
// 导入文件
import Home from './pages/Home/index.vue'
import Cate from './pages/Cate/index.vue'
import Cart from './pages/Cart/index.vue'
import My from './pages/My/index.vue'
 
//  2. 定义一些路由
//  每个路由都需要映射到一个组件。
//  我们后面再讨论嵌套路由。
 const routes = [
   { path: '/', component: Home },
   { path: '/cate', component: Cate },
   { path: '/cart', component: Cart },
   { path: '/my', component: My },
 ]
 
 // 3. 创建路由实例并传递 `routes` 配置
 // 你可以在这里输入更多的配置，但我们在这里
 // 暂时保持简单
 const router = createRouter({
   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
   history: createWebHashHistory(),
   routes, // `routes: routes` 的缩写
 })

//  axios.defaults.baseURL='https://api-hmugo-web.itheima.net';
// //  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//  axios.interceptors.request.use(()=>{
//   console.log("数据加载中.....");
//  },(err)=>{
//   return Promise.reject(err)
//  })
//  axios.interceptors.response.use(()=>{
//   console.log("数据加载完成");
//  },(err)=>{
//   return Promise.reject(err)
//  })
const app=createApp(App)
app.mount('#app')
app.use(TDesign);
app.use(router);
// app.use(axios)