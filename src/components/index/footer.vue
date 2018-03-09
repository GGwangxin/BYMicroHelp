<style scoped lang="less">
  footer.indexFooter{
    position: fixed;
    bottom: 0;
    /*top: 50px;*/
    width: 100%;
    height: 1.45rem;
    /*border-top:1px solid #E3E3E3;*/
    border-top:1px solid #e5e5e5;
    background: #fff;
    z-index: 10;
  }
  footer.indexFooter>ul{
    /*overflow: hidden;*/
    display: flex;
    width: 100%;
  }
  footer.indexFooter>ul li{
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  footer.indexFooter>ul li.router-link-exact-active{
    color: @base;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  footer.indexFooter>ul li>i{
    height: 0.75rem;
    line-height: 0.75rem;
    font-size: 24px;
  }
  footer.indexFooter>ul li>span{
    text-align: center;
    font-size: 10px;
    line-height: 0.5rem;
    display: block;
  }

  .pub_circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    background-color: #fff;
    border-radius: 50%;
    top: -17px;
    height: 54px;
    width: 54px;
  }
  .pub_circle:before {
    content: " ";
    background-color: #fff;
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 37px;
    width: 105%;
    left: -1px;
  }
  .pub_circle:after {
    content: " ";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    box-sizing: border-box;
  }
  .pub_circle+.iconfont {
    width: 38px;
    height: 38px;
    position: absolute;
    z-index: 3;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    font-size: 20px;
    line-height: 34px;
    text-align: center;
    top: -9px;
    background-color: @base;
    color: #fff;
    border-radius: 50%;
  }
  .icon-fabu:before {
    padding-top: 4px;
    display: block;
  }
  .center_span{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
</style>

<template>
  <footer class="indexFooter">
    <ul>
      <router-link  class="footer_index" tag="li" to="/">
        <i class="iconfont icon-iconfontzhizuobiaozhun05"></i>
        <span>首页</span>
      </router-link>
      <router-link  class="footer_talk" tag="li" to="editIndex">
        <div class="pub_circle "></div>

        <i class="iconfont icon-fabu"></i>
        <span class="center_span">发布</span>
      </router-link>
      <router-link  class="footer_my" tag="li" to="myCenter">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>

    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {

        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {},
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

