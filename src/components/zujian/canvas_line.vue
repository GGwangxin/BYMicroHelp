<style scoped lang="less">
   canvas {
     width: 100%;
   }
   #cv4 {
     margin-top: -130px;
     width: 100%
   }
</style>

<template>
    <div>
      <canvas id="cv2" width="100%" height="100"></canvas>
      <canvas id="cv4" width="100%" height="200"></canvas>
    </div>
</template>

<script type="text/ecmascript-6">
  var curve=require('./js/canvas')
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
        this.$nextTick(()=>{
          new curve('cv2', 2, 10, 10, 0.1, 'rgba(255,255,255,1)', 0.25);
          new curve('cv4', 2, 30, 10, 0.1, 'rgba(255,255,255,0.2)', 0.25);
        })
    }
};
</script>

