<template>
	<div>
		navbar
		{{msg}}
		<router-link to='/' custom>Home</router-link>
		<router-link to='/foo' custom>foo</router-link>
		<router-link to='/bar'>bar</router-link>
	</div>
</template>

<script>
	
	export default {
		name:'NavBar',
		props:['msg'],
		data(){
		    return{
				
			}	
		},
		methods:{
			
		},
		computed:{
			
		},
		watch:{
			
		}
	}
</script>

<style scoped>
	
</style>