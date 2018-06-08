<template>
	<div>
		<h1>购物车</h1>
		<ul>
			<template v-for="(lists,index) in list">
				<li>
					<input type="checkbox" name="" v-model="checked" :value="index" />
					{{index+1}}----{{lists.name}}-----{{lists.price}}-------
					<button @click="minus(index)" :disabled="lists.quantity ==0">-</button>
					{{lists.quantity}}
					<button @click="add(index)">+</button>
					<button @click="listRemove(index)">删除此商品</button>
				</li>
			</template>
		</ul>
		<p>选择得元素{{ checked }}</p>
		<div>全选：
			<input type="checkbox" :checked="isChecked" @click="selectAll()">
		</div>
		<p>商品总价：{{ totalPrice }}</p>
	</div>
</template>

<script>
	export default{
		name:"shoping",
		data(){
			return {
				checked:[],
				isChecked:false,
				list:[
					{ name : "衣服" ,
						price : 120,
						quantity: 1
					},
					{ name : "电脑" ,
						price : 2000,
						quantity: 1
					},
					{ name : "手机" ,
						price : 1200,
						quantity: 1
					},
					{ name : "水果" ,
						price : 20,
						quantity: 1
					},
				]
			}
		},
		computed:{
			totalPrice:function(){
				var total = 0;
				if(this.checked.length == 0){
					return 0;
				}else{
					for(var i = 0; i < this.checked.length;i++){
						total += this.list[this.checked[i]].price * this.list[this.checked[i]].quantity;
					}
				}
				return total;
			}
		},
		methods:{
			add:function(index){
				this.list[index].quantity ++;
			},
			minus:function(index){
				if(this.list[index].quantity == 0){
					return false;
				}else{
					this.list[index].quantity --;
				}
			},
			listRemove:function(index){
				this.list.splice(index,1)
			},
			selectAll:function(){
				console.log("事件进去"+this.isChecked)
				if(this.isChecked){
					console.log("判断一"+this.checked)
					this.isChecked = false;
					this.checked = [];
				}else{
					this.isChecked = true;
					this.checked = [];
					for(var i= 0; i < this.list.length;i++){
						this.checked.push(i);
						console.log("判断二"+this.checked)
					}
				}
			}
		},
		watch:{
			'checked':{
				handler:function(n,o){
					console.log("事件监听"+this.checked.length);
					if(this.checked.length == this.list.length){
						this.isChecked = true;
					}else{
						this.isChecked = false;
					}
				},
				deep:true
			}
		}
	}
</script>

<style>

</style>
