<template>
	<div>
		<h1>轮播图</h1>
		<div class="side" @mouseover="clearMove" @mouseout="outMove">
			<ul>
			<!-- v-for列表渲染两个部分，值得注意的是列表渲染最好要提供一个key值，至于为什么官方文档说得很复杂，

就我所知的是如果不加key值在使用transition-group也就是过渡效果的时候会出现bug，官方给出的建议也是尽可能

在列表渲染的时候加上key值，百利无一害，养成习惯就好。


	这里因为我们是给一个渲染列表加上过渡效果所以要使用transition-group而不是单元素的transition，否则会报错。

另外就是记得给transition-group加上tag="ul"属性，不然就会被默认渲染成span了。

css部分需要关联name属性值作为前缀。
	

 -->
				<transition-group tag="ul" name="image"> 
					<li v-for="(imgSrcs,index) in imgSrc" :key="index" v-show="index === num">{{index}}---{{imgSrcs}}</li>
				</transition-group>
			</ul>
			<div class="sidenav">
				<template v-for="(imgSrcss,index) in imgSrc" >
					<span :key="index" :class="{'active':index===num}" @click="change(index)">{{index}}</span>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"banner",
		data(){
			return {
				imgSrc:[
					"banner1",
					"banner2",
					"banner3",
					"banner4",
					"banner5",
				],
				num:0,
				timer: null
			}
		},
		methods:{
			autoPlay(){
				this.num++;
				if(this.num == this.imgSrc.length){
					this.num = 0;
				}
			},
			play(){
				this.timer = setInterval(this.autoPlay,1500)
			},
			clearMove(){
				clearInterval(this.timer)
			},
			outMove(){
				this.timer = setInterval(this.autoPlay,1500)
			},
			change(index){  // 小按钮
				this.num = index;
			}
		},
		created () {  
		   this.play()  
		}  
	}
</script>

<style>
*{
	margin: 0; 
	padding: 0;
}
	li{
		position: absolute;
		width: 200px;
		height: 200px;
		background: #fff;
		border: 10px solid red;
	}
	span{
		width: 20px;
		height: 20px;
	}
	span.active{
		color: red;
	}
	div.sidenav{
		position: absolute;
		bottom: 120px;
		width: 100%;
	}
	div.side{
		position: relative;
		width: 220px; 
		height: 300px;
		overflow: hidden;
	}
	.image-enter-active {  
	    transform: translateX(0);  
	    transition: all 1.5s ease;  
	  }  
	  .image-leave-active {  
	    transform: translateX(-200%);  
	    transition: all 1.5s ease;  
	  }  
	  .image-enter {  
	    transform: translateX(200%);  
	  }  
	  .image-leave {  
	    transform: translateX(0);  
	  }  
</style>