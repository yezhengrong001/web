<template>
  <div id="app">
	<Home></Home>
    <Cate></Cate>
	<Cart></Cart>
	<My></My>
  </div>
</template>

<script>
import Home from 'pages/Home/index.vue';
import Cate from 'pages/Cate/index.vue';
import Cart from 'pages/Cart/index.vue';
import My from 'pages/My/index.vue';

export default {
  name: 'app',
  components: {
    Home,
	Cate,
	Cart,
	My,
  }
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
