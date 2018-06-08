<template>
	<div v-clickoutside="handle">
		<h1>点击本身不会关闭，点击其他地方关闭</h1>
		 <b @click="show = !show">点击下拉</b>
		 <br>
		 <div v-show="show">
		 		我是下拉得内容
		 </div>
	</div>
</template>

<script>
import directive from '@/router/directive'
export default{
	name:"documentHide",
	data(){
		return {
			show:false
		}
	},
	methods:{
		handle:function(){
			this.show = false;
		}
	}
}
</script>

<style>

</style>
