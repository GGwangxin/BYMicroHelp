<style scoped lang="less">
  .guidanceTosearch{
    background:url(img/search1.png) no-repeat center center;
    background-size:0.59rem 0.57rem;
  }
  .selectNav{
    background: #fff;
    margin-top: 1.2rem;
    height: 1rem;
    border-bottom: 1px solid #f2f2f2;
    li{
      width: 33%;
      height: 100%;
      position: relative;
      text-align: center;
      float: left;
      color: #000000;
      font-size: 12px;
      line-height: 1.2rem;
      i{
        vertical-align:-webkit-baseline-middle;
        /*ransition: all .3s;*/
        /*transform: rotate(0deg);*/
        display: inline-block;
      }
    }
    li.active{
      color: @base;
      i{
          /*transition: all .3s;*/
          /*transform: rotate(180deg);*/
      }
    }
  }
  .fade{
    position: absolute;
    z-index: 9;
    top: 2.2rem;
    bottom: 0;
    left: 0;
    width: 100%;
    .main{
      height: 12rem;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      width: 100%;
      .left{
        border-right: 1px solid #f2f2f2;
        width: 50%;
        float: left;
        height: 100%;
        overflow-y: auto;
      }
      .list{
        width: 100%;
        height: 45px;
        margin-left: 15px;
        border-bottom: 1px solid #f2f2f2;
        line-height: 45px;
        font-size: 15px;
        color: #666;
      }
      .list.active{
        color: @base;
      }
    }
    .cover{
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.3);

    }
  }
</style>

<template>
    <div id="secondHouseList">
      <header>
        <a class="mt_left " @click="back()"></a>
        <a class="mt_center header_name">{{title}}</a>
        <a class="mt_right">
          <router-link class="guidanceTosearch" to="movieSearch" tag="span"></router-link>
        </a>
      </header>
      <nav>
        <ul class="selectNav">
          <template v-for="(n, i) in NavArr" >
            <li  :class="{active:navIndex==i}" @click="selNav(i)">
              {{n}}
              <i class="iconfont icon-down"></i>
              <span></span>
            </li>
          </template>

        </ul>
      </nav>
      <transition name="transHeight">
        <div class="fade" v-if="selNavshow">
          <div class="main">
            <template v-if="selList.size==2">
              <div class="left">
                <div  v-for="(n, i) in selList.list" class="list" :class="{'active':n.active}">{{n.text}}</div>
              </div>
              <div class="right">

              </div>
            </template>
            <template v-if="selList.size==1" v-for="(n, i) in selList.list">
              <div class="list" :class="{'active':n.active}">{{n.text}}</div>

            </template>
          </div>
          <div class="cover" @click="selNavshow=false">

          </div>
        </div>
      </transition>

    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {
          sellArr:[
            '出售',
            '出租'
          ],
          typeArr:[
            '二手房',
            '商铺'
          ],
          type:'',
          sell:'',
          navIndex:-1,
          selNavshow:false,
        }
    },
    computed: {
      NavArr(){
        var arr= [
          '区域',
          this.title,
          '默认排序'
        ]
        return  arr
      },
      title(){
        return this.typeArr[this.type-1]+this.sellArr[this.sell-1]
      },
      selList(){
        if(this.navIndex==0){
          return {
            size:2,
            list:[
              {
                text:'全部',
                active:true
              }
            ]
          }
        }else if(this.navIndex==1){
          return {
            size:1,
            list:[
                {
                  text: this.typeArr[this.type-1]+this.sellArr[0],
                  active:this.sell==1?true:false
                },
                {
                  text: this.typeArr[this.type-1]+this.sellArr[0],
                  active:this.sell==2?true:false
                }
              ]

          }
        }else{
          return {
            size:1,
            list:[
              {
                text:'默认',
                active:true
              }
            ]
          }
        }

      }
    },
    components: {},
    watch: {},
    methods: {
      back(){
        this.$router.push('/')
      },
      selNav(i){
          if(this.navIndex==i){
            this.selNavshow=!this.selNavshow
          }else{
            this.selNavshow=true
          }
          this.navIndex=i
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      this.type=parseQueryString(window.location.hash).type;
      this.sell=window.localStorage.getItem('type'+this.type);
      if(!this.sell)this.sell=1

    }
};
</script>

