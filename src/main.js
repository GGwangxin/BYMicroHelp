// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(Vuex)

const store=new Vuex.Store({

  state:{
    transitionName:"tab-left",//xxt edu 的弹窗
  },
  mutations:{
    transitionNameChange(state,n){
      state.transitionName=n
    },
  }
})
let urlARR=['index'];

router.beforeEach((to, from, next) => {
  if (urlARR.length>=2&&urlARR[urlARR.length-2]==to.name){
    store.commit('transitionNameChange','tab-right');
    urlARR.splice(-1,1);
  }else {
    store.commit('transitionNameChange','tab-left');
    urlARR.push(to.name)
  }
  next()
})

router.afterEach(route => {
  Vue.prototype.$nowRouter=route.fullPath;
})
require('./js/index');

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// router.push('movieList');
