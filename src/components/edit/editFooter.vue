<style scoped lang="less">
  .editfooter{
    text-align: center;
    padding-top: 1rem;
  }
  .three_radio{
    width:2.5rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 12px;
    color: #A9A9A9;
    display: inline-block;
    /*float: left;*/

    i{
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.7rem;
      display: block;
      margin: auto;
      border-radius: 50%;
      background: #F5F5F5;
    }
  }
  .arrow{
    display: inline-block;
    color: #A9A9A9;
    padding-top: 0.5rem;
    vertical-align: top;
    /*float: left;*/
    i{
      width: 1.5rem;
      font-size: 1rem;
    }
  }
</style>

<template>
    <div class="editfooter">
      <div class="three_radio">
        <i class="iconfont icon-msnui-tel"></i>
        线上发布
      </div>
      <div class="arrow">
        <i class="iconfont icon-xiangyoujiaohuan"></i>
      </div>
      <div class="three_radio">
        <i class="iconfont icon-diannao"></i>
        核实
      </div>
      <div class="arrow">
        <i class="iconfont icon-xiangyoujiaohuan"></i>
      </div>
      <div class="three_radio">
        <i class="iconfont icon-shangxian"></i>
        房源上架
      </div>
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
    methods: {},
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

