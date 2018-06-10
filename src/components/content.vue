<template>
	<div class="text">
		<p>这里是vueX状态的值 {{ count }}</p>
	</div>
</template>

<script>
	export default{
		name: 'home',
		computed:{
		    count(){
		      return this.$store.state.count
			}
		}
	}
</script>

<style>
	.text{
		margin: 100px;
	}
</style>