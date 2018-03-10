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
    transitionName:"tab-left",//xxt edu 的弹窗,
    login:{},
  },
  mutations:{
    transitionNameChange(state,n){
      state.transitionName=n
    },
    loginChange(state,n){
      state.login=n
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
  components: { App },
  data:{
    eventHub: new Vue()
  }
})

// router.push('movieList');
var code=window.parseQueryString(window.location.href).code;



if(code){
  var href=window.location.href;
  if(href.indexOf('code')<href.indexOf('#/')){
    window.location.href='http://fc.bywb0396.com/byfc/#/?code='+code;
  }else{
    router.push('/login?code='+code);
  }
}else{
  if(!window.sessionStorage.getItem('login')){
    window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx282641693a5af1b0&redirect_uri=http://fc.bywb0396.com/byfc/&response_type=code&scope=snsapi_userinfo&state=123&connect_redirect=1#wechat_redirect'
  }else{
    store.commit('loginChange',JSON.parse(window.sessionStorage.getItem('login')));
  }
}


