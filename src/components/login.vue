<template>
  <div class="login">
      用户名：<input type="text">
      <br><br>
      密码：  <input type="password">
      <br><br>
      <input type="button" value="登陆" @click="ajax()">
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
          ajax:() => {
            axios.get('http://blogapi.lostinyou.cn/front/api/article', {
              // firstName: 'Fred',
              // lastName: 'Flintstone'
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
