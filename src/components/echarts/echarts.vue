<template>
	<div>
    {{msg}}
		 <div id="myChart" :style="{width: '300px', height: '300px'}"></div>

		 <div id="tz-main" :style="{width: '300px', height: '300px'}"></div>
   </div>
</template>

<script>
	export default{
      name: 'echartS',
     data () {
       return {
         msg: 'Welcome to Your Vue.js App',
				 tz_data : [
					 {"name":"\u8840\u7600\u8d28","val":82,"type":0},
					 {"name":"\u9634\u865a\u8d28","val":59,"type":1},
					 {"name":"\u7279\u7980\u8d28","val":54,"type":1}
				 ]
       }
     },
     mounted(){
       this.drawLine();
			 this.echartO();
     },
     methods: {
       drawLine(){
           // 基于准备好的dom，初始化echarts实例
           let myChart = this.$echarts.init(document.getElementById('myChart'))
           // 绘制图表
           myChart.setOption({
               title: { text: '在Vue中使用echarts' },
               tooltip: {},
               xAxis: {
                   data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
               },
               yAxis: {},
               series: [{
                   name: '销量',
                   type: 'bar',
                   data: [5, 20, 36, 10, 10, 20]
               }]
           });
       },
			 echartO(){
				 var tzColors = ["#66A3FD", "#F58829"];
		     var bar_data = [];
		     var tzmarkPoint = [];
		     var tz_x_data = [];
		     this.tz_data.map(function (item, index) {
		         tz_x_data.push(item['name']);
		         bar_data.push({
		             itemStyle: {
		                 normal: {
		                     color: tzColors[item['type']]
		                 }
		             },
		             value: item['val']
		         });

		         tzmarkPoint.push({
		             'value': item.name + ' ' + item.val,
		             'xAxis': item.name,
		             'yAxis': item.val,
		             'label': {
		                 normal: {
		                     show: true,
		                     formatter: '{b}{c}'
		                 }
		             },
		             'itemStyle': {
		                 normal: {
		                     show: true,
		                     color: tzColors[item['type']]
		                 }
		             },
		         })
		     });
				 let tzChart = this.$echarts.init(document.getElementById('tz-main'))
				 var tzoption = {
		         color: ['#3398DB'],
						 title: { text: '柱状图改变的' },
		         tooltip: {
		             trigger: 'axis',
		             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
		                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		             }
		         },
		         grid: {

		             left: '3%',
		             right: '4%',
		             bottom: '3%',
		             containLabel: true
		         },
		         xAxis: [
		             {
		                 type: 'category',
		                 data: tz_x_data,
		                 axisTick: {
		                     alignWithLabel: true
		                 }
		             }
		         ],
		         yAxis: [
		             {
		                 type: 'value'
		             }
		         ],
		         series: [
		             {
		                 type: 'bar',
		                 barWidth: '55%',
		                 data: bar_data,
		                 markPoint: {
		                     symbol: "path://<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" +
		                     "<svg width=\"40px\" height=\"43px\" viewBox=\"0 0 40 43\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n" +
		                     "    <defs>\n" +
		                     "        <path d=\"M23,40 L36,40 C38.209139,40 40,38.209139 40,36 L40,4 C40,1.790861 38.209139,-4.05812251e-16 36,0 L4,0 L4,0 C1.790861,4.05812251e-16 -2.705415e-16,1.790861 0,4 L0,4 L0,36 C2.705415e-16,38.209139 1.790861,40 4,40 L17,40 L19.2928932,42.2928932 C19.6834175,42.6834175 20.3165825,42.6834175 20.7071068,42.2928932 L23,40 Z\" id=\"path-1\"></path>\n" +
		                     "    </defs>\n" +
		                     "    <g id=\"！单个测试结果\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n" +
		                     "        <g id=\"！！测试结果-中医九种体质\" transform=\"translate(-112.000000, -226.000000)\">\n" +
		                     "            <g id=\"气虚\" transform=\"translate(112.000000, 226.000000)\">\n" +
		                     "                <g id=\"Rectangle-20\">\n" +
		                     "                    <use fill=\"#FFFFFF\" fill-rule=\"evenodd\" xlink:href=\"#path-1\"></use>\n" +
		                     "                    <path stroke=\"#F58829\" stroke-width=\"1\" d=\"M20.3535534,41.9393398 L22.7928932,39.5 L36,39.5 C37.9329966,39.5 39.5,37.9329966 39.5,36 L39.5,4 C39.5,2.06700338 37.9329966,0.5 36,0.5 L4,0.5 C2.06700338,0.5 0.5,2.06700338 0.5,4 L0.5,36 C0.5,37.9329966 2.06700338,39.5 4,39.5 L17.2071068,39.5 L19.6464466,41.9393398 C19.8417088,42.134602 20.1582912,42.134602 20.3535534,41.9393398 Z\"></path>\n" +
		                     "                </g>\n" +
		                     "            </g>\n" +
		                     "        </g>\n" +
		                     "    </g>\n" +
		                     "</svg>",
		                     symbolOffset: [0, "-50%"],
		                     data: tzmarkPoint
		                 }
		             }
		         ]
		     };

		     // 使用刚指定的配置项和数据显示图表。
		     tzChart.setOption(tzoption);
			 }

     }
	}
</script>

<style scoped>

</style>
