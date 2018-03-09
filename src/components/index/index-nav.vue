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
    }
    i:before {
      color: #fff;

      font-size: 21px;
    }
</style>

<template>
    <div id="indexNav">
      <ul>
        <li class="newHouse" @click="tohouseList(156)">
          <i></i>
          泌阳楼盘
        </li>
        <li class="secondHouse" @click="tohouseList(158)">
          <i></i>
          二手房租售
        </li>
        <li class="rentHouse" @click="tohouseList(159)">
          <i></i>
          商铺出租转让
        </li>
        <li class="houseNew" @click="tohouseList(3)">
          <i class="iconfont icon-xinwenzixun1"></i>
          楼讯
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
            window.location.href='http://bywb0396.com/plugin.php?id=xigua_hb&ac=cat&cat_id=23&city=&dist=&orderby=&idu=2'

          }else{
            window.location.href='http://bywb0396.com/plugin.php?id=xigua_hb&ac=cat&cat_id=19&city=&dist=&orderby=&idu=2'

          }
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

