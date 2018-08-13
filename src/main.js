// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import axios from 'axios';

Vue.use(Vuex);
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = 'http://node.itcnyz.com:8001';
// window.axios = require('axios')
// Vue.config.productionTip = false

const store = new Vuex.Store({  
  // vuex的配置
  state:{
    count:0,
    actives : 'home'
  },
  mutations:{
    add(state){
      state.count ++;
    },
    remove(state){
      state.count --;
    },
    menu (state, menu) {
       state.actives = menu;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
