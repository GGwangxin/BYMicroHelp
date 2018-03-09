<style scoped lang="less">
  .toUpCycle_icon{
    display: block;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .toUpCycle{
    transition: all .3s;
  }

</style>
<template>
   <div ref="toUpCycle" class="toUpCycle" :style="{transform:'translateY(-'+translateY+'px)'}">
      <span class="toUpCycle_icon" v-for="(n,i) in list">
          {{n}}
      </span>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {
        shuju:Array
    },
    data () {
        return {
          Iwidth:0,
          index:0,
          translateY:0,
          list:[]
        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      translate(){
          setTimeout(()=>{
            this.index++;
            this.translate();
          },5000)
          this.translateY=this.index*this.Iwidth;
          if(this.index==this.list.length-1){
             setTimeout(()=>{
                if(this.$refs.toUpCycle==undefined){
                    return
                }
                 this.$refs.toUpCycle.style.transition='all 0s'
                 this.index=0;
                 this.translateY=this.index*this.Iwidth;
                 setTimeout(()=> {
                   this.$refs.toUpCycle.style.transition = 'all .3s'
                 },100)
             },300)
          }
      },
      makeArr(){
          var a=this.shuju[0];
          var arr=this.shuju;
          arr.push(a)
          this.list=arr;
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
        console.log(123)
      this.makeArr();
      this.$nextTick(()=>{
        this.Iwidth=this.$refs.toUpCycle.parentNode.getBoundingClientRect().height;
        this.translate();
      })
    }
};
</script>

