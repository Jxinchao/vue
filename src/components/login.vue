<template>
  <div class="login">
      用户名：<input type="text">
      <br><br>
      密码：  <input type="password">
      <br><br>
      <input type="button" value="登陆">
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: '',
        data () {
            return {
                msg: ''
            }
        },
        methods:{
          axios.post('/login',{
            uname:'',
            upwd:''
          },then((res)=>{
            console.log(1)
          },catch((res)=>{
            console.log(1)
          }))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$background: #fff;
.login{
  background:$background
}
</style>
