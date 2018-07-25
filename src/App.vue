<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header';
import footer from '@/components/footer';
import footers from '@/components/content';

export default {
  name: 'App',
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-footers":footers
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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
