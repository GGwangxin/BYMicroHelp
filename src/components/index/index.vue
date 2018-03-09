<style scoped lang="less">
    .mint-swipe img{
       width: 100%;
       height: 100%;
    }
    .guidanceTosearch{
      background:url(img/search1.png) no-repeat center center;
      background-size:0.59rem 0.57rem;
    }
    .chart-wrap{
      background: #fff;
      margin: 0 0.3rem;
      margin-top: 0.3rem;

    }
    #guidance .chart-wrap .title {
      height: 1.2rem;
      line-height: 1.2rem;
    }
    #guidance .chart-wrap .title {
      margin-top: .2rem;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
    }
    #guidance .chart-wrap .title h3 {
      margin-left: .3rem;
      color: @base;
      font-size: 0.5rem;
    }
    .title:before {
      content: '';
      width: 0.1rem;
      height: 100%;
      background: @base;
      margin-top: -.03rem;
    }
    #guidance .chart-wrap .title h3, #guidance .chart-wrap .title:before {
      display: inline-block;
      vertical-align: middle;
    }
    .chart-wrap .title em {
      float: right;
      font-size: 14px;
      color: #999;
    }
    .chart-wrap .title em:before{
      float: right;
    }
    .home-section-title {
      background: #f6f6f6;
      padding: 20px 15px 10px;
    }

    .align-item-center {
      -webkit-box-align: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .flexbox {
      display: -webkit-box;
      display: -webkit-flexbox;
      display: -webkit-flex;
      display: flex;
    }
    .home-section-title .line {
      display: block;
      height: 1px;
      background: #e6e6e6;
    }
    .flexbox-item {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
    .home-section-title .txt {
      font-size: 0.5rem;
      color: #333;
      padding: 0 11px;
    }
    .home-section-title .i_like, .home-section-title .i_toutiao {
      display: inline-block;
      margin-right: 5px;
      width: 15px;
      height: 15px;
      background-position: -13px 0;
    }
    .vm {
      vertical-align: middle;
    }
    .dib {
      display: inline-block;
    }
    .home-section-title .i_like, .home-section-title .i_toutiao {
      display: inline-block;
      margin-right: 5px;
      width: 15px;
      height: 15px;
      background-position: -13px 0;
    }
    .i_global_new {
      background: url(img/newicon5.png) no-repeat;
      -webkit-background-size: 342px 40px;
      background-size: 342px 40px;
    }
    .mint-actionsheet-listitem, .mint-actionsheet-button{
      font-family: 'Helvetica Neue',Roboto,'microsoft yahei';
      color: #666;
      font-size: 18px;
    }

    .index-head  {
      width: 100%;
      height: 4.7rem;
      /*background: url(img/index.png) no-repeat;*/
      background-size: 100%;
      /*padding-top: 1rem;*/
      position: relative;
    }
    .index-head h1 {
      margin-top: .48rem;
      font-size: .74rem;
      height: .7rem;
      line-height: .7rem;
      text-align: center;
      font-weight: 700;
      color: #fff;
    }
    .index-head h1 #counter {
      margin: -.1rem .14rem 0;
      color: #fc6565;
      font-size: .98rem;
      vertical-align: middle;
      display: inline-block;
    }
    .index-head h2 {
      margin-top: .16rem;
      text-align: center;
      font-weight: 700;
      color: #fff;
      font-size: 0.6rem;
    }
    .head_right{
      position: absolute;
      top: 0.25rem;
      right: 0.6rem;
      width: 1rem;
      height: 1rem;
      font-size: 0.8rem;
      color: #fff;
      text-align: center;
      line-height: 1rem;
    }
  .search{
    margin-top: 0.3rem;
    position: absolute;
    bottom: 0.3rem;
  }
  .Num{
    margin: 0.3rem;
    width: 10.2rem;
    overflow: hidden;
    background: #fff;
    .num_one{
      float: left;
      width: 50%;

      span{
        /*color: #999;*/
        font-size: 16px;
        display: block;
        padding: 5px 0;
        color: @base;
      }
      h1{
        font-size: 26px;
        color: #000;
        padding:5px 0;
        float: left;
        line-height: 26px;
      }
      b{
        float: left;
        font-size: 26px;
        color: #333;
        line-height: 26px;
        padding:5px 0;
        font-weight: 400;
        display: block;
        padding-left: 5px;
      }
    }
  }
    .hotPointParse{
      height: 1.2rem;
      padding: 0 0.3rem;
      background: #fff;
      margin-top: 0.2rem;
    }
    .hotPointParseText{
      width: 2.5rem;
      float: left;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: .5rem;
      font-style: italic;
      color:@base;
      font-weight: bold;
      /*background: url('./img/zuijin.png') no-repeat center center;*/
      background-size:2rem 0.64rem;
    }
    .dividerLine {
      width: 1px;
      height: 0.80rem;
      border-right: 1px solid #cccccc;
      margin-top: 0.2rem;
      float: left;
      margin-left: 0.20rem;

    }
    .articleTitle {
      max-width: 7.0rem;
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.42rem;
      color: #666666;
      margin-left: 0.30rem;
      display: block;
      position: relative;
      overflow: hidden;
      float: left;
    }
</style>
<template>
    <div id="guidance" style="overflow: scroll" >
      <template>
        <!--轮播图-->
        <div class="index-head" style="overflow: scroll; -webkit-overflow-scrolling: touch;">
          <mt-swipe :auto="10000" prevent  style="height: 100%">
            <mt-swipe-item v-for="(n,i) in banner" :key="i">
              <img :src="n.imgurl" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <searchInput v-model="search" class="search" searchBtn :onSearch="onsearch" :placeholder="'找二手房，租房'"></searchInput>
        </div>
      </template>
      <div >

        <!--<i class="iconfont icon-fabu head_right" @click="gofabu()"></i>-->
        <!--<h1>-->
          <!--已有-->
          <!--<span id="counter">{{yulanNum}}</span>-->
          <!--名网友-->
        <!--</h1>-->
        <!--<h2>体验泌阳房产网购房服务</h2>-->

      </div>
      <!--几个分类-->
      <indexNav></indexNav>

      <!--猜你喜欢-->
      <mt-loadmore
        ref="loadmore"
        :topMethod="loadUp"
      >
        <!--显示浏览总量-->
        <div class="Num">
          <div class="num_one">
            <span>浏览量</span>
            <h1 id="counter">{{yulanNum}}</h1>
            <b>次</b>
          </div>
          <div class="num_one">
            <span>发布量</span>
            <h1 id="counter1">11</h1>
            <b>条</b>
          </div>
        </div>
        <!--文章推荐-->
        <div class="hotPointParse">
          <div class="hotPointParseText">
            最近动态
          </div>
          <div class="dividerLine"></div>
          <div class="articleTitle">
            <toUpCycle :shuju="listuP"></toUpCycle>
          </div>
        </div>

        <div class="home-section-title flexbox align-item-center">
          <span class="line flexbox-item"></span>
          <h3 class="txt">
            <i class="i_like i_global_new vm"></i>
            <span class="dib vm">猜你喜欢</span>
          </h3>
          <span class="line flexbox-item"></span>
        </div>

        <div>
          <one-house v-for="(n,i) in list" :key="i" :shuju="n"></one-house>
        </div>
        <div slot="top" class="mint-loadmore-top">
          <wx-spinner></wx-spinner>
        </div>
      </mt-loadmore>
      <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
      </mt-actionsheet>
      <!--<loadMore-->
        <!--ref="loadmore"-->
        <!--:bottom-method="loadBottom"-->
        <!--:bottom-all-loaded="allLoad"-->
        <!--style="position: absolute;top: 1.2rem;bottom: 0;width: 100%"-->
      <!--&gt;-->
        <!--<div>-->
          <!--<div v-for="(n,i) in list" style="width: 100%;height: 3rem">-->
            <!--{{n}}-->
          <!--</div>-->
        <!--</div>-->

      <!--</loadMore>-->
    </div>
</template>

<script type="text/ecmascript-6">
  import indexNav from './index-nav.vue';
  import loadMore from '../zujian/loadMore.vue';
  import oneZixun from '../zixun/oneZixun.vue';
  import searchInput from '../zujian/searchInput.vue';
  import oneHouse from '../house/oneHouse.vue';
  import wxSpinner from  './../zujian/wx-spinner.vue'
  import toUpCycle from '../zujian/toUpCycle.vue';
  export default {
    name: '',
    props: {},
    data () {
       return{
         banner:[

         ],
         list1:[
           {
             updatedate:'2018-1-22',
             subject:'尚东第一城',
             address:'泌阳县盘古开天园与铜山湖大道交会处北',
             zj:'售价待定',
             mianji:'建面 120-142m²',
             ccid1title:'住宅',
             ccid43title:'大型超市',
             zxcdtitle:'一环'
           }
         ],
         listuP:[
           '泌阳微帮，有事您说话!',
           '泌阳微帮，有事您说话!',
           '泌阳微帮，有事您说话!',
         ],
         list:[],
         allLoad:false,
         sheetVisible:false,
         yulanNum:0,
         search:'',
         actions:[

         ]
       }
    },
    computed: {
      scrollHeight(){
        return (window.innerHeight-parseFloat($('html').css('fontSize'))*2.45)+'px'
      }
    },
    components: {
      loadMore,indexNav,oneZixun,oneHouse,searchInput,wxSpinner,toUpCycle
    },
    watch: {},
    methods: {
      loadUp(){
        ajaxGet({
              data:{
                page:1,
                page_size:4
              },
              url:'cmslist/',
              success:(data)=>{
                this.list=data;
                this.$nextTick(()=>{
                  setTimeout(()=> {
                    this.$refs.loadmore.onTopLoaded()

                  },1000)
                })
              },
              error:()=>{
                this.$toast('网络异常');

          }
        })
       },
      getBanner(){
         ajaxGet({
           data:{},
           url:'banner',
           success:(data)=>{
             this.banner=data
           },
           error:()=>{
             this.$toast('网络异常');

           }
         })
       },
      gofabu(){
//          window.location.href='http://bywb0396.com/plugin.php?id=xigua_hb&ac=pub&idu=1'
        this.sheetVisible=true
      },
      getYulan(){
        ajaxGet({
          data:{},
          url:'set_hits',
          success:(data)=>{
            this.yulanNum=data;
            this.$nextTick(()=>{
              $('#counter').countUp();
              $('#counter1').countUp();
            })
          },
          error:()=>{
            this.$toast('网络异常');

          }
        })
      },
      onsearch(){
          if(this.search){
              window.location.href="http://bywb0396.com/plugin.php?id=xigua_hb&ac=cat&keyword="+this.search
          }
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){

        this.actions=[
          {
              name:'房屋出租',
              method:function(){
                    window.location.href='http://bywb0396.com/plugin.php?id=xigua_hb&ac=pub&step=3&catid=19&idu=1'
              }
          },
          {
            name:'房屋出售',
            method:function(){
              window.location.href='http://bywb0396.com/plugin.php?id=xigua_hb&ac=pub&step=3&catid=23&idu=1'
            }
          }
        ]
      this.$nextTick(()=>{
        this.loadUp()
        this.getBanner();
        this.getYulan();
      })
    }
};
</script>

