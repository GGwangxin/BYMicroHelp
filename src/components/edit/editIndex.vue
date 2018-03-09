<style scoped lang="less">
  #editIndex{
    background: #fff;
  }
  .protest{
    padding: 0.4rem;
    padding-bottom: 0;
    margin-top: 1.2rem;
    color: #999999;
    font-size: 0.4rem;
    line-height: 0.55rem;
  }
  .title{
    font-size: 0.4rem;
    background: #fff;
    padding: 0 0.4rem;
    line-height: 1rem;
    color: #999999;
  }
  .title i{
    color: @base;

  }
  .sell_type{
    background: #fff;
    width: 100%;
    overflow: hidden;
    span{
      width: 3.5rem;
      /*height: 1rem;*/
      background: #fff;
      border: 1px solid #f0f0f0;
      line-height: 1rem;
      float: left;
      text-align: center;
      font-size: 0.6rem;
      color: #999;
      font-weight: bold;
      border-radius:5px;
      margin:0 1.2rem;
      margin-top: 2rem;
      padding-top: 0.4rem;
      i{
        display: block;
        font-size: 0.8rem;
        padding-bottom: 0.4rem;
        color: #fff;
        border-radius: 50%;
        height: 1.5rem;
        width: 1.5rem;
        line-height: 1.5rem;
        margin: auto;
        background: #F37D4B;
        font-weight: 400;
      }

    }
    span:first-child{
      margin-right: 1.4rem;
    }
    span:last-child{
      margin-left: 0;
      i{
        background: #65CDB6;
      }
    }
  }
</style>

<template>
    <div id="editIndex">
      <header>
        <a class="mt_left" @click="back()"></a>
          <a class="mt_center header_name">发布信息</a>
        <a class="mt_right">
        </a>
      </header>
      <div class="protest">
        声明：发布的信息要真实，虚假信息会审核不通过。
        暂不支持求购或求租的发布，如若本平台房源不能满足您的需求，请您联系客服0396-7899998。
        新房或楼盘的发布请您联系客服0396-7899998。
      </div>
      <div style="padding-top: 0.4rem;background: #f8f8f8"></div>
      <div class="title">
        <i class="iconfont icon-xiaolian"></i>
        选择发布的类型
      </div>

      <div class="sell_type">
        <span @click="makeSelect(1)">
          <i class="iconfont icon-temai"></i>
          卖房
        </span>
        <span @click="makeSelect(2)">
          <i class="iconfont icon-woyaochuzu"></i>
          出租
        </span>
      </div>
      <edit-footer></edit-footer>

    </div>
</template>

<script type="text/ecmascript-6">
  import editFooter from  './editFooter.vue'
  export default {
    name: '',
    props: {},
    data () {
        return {
          actions:[],
          sheetVisible:false,
          textArr:[
            '出售',
            '出租'
          ]
        }
    },
    computed: {},
    components: {
      editFooter
    },
    watch: {},
    methods: {
      back(){
        this.$router.push('/')
      },
      goEdit(n,m){
        this.$router.push('/editRent?sell='+n+'&type='+m)
      },
      makeSelect(n){
        this.actions=[
          {
            name:'二手房'+this.textArr[n-1],
            method:()=>{
              this.goEdit(n, 1)
            }
          },
          {
            name:'商铺'+this.textArr[n-1],
            method:()=>{
              this.goEdit(n, 2)
            }
          },
        ]
        this.$nextTick(()=>{
          this.$root.eventHub.$emit('actionsheet', this.actions);
        })

      },
      sheetVisibleToggle(){
        this.sheetVisible=!this.sheetVisible
      },
    },
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

