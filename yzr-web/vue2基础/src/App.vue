<template>
  <div id="app">
	<router-view>
		<!-- 在路由中不可使用props -->
		<Bar />
		<Foo />
		<Home />
	</router-view>
    <HelloWorld msg="Welcome to Your Vue.js App">
		<NavBar msg="你好,我来自APP"/>
		<button @click="changemsg">点检改变bar 的msg</button>
	</HelloWorld> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Home from './components/Home.vue'
import PubSub from 'pubsub-js'
export default {
  name: 'app',
  components: {
    HelloWorld,
	NavBar,
	Bar,
	Foo,
	Home
  },
  methods:{
	changemsg:function(){
		// 发布手动
		PubSub.publish('setCount','你好，我是发布消息的人');
	}
  },
  mounted(){
	  
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
