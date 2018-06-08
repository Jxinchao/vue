<template>
	<div>
		<h1>实时时间转换指令</h1>

		<div v-time="timeNow"></div>
		<div v-time="timeBefore"></div>
		<div v-time="timeout"></div>
	</div>
</template>

<script>
/*
*     时间转换得逻辑
*			1分钟以前   刚刚
*			1分钟~1小时之间   XX分钟前
*     1小时~1天之间     XX小时前
*     1天~1个月（31）之间，   XX天前
*     大于1个月，显示XX年XX月XX日
*			为了使判断逻辑更简单，统一使用时间戳进行大小判断
*/
import time from '@/router/time'
export default{
	name:"realtime",
	data(){
		return {
			timeNow:(new Date()).getTime(),  // 获取当前得时间
			timeBefore: 1488930695721,   // 写死得时间 2017-03-08
			timeout:(new Date()).getTime() - (86400*3)
		}
	}
}
</script>

<style>

</style>
