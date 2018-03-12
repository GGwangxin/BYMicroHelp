<style scoped lang="less">
  .recommend-list{
    border: 0;
    border-bottom: 1px solid #ddd;
    padding: 0.3rem 0;
    margin: 0 0.3rem;
    text-align: left;
    overflow: hidden;
  }
  .recommend-list .img{
    float: left;
    width: 3.5rem;
    height: 2.5rem;
    position: relative;
    border-radius: 5px;
  }
  .recommend-list .img img{
    width: 100%;
    height: 100%;
  }
  .recommend-list .ico-update{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 16px;
    line-height: 16px;
    background:fade(@base,70%);
    color: #fff;
    /*line-height: 0.5rem;*/
    text-align: center;
    font-size: 12px;
    margin-right: 0.3rem;
  }
  .recommend-list .text{
    float: right;
    width: 6.4rem;
    /*height: 2.5rem;*/
    position: relative;

  }
  .recommend-list .text h3{
    font-size: 0.5rem;
    /*line-height: 0.5rem;*/
    color: #333;
  }
  .type2.recommend-list .text h3{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    white-space:inherit;
    height: 1.2rem;
    line-height: 0.6rem;
  }
  .type2 .price-font{
    padding-top: 0.1rem;

  }
  .total-wrap{
    width: 100%;
    padding-top: 0.1rem;
    overflow: hidden;
  }
  .price-font {
    width: 100%;
    overflow: hidden;
  }
  .total-wrap .desc-wrap,.price-font em{
    /*width:3.8rem;*/
    font-size: 0.45rem;
    width: 100%;
    /*line-height: 0.5rem;*/
    color: #666;
    /*margin-top: 0.2rem;*/
    float: left;
  }
  .price-font span{
    float: right;
    font-size: 0.45rem;
    color: #999;
  }
  .price-font em{
    font-size: 0.4rem;
    /*margin-top: 0.2rem;*/
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .total-price {
    float: right;
    color: @base;
    font-size: 0.5rem;
    margin-right: 0.3rem;
    /*line-height: 0.5rem;*/
  }
  .tag-list{
    margin-top: 0rem;
    overflow: hidden;
    position: absolute;
    bottom: 0;

  }
  .tag-list .tag{
    height: 16px;
    /*width: 1.7rem;*/
    border-radius: 3px;
    line-height:16px;
    font-size: 12px;
    float: left;
    text-align: center;
    color: #fff;
    padding: 0 0.2rem;
    margin-right: 0.3rem;
  }

  .type0 .tag-list1{
    background: @base;

  }
  .type0 .tag-list2{
    background: #8dccc4;

  }
  .type0 .tag-list3{
    background: #e9c2a3;
  }
  .type156 .tag-list .tag{
    background: #edfbee;
  }
  .type156 .tag-list1{
    color: @base;
  }
  .type156 .tag-list2{
    color: #8dccc4;
  }
  .type156 .tag-list3{
    color: #e9c2a3;
  }
  .house_type{
    float: left;
    padding-top: 0.1rem;
    color: #666;
    font-size: 10px;
  }
  .guanli{
    float: right;
    color: red;
    width: 100%;
    text-align: right;
    font-size: 16px;
    span{
      display: inline-block;
      padding: 0.2rem;
    }
  }
</style>

<template>
  <div  class="recommend-list" :class="'type'+type" @click="goTatil" v-if="shuju.address">
    <div class="img">
      <img class="img-lazy" v-lazy.container="shuju.imglist&&shuju.imglist.length>2?JSON.parse(shuju.imglist).images[0].src:'./static/img/nopic.gif'" src="">
    </div>
    <div class="text">
      <h3 class="hid">
        {{JSON.parse(shuju.flooer)[0]}}
        {{shuju.hascord==1?'有产权证':''}}
        {{shuju.address}}
      </h3>
      <div class="total-wrap">
        <p class="desc-wrap hid">
          {{shuju.address}}
        </p>
      </div>
      <p class='left house_type'>
          <template v-for="(n,i) in JSON.parse(shuju.huxing)">
            {{n | url}}
          </template>
         {{shuju.mianji}}平方
      </p>
      <span class="total-price " style="padding-top: 0.3rem">
              {{shuju.price}}
      </span>
      <div class="guanli" v-if="type==1">
        <span>
                  管理
        </span>
      </div>
      <!--<p class="price-font hid">-->
        <!--<em>{{shuju.keywords}}</em>-->
        <!--<span class="unit-price" v-if="shuju.dj">{{shuju.money}}元/平米</span>-->
      <!--</p>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {
      shuju:Object| Number,
      type:{
        type:Number|String,
        default:0
      }
    },
    data () {
      return {
        tag:[]
      }
    },
    computed: {

    },
    components: {},
    watch: {

    },
    methods: {
      goTatil(){
//        window.localStorage.setItem('Tatilfrom',this.$nowRouter)
        this.$router.push('/secondHouseTatil?uid='+this.shuju.uid);
      },
    },
    beforeCreate() {},
    mounted() {},
    created(){
      this.$nextTick(()=>{
      })
    }
  };
</script>

