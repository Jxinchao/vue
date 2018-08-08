import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'  // 主列表页
import login from '@/components/personal/login'            // 登录
import lifecycle from '@/components/lifecycle'    //
import shoping from '@/components/shoping'
import tab from '@/components/tab'
import banner from '@/components/banner'
import floorRolling from '@/components/floorRolling'
import realtime from '@/components/realtime'
import documentHide from '@/components/documentHide'
import questionnaire from '@/components/questionnaire'
import number from '@/components/number'
import damoTime from '@/components/damoTime'
import sort from '@/components/sort'
import vuex from '@/components/vuex'
import content from '@/components/content'
import setting from '@/components/setting'
import yonghu from '@/components/yonghu'             // 极光的测试用户
import lvcui from '@/components/a'
import vueNode from '@/components/vueNode/vueNode'   // 实战vue+node+moogon
import echartS from '@/components/echarts/echarts'   // echarts Home
import linkage from '@/components/linkage/linkage'   // 城市三级联动
import threeW from '@/components/linkage/threeW'   // 网上得三级联动
import register from '@/components/personal/register'   // 注册
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts;
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex,
      redirect:'/home',
      children:[
        {
          path:"/home",
          name:"content",
          component:content
        },
        {
          path:"/setting",
          name:"setting",
          component:setting
        },
        {
          path:"/yonghu",
          name:"yonghu",
          component:yonghu
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shoping',
      name: 'shoping',
      component: shoping
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: lifecycle
    },
    {
      path: '/tab',
      name: 'tab',
      component: tab
    },
    {
      path: '/banner',
      name: 'banner',
      component: banner
    },
    {
      path: '/floorRolling',
      name: 'floorRolling',
      component: floorRolling
    },
    {
      path: '/documentHide',
      name: 'documentHide',
      component: documentHide
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: questionnaire
    },
    {
      path: '/number',
      name: 'number',
      component: number
    },
    {
      path: '/realtime',
      name: 'realtime',
      component: realtime
    },
    {
      path: '/damoTime',
      name: 'damoTime',
      component: damoTime
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/lvcui',
      name: 'lvcui',
      component: lvcui
    },
    {
      path: '/vueNode',
      name: 'vueNode',
      component: vueNode
    },
    {
      path: '/echartS',
      name: 'echartS',
      component: echartS
    },
    {
      path: '/linkage',
      name: 'linkage',
      component: linkage
    },
    {
      path: '/threeW',
      name: 'threeW',
      component: threeW
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
