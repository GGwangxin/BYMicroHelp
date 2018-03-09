<style scoped lang="less">
    .banner img{
      width: 100%;
      height: auto;
    }
    .banner img[lazy=loading]{
      width: 64px;
      height: 64px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
   .banner_len {
      position: absolute;
      height: 24px;
      line-height: 24px;
      bottom: 12px;
      right: 15px;
      padding: 0 6px;
      border-radius: 10px;
      background: rgba(0,0,0,0.5);
     color: #fff;

    }
    #tatil .back {
      z-index: 10;
      position: absolute;
      top: 13px;
      left: 26px;
      color: #fff;
      height: 20px;
      line-height: 20px;
    }
   #tatil .back:after {
      content: "";
      position: absolute;
       left: 4px;
       top: 10px;
      z-index: 1;
      display: block;
      height: 30px;
      width: 30px;
      background-color: rgba(0,0,0,0.5);
      border-radius: 30px;
      -webkit-border-radius: 30px;
    }
    #tatil .back:before {
      position: absolute;
      content: "";
      height: 13px;
      width: 13px;
      border: 1px solid #fff;
      border-width: 1px 0 0 1px;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      left: 15px;
      top: 18px;
      z-index: 3;
    }

    /*基本介绍*/
    .lpbase {
      font-size: 0.4rem;
      color: #333;
      padding: 15px 15px 0;
    }
    .lpbase .lptitle {
      position: relative;
      line-height: 25px;
    }
    .lpbase .lptitle h1 {
      display: block;
      font-size: 0.58rem;
      color: #333;
      -webkit-box-flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .lpbase .lptitle .lpname {
      display: -webkit-box;
      -webkit-box-flex: 1;
      height: 20px;
      /*line-height: 20px;*/
      margin-bottom: 10px;
    }
    .lpbase .lptitle em {
      font-size: 0.4rem;
      color: #666;
    }
    .lpbase .lpbase-nick {
      color: #999;
      font-size: 0.4rem;
      line-height: 15px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e6e6e6;
    }
    .lpbase .lpinfo {
      padding: 5px 0;
    }
    .wui-line {
      display: -webkit-box;
      line-height: 24px;
      color: #333;
      font-size: 1.4rem;
    }
    .wui-line>label {
      display: block;
      color: #999;
      font-size: 0.47rem;
    }
    .wui-line>label:after {
      content: "：";
    }
    .wui-line>p {
      width: 100%;
      -webkit-box-flex: 1;
      box-flex: 1;
      font-size: 0.47rem;
    }
    .g-overflow {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .lp-price {
      font-size: 0.6rem;
      color: #e54b00;
    }
    .lpbase .lpinfo .icon-dizhi {
      color: @base;
      font-size: 0.7rem;
      vertical-align: super;
    }
    .wui-line-btn {
      display: block;
      font-size: 0.47rem;
      color: @base;
      height: 44px;
      line-height: 34px;
      text-align: center;
      padding: 5px 15px;
      margin: -5px -15px;
      border-bottom: 1px solid #e6e6e6;
    }
    #phone{
      position: fixed;
      margin: auto;
      right: 20px;
      top:0px;
      bottom: 0px;
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border: solid 1px @base;
      background: @base;
      z-index: 9;
      border-radius: 50%;
      font-size: 23px;
      color: #fff;
    }
    .lptel {
      display: -webkit-box;
      height: 65px;
      position: relative;
      -webkit-box-align: center;
      font-size: 0.4rem;
      color: #555;
      padding: 0 15px;

    }

    .lptel .num {
      display: block;
      font-size: 0.58rem;
      color: #62ab00;
      margin-bottom: 6px;
    }
    .lptel .telinfo {
      -webkit-box-flex: 1;
    }
    .lptel .phone {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border: solid 1px @base;
      border-radius: 44px;
      -webkit-border-radius: 44px;
    }
    .lptel .phone {
      width: 44px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      border: solid 1px @base;
      border-radius: 44px;
      -webkit-border-radius: 44px;
    }
    .lptel .phone {
      color: @base;
      font-size: 23px;
    }
</style>
<template>
  <div id="tatil">
    <!--轮播图-->
    <template v-if="shuju.title">
      <div  style="overflow: scroll; -webkit-overflow-scrolling: touch;position: relative" class="banner">
        <mt-swipe :auto="1000000" prevent  style="height: 7.7rem" :show-indicators="false">
          <mt-swipe-item v-for="(n,i) in banner" :key="i">
            <img v-lazy.container="n">
          </mt-swipe-item>
        </mt-swipe>
        <div class="banner_len">共{{banner.length}}张</div>
        <div class="back" @click="back">

        </div>
      </div>
      <a id="phone" class="icon-msnui-telephone iconfont" :href="'tel:'+shuju.phone">

      </a>
      <!--详情介绍-->
      <div class="lpbase">
        <div class="lptitle">
          <span class="lpname">
              <h1>{{shuju.title}}</h1>
               <em>
                 {{shuju.money!=0?shuju.money+'元/平方':'暂未定价'}}
               </em>
           </span>
          <div class="lpbase-nick">
            别名：
          </div>
        </div>
        <div class="g-border-bottom"></div>
        <!-- 基本信息 -->
        <div class="lpinfo">
          <div class="wui-line">
            <label>住宅</label>
            <p class="g-overflow">
              <span class="lp-price">{{shuju.money!=0?shuju.money+'元/平方':'暂未定价'}}</span>
              <!--元/㎡-->
            </p>
          </div>
          <div class="wui-line">
            <label>开盘</label>
            <p>
              {{shuju.kaipan}}
            </p>
          </div>

          <div class="wui-line">

            <label>交房</label>
            <p>
              预计{{shuju.jiaofang}}
            </p>
          </div>

          <a class="wui-line"  @click="toMap()">
            <label>地址</label>
            <p class="g-overflow-third">
              {{shuju.address}}
            </p>
            <i class="icon-dizhi iconfont"></i>
          </a>
          <div class="wui-line">
            <label>轨交</label>
            <p class="g-overflow-third">
              {{shuju.gongjiao}}
            </p>
          </div>
          <div class="wui-line-btn g-press open-lpextend" @click="toggleContentTailShow">
            {{contentTailShow?'收起信息':'更多信息'}}
          </div>
        </div>
        <div class="g-border-bottom open-border wui-full"></div>
        <!-- 更多信息 -->
        <div class="lpinfo lpextend" v-if="contentTailShow">
          <div class="wui-line">
            <label>物业类型</label>
            <p class="g-overflow">{{shuju.wutype}}</p>
          </div>

          <div class="wui-line">
            <label>装修类型</label>
            <p class="g-overflow">{{shuju.zxtype}}</p>
          </div>
          <!--<div class="wui-line">-->
            <!--<label>产权年限</label>-->
            <!--<p class="g-overflow-third">70年, 70年</p>-->
          <!--</div>-->
          <div class="wui-line">
            <label class="wui-justify">开发商</label>
            <p class="g-overflow-third">{{shuju.kaifa}} </p>
          </div>
          <div class="wui-line">
            <label>物业公司</label>
            <p class="g-overflow-third">{{shuju.wuliu}}</p>
          </div>
          <div class="wui-line">
            <label>车位配比</label>
            <p class="g-overflow-third">暂无数据</p>
          </div>
          <div class="wui-line">
            <label class="wui-justify">容积率</label>
            <p class="g-overflow-third">{{shuju.rongji}} </p>
          </div>
          <div class="wui-line">
            <label class="wui-justify">绿化率</label>
            <p class="g-overflow-third">{{shuju.lvhua}} </p>
          </div>
        </div>
      </div>
      <!--联系人电话-->
      <div class="lpitem g-press">
        <a data-tag="1" :href="'tel:'+shuju.phone" class="lptel" >
          <p class="telinfo">
            <span class="num">{{shuju.phone}}</span>
            联系客服
          </p>
          <p class="phone"><i class="icon-msnui-telephone iconfont"></i></p>
        </a>
      </div>
    </template>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {
          banner:[],
          content:[
              '更多信息',
              '收起信息'
          ],
          contentTailShow:false,
          lindex:0,
          id:'0',
          pos:false,
          shuju:{}
        }
    },
    computed: {
//        shuju(){
//            return this.list[this.lindex]
//        }
    },
    components: {},
    watch: {},
    methods: {
      toggleContentTailShow(){
          this.contentTailShow=!this.contentTailShow
      },
      back(){
          var path=window.localStorage.getItem('Tatilfrom')
          this.$router.push(path?path:'/')
      },
      toMap(){
          if(this.pos){
            this.$router.push('/mapPosition?name='+encodeURIComponent(this.shuju.title)+'&posx='+this.pos.split(',')[0]+'&posy='+this.pos.split(',')[1])

          }else{
            this.$toast('位置信息不完善');
          }
      },
      tatil(){
        this.$indicator.open();
        ajaxGet({
          data:{
            id:this.id
          },
          url:'view/',
          success:(data)=>{
            this.shuju=data[0];
            this.$set(this.shuju,'phone','7896668')
            this.banner=data[0].img.split(',')
            try{
              this.pos=this.shuju.content.split('center=')[1].split('zoom=')[0]

            }catch (err){
            }
            this.$indicator.close();
          },
          error:()=>{
            this.$toast('网络异常');
            this.$indicator.close();

          }
        })
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      var id=window.location.href.split('?tid=')[1];
      this.id=id;

      this.$nextTick(()=>{
        this.tatil();

      })
    }
};
</script>


