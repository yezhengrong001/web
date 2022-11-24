<!-- 
vue2 总结
	1.配置data 用方法 形如 data（）{ return { dataitem }}
	2.配置methods不能用箭头函数
	3.配置computed 配置形式 comitem:{ get(){}(默认项), set(){}} 不能作为方法使用
 -->

<template>
  <div>
	  <div>插值语法count of value：{{count}}</div>
	  <div>定时器计算count:{{setCount}}</div>
	  <button v-on:click="changecount()">改变count</button>
	  <hr>
	  <div>天气{{info}}</div>
	  <button v-on:click="changeisHot()">改变天气</button>
	  <hr>
	  <!-- 此处可用v-for替换 -->
	  <div v-if='isHot'>天气很{{info}}</div>
	  <ul class="con">
		  <li class='item' v-for='(item,index) in arr'>{{item.a}}</li>
	  </ul>
	  <!-- <NavBar ></NavBar> -->
	  <slot></slot>
	  <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  name: 'HelloWorld',
  components:{
	  NavBar,
  },
  
  data(){
	return {
		count:0,
		isHot:true,
		arr:[
			{
				a:1,
			},
			{
				a:1,
			},
			{
				a:1,
			},
		],
		numbers:{
			a:1
		}
	}
  },
  watch:{
	isHot:{
		immediate:true,
		handler(oldvalue,newvalue){
			console.log(oldvalue,newvalue);
		}
	},
	// 简写方式
	// isHot(oldValue,newValue){
		//
	// },
	nubmber:{
		immediate:true,
		deep:true,//深度监视
		handler(oldvalue,newvalue){
			console.log(oldvalue,newvalue);
		}
	}
  },
  computed:{
	setCount: {
		//get调用 数据读取 所依赖数据发生变化
		get(){
			return this.count
		},
		set(value){
			this.count=value;
			console.log('set',value)
		}
	},
	info:function(){
	 return this.isHot ? '热':'冷'	
	},
  },
  methods:{
	changecount: function () {
		this.setCount=this.setCount+1
	    this.count=this.count+1
	},
	changeisHot:function(){
		this.isHot = !this.isHot
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con{
	background-color: aqua;
	list-style: none;
}
.item{
		color: red;
	}
</style>
