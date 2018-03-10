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
                      window.sessionStorage.setItem('login',JSON.stringify(data.data))
                      this.$store.commit('loginChange',JSON.parse(window.sessionStorage.getItem('login')));
                      this.$router.replace('/')
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


