<template>
  <div class="hello">
    {{ $route.params.id }}
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
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
}
</style>
