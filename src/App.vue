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
    display: none !important;
  }

    header{
      background: @base!important;
    }
</style>
<template>
  <div id="app">
    <!--<transition :name="transitionName">-->
      <router-view v-if="$route.meta.noActive" class="link-view" ></router-view>
      <keep-alive>
        <router-view v-if="!$route.meta.noActive"  class="link-view"></router-view>
      </keep-alive>
      <wx-footer></wx-footer>
    <!--</transition>-->
  </div>
</template>

<script type="text/ecmascript-6">
  require('./css/common.css');
  require('./css/animation.css');
  import wxFooter from './components/index/footer.vue'
  export default {
    name: 'app',
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
    data () {
      return {
      }
    },
  }
</script>


