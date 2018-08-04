<template>
  <div class="login">
      用户名：<input type="text" v-model="loginform.name">
      <br><br>
      密码：  <input type="password" v-model="loginform.pwd">
      <br><br>
      <input type="button" value="登陆" @click="ajaxssss()">

  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: '',
        data () {
            return {
                loginform: {
                  name:'',
                  pwd:''
                }
            }
        },
        mounted:{
          ajaxssss();
        },
        methods:{
          ajaxssss:function(){
            axios.get('localhost:8088/list/list', {
              // username: this.loginform.name,
              // password: this.loginform.pwd
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }
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
