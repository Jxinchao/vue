<template>
	<div>
    <v-header></v-header>
    <router-view></router-view>
    <router-view name="contents"></router-view>
    <v-footer></v-footer>
	</div>
</template>

<script>
  import header from '@/components/header';
  import footer from '@/components/footer';

	export default{
		data(){
			return {

			}
		},
    components: {
      "v-header": header,
      "v-footer": footer
    },
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
