<style scoped lang="less">

</style>
<template>
  <div id="login">

  </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        props: {},
        data () {
            return {}
        },
        computed: {},
        components: {},
        watch: {},
        methods: {
            login:function(){
                ajaxGet({
                  url:'wxlogin/',
                  data:{
                    code:window.parseQueryString(window.location.href).code,
                    state:'123'
                  },
                  success:(data)=>{
                    if(data.msg=='success'){
                      window.localStorage.setItem('login',JSON.stringify(data.data))
                      this.$store.commit('loginChange',JSON.parse(window.localStorage.getItem('login')));

                      ajaxPost({
                        url: 'wxuser/',
                        data: data.data,
                        success: (data) => {
                          this.$router.replace('/')
                        },
                        error: () => {
                          this.$router.replace('/')
                        }
                      })
                    }else{
                      this.$toast(data.msg)
                    }
                  },
                  error:()=>{

                  }
                })
            }
        },
        beforeCreate() {
        },
        mounted() {
        },
        created(){
          this.login();
        }
    };
</script>


