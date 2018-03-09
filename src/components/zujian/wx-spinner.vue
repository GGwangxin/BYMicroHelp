<style scoped lang="less">
  .mint-spinner-triple-bounce-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .mint-spinner-triple-bounce-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .mint-spinner-triple-bounce-bounce1,
  .mint-spinner-triple-bounce-bounce2,
  .mint-spinner-triple-bounce-bounce3 {
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: mint-spinner-triple-bounce 1.4s infinite ease-in-out both;
    animation: mint-spinner-triple-bounce 1.4s infinite ease-in-out both;
    background: @base;
  }
  @-webkit-keyframes mint-spinner-triple-bounce {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
  @keyframes mint-spinner-triple-bounce {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
<template>
  <div class="mint-spinner-triple-bounce">
    <div class="mint-spinner-triple-bounce-bounce1" style="width: 9.33333px; height: 9.33333px; "></div>
    <div class="mint-spinner-triple-bounce-bounce2" style="width: 9.33333px; height: 9.33333px; "></div>
    <div class="mint-spinner-triple-bounce-bounce3" style="width: 9.33333px; height: 9.33333px; "></div>
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


