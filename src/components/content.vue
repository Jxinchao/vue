<template>
  <div>
    <div class="text">
      <p>这里是vueX状态的值 {{ count }}</p>
    </div>
    <div class="text">
      <p>这里是vueX状态的值 {{ count }}</p>
    </div>
    <div class="text">
      <p>这里是vueX状态的值 {{ count }}</p>
    </div>
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

<style scoped>
	p{
		width: 100px;
	}
	.text{
		margin: 100px;
	}
	.text:last-child{
		color:red;
	}
</style>
