<template>
	<div>
		<h1 id="els">生命周期</h1>
		<input type="text" v-model="message">
		<p>{{ message }}</p>
	</div>
</template>

<script>
	export default{
		name:"lifecycle",
		data(){
			return {
				message:"我是数据"
			}
		},
		beforeCreate:function(){
			console.log("beforeCreate 创建前的状态=====");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		created:function(){
			console.log("创建完毕的状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		beforeMount:function(){
			console.log("beforeMount 挂载前的状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		mounted:function(){
			console.log("mounted 挂载结束的状态");
			console.log("%c%s","color:red","name------"+(this.$el));
			console.log(this.$el)
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		beforeUpdate:function(){
			console.group("beforeUpdate 更新前状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log(this.$el)
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		updated:function(){
			console.log("updated 更新完成的状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
			this.$destroy()
		},
		beforeDestroy:function(){
			console.log("beforeDestory 销毁前的状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		},
		destroyed:function(){
			console.log("destoryed 销毁后的状态");
			console.log("%c%s","color:red","name------"+this.$el);
			console.log("%c%s","color:red","data-----"+this.$data);
			console.log("%c%s","color:red","message----"+this.message);
		}
	}
</script>

<style>

</style>
