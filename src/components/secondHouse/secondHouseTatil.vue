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
  .tatil{
    h1{
      width: 80%;
      line-height: 0.8rem;
      font-size: 0.5rem;
      color: #000;
      padding: 0.3rem;
      font-weight: 600;
      float: left;
    }
    .renzheng{
      float: left;
      color: @base;
      padding:0.3rem;
      width: 20%;
      height:1.6rem;
      text-align: center;
      line-height: 0.8rem;
      display: block;
      i{
        font-size: 30px;
      }
      b{
        font-size: 12px;
        color: #999999;
        display: block;
      }
    }
  }
  .list{
    margin: 0.3rem;
    border-bottom: 1px solid #EEEEEE;
    border-top: 1px solid #EEEEEE;
    overflow: hidden;
    text-align: center;
    width: 100%;
    li{
      width: 33%;
      float: left;
      margin: 0.3rem 0;
      border-right: 1px solid #eee;
      line-height: 0.8rem;
      p{
        color: #DF4A00;
        font-weight: bold;
        font-size: 0.5rem;
      }
      div{
        color: #666;
        font-size: 0.4rem;
      }
    }
    li:last-child{
      border-right: none;
    }
  }
  .list_second{
    width: 100%;
    li{
      width: 50%;
      float: left;
      font-size: 18px;
      color: #000;
      padding-left: 0.4rem;
      height: 1.2rem;
      line-height: 1.2rem;
      i{
        color: @base;
      }
      span{
        color: #949494;
        padding-right: 0.2rem;
      }
      span:after{
        content: ': ';
      }
    }
  }
  footer{
    position: fixed;
    height:1.4rem;
    width: 100%;
    bottom: 0;
    left: 0;
    a{
      width: 7.8rem;
      float: right;
      height: 100%;
      background: @base;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 1.4rem;
      i{
        font-size: 24px;
      }
    }
    .user{
      padding: 0.3rem;
      float: left;
      width: 3rem;
      img{
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        float: left;
      }
      span{
        display: block;
        float: right;
        width: 1.6rem;
        text-align: center;
        font-size: 12px;
      }
      span:last-child{
        color: #666;
        font-size: 10px;
      }
    }
  }
</style>
<template>
  <div id="tatil">
      <!--轮播图-->
      <div  style="overflow: scroll; -webkit-overflow-scrolling: touch;position: relative" class="banner">
        <mt-swipe :auto="1000000"   style="height: 7.7rem" :show-indicators="false">
          <mt-swipe-item v-for="(n,i) in banner" :key="i">
            <img v-lazy.container="n.src" class="preview-img" @click="$preview.open(i, banner)">
          </mt-swipe-item>
        </mt-swipe>
        <div class="banner_len">共{{banner.length}}张</div>
        <div class="back" @click="back"></div>
      </div>
      <div class="tatil">
        <div style="overflow: hidden">
          <h1>碧水江南附近 望江路对面 有房权证 精装修 三室一厅</h1>
          <span class="renzheng">
          <i class="icon-renzheng iconfont"></i>
          <b>认证房源</b>
        </span>
        </div>

        <ul class="list">
          <li>
            <p class="red">50万</p>
            <div>价格</div>
          </li>
          <li>
            <p class="red">{{shuju.price}}</p>
            <div>房型</div>
          </li>
          <li>
            <p class="red">{{shuju.price}}</p>
            <div>面积</div>
          </li>
        </ul>
        <ul class="list_second">
          <li>
            <i class="iconfont icon-louceng0"></i>
            <span>楼层</span>
            一楼
          </li>
          <li>
            <i class="iconfont icon-dianpuzhuangxiu"></i>
            <span>装修</span>
            精装修
          </li>
        </ul>
      </div>
      <footer>
        <div class="user">
          <img :src="'./static/img/more.gif'" alt="">
          <span>经纪人</span>
          <span>微帮房产</span>
        </div>
        <a href="tel:03977899998" class="phone">
          <i class="iconfont icon-msnui-telephone"></i>
          电话
        </a>
      </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
      return {
        banner:[
          {
            src: 'https://placekitten.com/1200/900',
            w: 600,
            h: 400
          },
          {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
          }
        ],
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
      back(){
          history.go(-1)
      },
      aa(){
          console.log(1)
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      var id=window.location.href.split('?tid=')[1];
      this.id=id;

      this.$nextTick(()=>{

      })
    }
  };
</script>


