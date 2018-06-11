import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import lifecycle from '@/components/lifecycle'
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
      // component: vuex
      components:{
        default:vuex,
        contents:content,
        // image:Img,
      }
    },
    {
      path: '/login/:id',
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
    }
  ]
})
