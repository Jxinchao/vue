<template>
	<div v-clickoutside="handle">
		<header>
			<div class="selected">
				<div @click="showa">下拉展示数据</div>
				<div v-show="show" class="dataselect">
					<span @click="adds()">A</span>
					<span @click="removes()">B</span>
				</div>
			</div>
			<div class="right">
				<b :class="{ actives: activeA.home }" @click="menuClicked('home')">首页</b>
				<b :class="{ actives: activeA.setting }" @click="menuClicked('setting')">设置</b>
				<b :class="{ actives: activeA.yonghu }" @click="menuClicked('yonghu')">用户</b>
			</div>
		</header>
	</div>
</template>

<script >
	import directive from '@/router/directive'
	var abc = sessionStorage.getItem('name');
	export default{
		data(){
			return {
				show : false,
				activeA:{
					home:'',
					setting:'',
					yonghu:''
				}
			}
		},
		computed:{
			activeName(){
			  return this.$store.state.actives;
			}
		},
		methods:{
			adds(){
		      this.$store.commit('add')
		    },
		    removes(){
		      this.$store.commit('remove')
		    },
		    showa(){
		    	this.show = !this.show;
		    },
		    menuClicked(path) {
		      this.activeA[abc] = false;
			  this.activeA[this.activeName] = false;
			  this.$store.commit("menu", path);
			  this.activeA[this.activeName] = true;
			  sessionStorage.removeItem('name', this.activeName)
			  sessionStorage.setItem('name', this.activeName)
			  this.$router.push(`/${path}`);
			},
			vueinit () {
			  if(abc){
			  	this.activeA[abc] = false;
			  	this.activeA[abc] = true;
			  }else{
			  	this.activeA[this.activeName] = false;
			  	this.activeA[this.activeName] = true;
			  }
			},
			handle:function(){
				this.show = false;
			}
		},
		mounted(){
			this.vueinit();
		},
		watch:{

		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding:0;
}
a{
	text-decoration: none;
}
header{
	width: 100%;
	height: 60px;
	border:1px solid red;
	padding: 20px;
	box-sizing: border-box;
}
header div{
	float: left;
}
header div:nth-child(2){
	float: right;
}
.selected{
	position: relative;
}
div.right b{
	cursor: pointer;
	display: inline-block;
	width: 40px;
}
div.right b.actives{
	color: red;
}
.selected span{
	display: block;
    width: 98px;
    height: 30px;
    border: 1px solid pink;
    line-height: 30px;
    background: #fff;
    text-align: center;
    cursor: pointer;
}
.dataselect{
	position:absolute;
	top: 30px;
}
</style>
