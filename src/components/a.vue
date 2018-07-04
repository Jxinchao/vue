<template>
  　　<div>
  　　　　<ul>
  　　　　　　<li v-for="(item,index) in items">
                <p>{{item.select}}</p>
                <p v-for="(a,index1) in item.list"
                   @click="selectStyle (a,index,index1)"
                   :class="resultNum === index1 && resultNums === index?'active':''">
                  {{a.name}}
                </p>
  　　　　　　<!-- <span class="icon" v-show="item.active">当我是图标</span> -->
  　　　　　　</li>
  　　　　</ul>
  　　</div>
</template>
<script>
  import Vue from 'vue'
  export default{
    data(){
      return {
        active: false,
        num: "",
        nums:"",
        items: [
          {
            select:'第一行',
            list:[
              {name:"abc"},
              {name:"dcs"},
              {name:"sf"},
            ]
          },
          {
            select:'第二行',
            list:[
              {name:"1"},
              {name:"2"},
              {name:"3"},
            ]
          },
          {
            select:'第三行',
            list:[
              {name:"1"},
              {name:"2"},
              {name:"3"},
            ]
          }
        ]
      }
    },
    methods: {
        selectStyle(item, index,index1){
          this.nums = index;
          this.num = index1;
        }
    },
    computed:{
        resultNum(){
          return this.num;
        },
        resultNums(){
          return this.nums;
        }
    }
  }
</script>

<!-- 样式 -->
<style scoped>
  .active{
    color:red;
  }
  .unactive{
    color:#000;
  }
  .icon{
    float: right;
    font-size:12px;
  }
</style>
