import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Home from './components/Home.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/', component: Home }
]

export const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})