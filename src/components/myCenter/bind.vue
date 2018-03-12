<style scoped lang="less">
  .sendyzm{
    border: 1px solid @base;
    box-shadow: 0 0 1px @base;
    color:@base;
    padding: 5px;
  }
  .submit{
    background: #CCCCCC;
    width: 10rem;
    margin: 0.4rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .submit.active{
    background: @base;
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
    <mt-field label="验证码" v-model="yzm" disableClear>
      <span class="sendyzm" @click="getyzm">{{yzmsend}}</span>
    </mt-field>

    <mt-button class="submit" type="primary" @click="submit" :class="{active:canSend}">绑定</mt-button>

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
    computed: {
      canSend(){
        var a=false;
        if((/^1[34578]\d{9}$/.test(this.phone)&&this.yzm)){
          a=true
        }
        return a
      },
      login(){
       return this.$store.state.login
      }
    },
    components: {},
    watch: {},
    methods: {
      getyzm(){
        if(!(/^1[34578]\d{9}$/.test(this.phone))){
            this.$toast('请输入正确手机号')
            return
        }
        if(this.yzmsend=='点击获取'||this.yzmsend=='重新获取'){
          ajaxGet({
            url:'mscode/',
            data:{
              iphone:this.phone,
            },
            success:(data)=>{
              if(data.msg=='success'){
                  this.sendyzm=data.verify
                  this.$toast('验证码发送成功');
                  this.saveTime=60;
                  this.daojishi();
              }else{
                this.$toast(data.msg)
              }
            },
            error:()=>{
              this.$toast('网络异常')
            }
          })
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
      },
      submit(){
        if(!(/^1[34578]\d{9}$/.test(this.phone))){
          this.$toast('请输入正确手机号')
          return
        }
        if(!this.yzm){
          this.$toast('请输入手机验证码')
          return
        }
        if(this.yzm!=this.sendyzm){
          this.$toast('验证码不正确')
          return
        }
        ajaxPost({
          url:'usermsCode/',
          data:{
            iphone:this.phone,
            openid:this.login.openid
          },
          success:(data)=>{
            if(data.msg=='success'){
              this.$toast('绑定成功');
              window.localStorage.setItem('userPhone',this.phone)
              this.$store.commit('userPhoneChange',this.phone);

            }else{
              this.$toast(data.msg)

            }
            history.go(-1)
          },
          error:()=>{
            this.$toast('网络异常')
          }
        })
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
    }
};
</script>

