<template>
  <div class="login">
      用户名：<input type="text" v-model="loginform.name">
      <br><br>
      密码：  <input type="text" v-model="loginform.pwd">
      <br><br>
      手机号：  <input type="password" v-model="loginform.tel">
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
                  pwd:'',
                  tel:''
                }
            }
        },
        methods:{
          ajaxssss:function(){
            axios.post('/apis/register/register', {
              uname: this.loginform.name,
              tel:this.loginform.tel,
              pwd: this.loginform.pwd
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
