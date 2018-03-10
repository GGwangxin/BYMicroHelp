<style scoped lang="less">
  .sendyzm{
    border: 1px solid @base;
    box-shadow: 0 0 1px @base;
    color:@base;
    padding: 5px;
  }
</style>

<template>
  <div id="bind">
    <header>
      <a class="mt_left " @click="back()"></a>
      <a class="mt_center header_name">绑定手机号</a>
      <a class="mt_right">

      </a>
    </header>
    <div style="margin-top: 1.2rem"></div>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="验证码" v-model="yzm">
      <span class="sendyzm" @click="getyzm">{{yzmsend}}</span>
    </mt-field>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {
            phone:'',
            sendyzm:'',
            yzm:'',
            saveTime:'',
           yzmsend:'点击获取',
        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      getyzm(){
        if(!(/^1[34578]\d{9}$/.test(this.phone))){
            this.$toast('请输入正确手机号')
            return
        }
        if(this.yzmsend=='点击获取'||this.yzmsend=='重新获取'){
//          ajaxGet({
//            url:'mscode/',
//            data:{
//             tel:this.phone,
//            },
//            success:(data)=>{
//              if(data.msg=='success'){
//                  this.sendyzm=this.verify
                  this.$toast('验证码发送成功');
                  this.saveTime=60;
                  this.daojishi();
//              }else{
//                this.$toast('每天获取的验证码超过上限')
//              }
//            },
//            error:()=>{
//              this.$toast('网络异常')
//            }
//          })
        }


      },
      daojishi(){
        this.yzmsend=this.saveTime+'s后重新获取'
        this.saveTime--;
        if(this.saveTime>=0){
          setTimeout(()=>{

            this.daojishi();
          },1000)
        }else{
          this.yzmsend='重新获取';
        }

      }
    },
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

