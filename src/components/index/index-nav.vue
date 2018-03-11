<style scoped lang="less">
    #indexNav{
      background: #fff;
      color: #555;
      padding: 15px 0 15px 0;

    }
    #indexNav ul{
      overflow: hidden;
    }
    #indexNav ul li{
      float: left;
      width:25%;
      text-align: center;
    }
    #indexNav ul li i{
      display: block;
      width: 47px;
      height: 47px;
      line-height: 47px;
      text-align: center;
      border-radius: 100%;
      margin: 12px auto 4px auto;
      background-size: 47px 47px ;
      background-repeat: no-repeat;

    }
    .newHouse>i {
      background-image: url('img/new_house.png');
    }
    .secondHouse>i {
      background-image: url('img/second_house.png');
    }
    .rentHouse>i {
      background-image: url('img/rent_house.png');
    }
    .houseNew i{
      background: #ffab33;
      font-size: 21px;
    }
    .mapFind i{
      background-image:linear-gradient(90deg,#DCC68A,#DdC68A)
    }
    .jisuanqi i{
      background-image:linear-gradient(90deg,#0CBEEE,#0CCEEE)
    }
    .goufangBook i{
      background-image:linear-gradient(90deg,#84CE75,#85CE75)
    }
    .deal i{
      background-image:linear-gradient(90deg,#26BDA5,#27BDA5)
    }
    i:before {
      color: #fff;
      /*font-weight: bold;*/
      font-size: 27px;
      display: block;
      padding-top: 2px;
    }
</style>

<template>
    <div id="indexNav">
      <ul>
        <li class="newHouse" @click="tohouseList(156)">
          <i></i>
          新楼
        </li>
        <li class="secondHouse" @click="tohouseList(158)">
          <i></i>
          二手
        </li>
        <li class="rentHouse" @click="tohouseList(159)">
          <i></i>
          商铺
        </li>
        <li class="houseNew" @click="tolouxun">
          <i class="iconfont icon-xinwenzixun1"></i>
          楼讯
        </li>
        <li class="mapFind" @click="noFinish">
          <i class="iconfont icon-dituzhaofang"></i>
          地图找房
        </li>
        <li class="jisuanqi" @click="noFinish">
          <i class="iconfont icon-msnui-calculator"></i>
          计算器
        </li>
        <li class="goufangBook" @click="noFinish">
          <i class="iconfont icon-baike"></i>
          购房百科
        </li>
        <li class="deal" @click="noFinish">
          <i class="iconfont icon-jiaoyi"></i>
          买房卖房
        </li>
      </ul>
    </div>
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
    methods: {
      tohouseList(n){
          if(n==156){
            this.$router.push('/houseList?tid='+n)
          }else if(n==3){
            this.$router.push('/louxunList')
          }else if(n==158){
            this.$router.push('/secondHouseList?type=1')
          }else{
            this.$router.push('/secondHouseList?type=2')
          }
      },
      tolouxun(){
        this.$router.push('/louxunList')
      },
      noFinish(){
        this.$toast('正在努力开发中~~')
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

