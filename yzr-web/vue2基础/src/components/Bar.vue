<template>
	<div>
		bar
		<div>msg:{{ msg }}</div>
		<button @click="showProps">点击见msg</button>
	
		<transition enter-class="te" enter-active-class="ea" leave-active-class="el" leave-to-class="tl">
			<div class="show" v-show="show">动画与过度展示</div>
		</transition>
		<button @click="isShow">toggle</button>
	</div>
</template>

<script>
	import PubSub from 'pubsub-js'
	export default{
		name:'Bar',
		props:{msg1:String,},
		data(){
			return{
				msg:'',
				show:true,
			}
		},
		methods:{
			showProps:function(){
				console.log('点击了')
				this.msg='男男女女';
				
			},
			isShow:function(){
				this.show=!this.show;
			}
		},
		beforeCreate(){
			console.log("beforecreate");
		},
		created(){
			console.log("created");
		},
		beforeMount(){
			console.log("beforemount");
		},
		mounted(){
			console.log("mounted");
			// 订阅挂载
			PubSub.subscribe('setCount',(msg1,data)=>{
			            console.log('msg',msg1,'data',data)
			            this.msg=data;
			        })
		},
		beforeUpdate(){
			console.log("beforeupdate");
		},
		updated(){
			console.log('Updated');
		},
		beforeUnmount(){
			console.log('beforeUnmount');
		},
		unmounted(){
				console.log('unmounted');
		},
	}
</script>

<style scoped>
	.te,.tl{
		transform: translateX(-100%);
	}
	.ea,.el{
		transition:transform 3s;
	}
	.show{
		background-color: antiquewhite;
		height: 40px;
		line-height: 40px;
	}
</style>