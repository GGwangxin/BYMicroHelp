<style lang="less">
  body {
    font-family: "arial";
    -webkit-user-select: none;
    -webkit-text-size-adjust: none;
    -webkit-overflow-scrolling: touch;
    font-size: 12px;
    background: #EEEEEE;

  }
  html, body {
    -webkit-font-smoothing: antialiased;
  }
  .link-view{
    position: fixed;
    width: 100%;
    top: 0px;
    bottom:0;
    left: 0;
    background: #f8f8f8;
    z-index: 9;
    transition: all 0.8s cubic-bezier(.55,0,.1,1);
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  image[lazy=loading] {
    width: 400px;
    height: 300px;
    margin: auto;
  }
  .guidanceTosearch {
    /*display: none !important;*/
  }

  header{
    background: @base!important;
  }
   #app .mint-actionsheet{
      background: transparent;
    }
   #app .mint-actionsheet-listitem, .mint-actionsheet-button {
      display: block;
      width: 10rem!important;
      height: 1.5rem;
      line-height:1.5rem;
      font-size: 0.48rem;
      color: @base!important;
      background-color: #fff;
      margin-left: 0.4rem;
      margin-bottom: 0.3rem;
      border-radius: 5px;

    }

   #app .mint-loadmore-top {
      font-size: .38rem;
      color: #999;
    }
</style>
<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
      <router-view v-if="$route.meta.noActive" class="link-view" :style="{'bottom':$route.meta.noActive?'0px':'1.45rem'}"></router-view>
      <keep-alive>
        <router-view v-if="!$route.meta.noActive"  class="link-view" :style="{'bottom':$route.meta.noActive?'0px':'1.45rem'}"></router-view>
      </keep-alive>
      <wx-footer v-if="$route.meta.footer"></wx-footer>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
    <!--</transition>-->
  </div>
</template>

<script type="text/ecmascript-6">
  require('./css/common.css');
  require('./css/animation.css');
  import wxFooter from './components/index/footer.vue'
  export default {
    name: 'app',
    data () {
      return {
        actions:[],
        sheetVisible:false
      }
    },
    computed:{
      transitionName(){
          return this.$store.state.transitionName
      },
      screenHeight(){
        return window.innerHeight+'px'
      }
    },
    components: {
      wxFooter
    },
    methods:{
      toggleActionsheet(arr){
        this.actions=arr;
        this.sheetVisible=true
      }
    },
    created(){
      this.$nextTick(()=>{
        this.$root.eventHub.$on('actionsheet',this.toggleActionsheet)

      })
//      window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx282641693a5af1b0&redirect_uri=http://fc.bywb0396.com/byfc/&response_type=code&scope=snsapi_userinfo&state=http://fc.bywb0396.com/byfc/&connect_redirect=1#wechat_redirect"

    }
  }
</script>


