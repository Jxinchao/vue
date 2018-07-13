<template>
  <div class="hello">
  <!-- to="/home"    :to="{name:home}"   前者找的是path  后者找的是name  想要使用name 在路径里面添加name  -->
    {{ $route.params.id }}
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      <router-link to="/shoping">购物车</router-link>
      <router-link to="/lifecycle">生命周期</router-link>
      <router-link to="/tab">选项卡</router-link>
      <router-link to="/banner">轮播图</router-link>
      <router-link to="/floorRolling">楼层滚动</router-link>
      <router-link to="/documentHide">外部可关闭下拉菜单</router-link>
      <router-link to="/realtime">实时时间转换指令</router-link>
      <router-link to="/questionnaire">调查问卷</router-link>
      <router-link to="/number">数字输入框</router-link>
      <router-link to="/sort">排序表格组件</router-link>
      <router-link to="/damoTime">大漠的日期</router-link>
      <router-link to="/vuex">光光Vux</router-link>
      <router-link to="/lvcui">绿翠的高亮</router-link>
      <router-link to="/echartS">echarts</router-link>
      <router-link to="/linkage">三级联动</router-link>

      <router-link to="/vueNode">VUE+NODE+数据库实战</router-link>

      <p>这里是vueX状态的值 {{ count }}</p>
      <button @click="adds">+1</button>
      <button @click="removes">-1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    adds(){
      this.$store.commit('add')
    },
    removes(){
      this.$store.commit('remove')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin-left: 20px;
}
</style>
