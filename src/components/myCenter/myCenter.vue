<style scoped lang="less">
    .header_bg{
      width: 100%;
      text-align: center;
      height: 4.8rem;
      padding-top: 1.2rem;
      background-size: cover;
      background-repeat: no-repeat;
      padding-bottom: 0.5rem;
      overflow: hidden;
    }
    .header_img{
      margin: auto;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-size: cover;
    }
    .header_bg .header_name{
      /*color: #333;*/
      font-size: 0.4rem;
      margin-top: 0.3rem;
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      float: right;
      color: #fff;
    }
    .send_rent{
      margin-top: 0.3rem
    }
    .send_rent .mint-cell-text:before{
      content: '\e67a';
      color: @base;
      margin-right: 0.2rem;
    }
    .send_sold .mint-cell-text:before{
      content: '\e623';
      color: @base;
      margin-right: 0.2rem;
    }
    .send_rent .mint-cell-text:before{
      content: '\e623';
      color: @base;
      margin-right: 0.2rem;
    }
</style>

<template>
    <div>
        <!--<header>-->
          <!--<a class="mt_left "></a>-->
          <!--<a class="mt_center header_name">我的</a>-->
          <!--<a class="mt_right">-->
          <!--</a>-->
        <!--</header>-->
        <div class="header_bg" :style="{backgroundImage:'url(./static/img/more.gif)'}">
          <div class="header_img" :style="{backgroundImage:'url(./static/img/more.gif)'}"></div>
          <div class="header_name">王鑫</div>
          <canvasLine ></canvasLine>
        </div>
      <mt-cell title="房屋出租" to="editRent" value="" class="send_rent"></mt-cell>
      <mt-cell title="房屋出售" to="movieList" class="send_sold"></mt-cell>
      <mt-cell title="发布记录" to="movieList" value="" class="recode"></mt-cell>
    </div>
</template>

<script type="text/ecmascript-6">
  import canvasLine from  '../zujian/canvas_line.vue'
  export default {
    name: '',
    props: {},
    data () {
        return {

        }
    },
    computed: {},
    components: {
      canvasLine
    },
    watch: {},
    methods: {},
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

