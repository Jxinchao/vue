<template>
	<div>
		<h1>可排序的表格组件</h1>
		搜索：<input type="text" v-model="searchData"/> <button>搜索</button>
		<ul>
			<li v-for="n in list">
				<span @click="rank('price', false)">从大到小排序</span>
				<span @click="rank('price',true)">从小到大排序</span>
				<span>{{n.id}}</span>
				<span>{{n.name}}</span>
				<span>{{n.sales}}</span>
				<span>{{n.price}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"sort",
		data(){
			return {
				searchData:'', // 默认输入空的数据
				items: [
				    //假数据
                        {name:"三星Galaxy Note8",price:5200,sales:2.6},
                        {name:"iphone5s",price:2500,sales:2.2},
                        {name:"iphone6",price:2800,sales:1.6},
                        {name:"iphone6s",price:3200,sales:2.9},
                        {name:"iphone7",price:3800,sales:12.6},
                        {name:"iphone7plus",price:4200,sales:2.1},
                        {name:"iphone8",price:5500,sales:10.6},
                        {name:"华为",price:4600,sales:7.6},
                        {name:"小米",price:1200,sales:32.6},
                        {name:"OPPOR11",price:3000,sales:1.2},
                        {name:"vivoX20",price:3250,sales:2.9}
				],
				letter:'',  // 默认不排序
				blea:false
			}
		},
		methods:{
			rank(letter,blea){
				this.letter = letter;
				this.blea = blea;
			}
		},
		// 通过计算属性过滤数据
		computed:{
			list:function(){
				var _this = this;
				var arrBy = [];
				for(var i =0;i<this.items.length;i++){
					if(this.items[i].name.search(this.searchData) != -1){
						arrBy.push(this.items[i])
					}
				}

				if(this.letter !=  ''){
					arrBy.sort(function(a,b){
						if(_this.blea){
							return b[_this.letter] - a[_this.letter]
						}else{
							return a[_this.letter] - b[_this.letter]
						}
					})
				}
				return arrBy;
			}
		}
	}
</script>

<style>
	span{
		margin-left: 30px;
	}
</style>