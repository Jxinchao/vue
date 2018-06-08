<template>
	<div>
		<h1>购物车</h1>
		<ul>
			<template v-for="(lists,index) in list">
				<li>
					<input type="checkbox" name="" v-model="checked" :value="lists.id" />
					{{index+1}}----{{lists.name}}-----{{lists.price}}-------
					<button @click="minus(index)" :disabled="lists.quantity ==0">-</button>
					{{lists.quantity}}
					<button @click="add(index)">+</button>
					<button @click="listRemove(lists.id)">删除此商品</button>
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
					{
						id:1,
						name : "衣服" ,
						price : 120,
						quantity: 1
					},
					{
						id:2,
						name : "电脑" ,
						price : 2000,
						quantity: 1
					},
					{
						id:3,
						name : "手机" ,
						price : 1200,
						quantity: 1
					},
					{
						id:5,
						name : "水果" ,
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
						var abc = this.checked[i];
						for(var j in this.list){
							if(this.list[j].id == abc){
								total += this.list[j].price * this.list[j].quantity;
							}
						}
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
				this.list = this.list.filter ((v)=>{  // 返回不等于index的数据组成的数组
					console.log(v.id)
					return v.id != index;
				})
				console.log(this.list)
				if(this.checked.indexOf(index)>-1){
	      	this.checked.splice(this.checked.indexOf(index),1)
	      }
			},
			// handleRemove:function(id){
			//   for (var i=0,len = this.list.length;i<len;i++) {
			//         if(id===this.list[i]['id']){
			//             this.list.splice(i,1);
			//             break;
			//         }
			//     }
			// },
			selectAll:function(){
				if(this.isChecked){
					this.isChecked = false;
					this.checked = [];
				}else{
					this.isChecked = true;
					this.checked = [];
					for(var i= 0; i < this.list.length;i++){
						this.checked.push(this.list[i].id);
					}
				}
			}
		},
		watch:{
			'checked':{
				handler:function(n,o){
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
