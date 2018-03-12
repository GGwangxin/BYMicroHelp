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
        <div class="header_bg" :style="{backgroundImage:'url('+login.headimgurl+')'}">
          <div class="header_img" :style="{backgroundImage:'url('+login.headimgurl+')'}"></div>
          <div class="header_name">{{login.nickname}}</div>
          <canvasLine ></canvasLine>
        </div>
      <mt-cell title="发布" to="editIndex" is-link value="" class="send_rent"></mt-cell>
      <mt-cell title="发布记录"  is-link value="" class="recode"></mt-cell>

      <mt-cell title="绑定手机" to="bind" is-link value="" class="recode" v-if="!userPhone"></mt-cell>
      <mt-cell title="已绑定手机"  :value="userPhone" class="recode" v-if="phoneshow"></mt-cell>
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
    computed: {
        login(){
          return this.$store.state.login
        },
        userPhone(){
          return this.$store.state.userPhone
        },
        isphone(){
              return /^1[34578]\d{9}$/.test(this.userPhone())
        },
        phoneshow(){
            return this.userPhone.replace('\d{3}*\d{3}','****')
        }
    },
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

