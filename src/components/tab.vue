<template>
	<div>
		<h1>选项卡</h1>
		<ul>
			<template v-for="(lists,index) in list">
				<li @click="show(index)" :class="{active:lists.isActive}">{{lists.title}}</li>
			</template>
		</ul>
		<br style="clear:both;">
		<div class="con">
			<div class="dis" style="display:block;">我是标签一得内容</div>
			<div class="dis">我是标签二得内容</div>
			<div class="dis">我是标签san得内容</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tab",
		data(){
			return {
					list:[
							{
								title:"标签一",
								isActive:true
							},
							{
								title:"标签二",
								isActive:false
							},
							{
								title:"标签三",
								isActive:false
							}
						]
					}
			},
			methods:{
				show:function(index){
					var dis = document.querySelectorAll('.dis');
					for(var i=0;i<dis.length;i++){
						dis[i].style.display = 'none';
						this.list[i].isActive = false;
					}
					dis[index].style.display = 'block';
					this.list[index].isActive = true;
				}
			}
	}
</script>

<style scoped>
	li{
		float: left;
		margin-left: 30px;
		border:1px solid #000;
		cursor: pointer;
	}
	li.active{
		color: red;
	}
	.con{
		text-align: left;
	}
	.dis{
		display: none;
	}
</style>
