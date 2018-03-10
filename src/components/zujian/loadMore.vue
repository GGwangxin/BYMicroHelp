<style scoped lang="less">
    .loadMore{
      text-align: center;
    }
    .loadMoreFooter{
      font-size: .44rem;
      color: #666;
      display: block;
      line-height: 1rem;
      padding: 0 .3rem;
      transition: all .3s;
    }
</style>
<template>
    <div class="loadMore" ref="loadMore">
      <div ref="loadMoreContent">
        <div class="loadMoreTop" ref="loadMoreTop" v-if="topMethod">
          <wxSpinner></wxSpinner>
        </div>
        <slot></slot>
        <div class="loadMoreFooter" v-if="!bottomAllLoaded">
          <wxSpinner></wxSpinner>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
  import wxSpinner from  './wx-spinner.vue'
  import IScroll from  'better-scroll'
  export default {
    name: '',
    props: {
      bottomMethod: {
        type: Function
      },
      topMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data () {
        return {
            endDistance:0,
            rangeDistance:10,//在10像素时候开始执行回调
            isLoadingBottom:false,
            startScrollTime:0
        }
    },
    computed: {},
    components: {
      wxSpinner
    },
    watch: {},
    methods: {
      onBottomLoaded(){
        this.initScroll();
      },
      initScroll(){
        if(this.playList){
          this.playList.refresh();
          if(!this.bottomAllLoaded){
            this.isLoadingBottom=false
          }
        }else{
          this.playList=new IScroll(this.$refs.loadMore,{
            click:true,
            probeType: 3
          })
          this.playList.scrollTo(0,-this.$refs.loadMoreTop?this.$refs.loadMoreTop.getBoundingClientRect().height:0);
          this.scrollEvent();
        }
        setTimeout(()=>{
          $('body').removeClass('iscroll')

        },500)
        this.endDistance=this.$refs.loadMore.getBoundingClientRect().height-this.$refs.loadMoreContent.getBoundingClientRect().height
      },
      refresh(){
        this.playList.refresh();
      },
      scrollEvent(){
        this.playList.on('scrollStart', ()=> {
            console.log(this.playList)
            this.startScrollTime=new Date().getTime()
        })
        this.playList.on('scroll', (pos)=>{
            //这里判断正在加载中的话，再继续向下不会有回弹效果
//            if(pos.y<=this.endDistance&&!this.bottomAllLoaded){
//            }
//            this.playList.moved=false
            console.log(this.playList.directionY)
            console.log(this.playList.maxScrollY)
            if(this.playList.directionY >=0  && pos.y < this.playList.maxScrollY+10){
              this.$emit('loadDown')
                console.log('down*******************************')
            }
            if(!this.isLoadingBottom&&pos.y-this.rangeDistance<=this.endDistance){
              if(new Date().getTime()-this.startScrollTime>400){
//                  $('body').addClass('iscroll')
                  this.isLoadingBottom=true;
                  this.doLoadBottom();
                }
            }
        });
        /***
         * @description  bscoller 添加上拉到50px时 触发
         * @augments pos [Object] {x:x,y:y}
         * @returns 暴露父组件freshList方法
         * */
        this.playList.on('touchEnd',pos=>{
          if(pos.y > 50){
            this.$emit('freshList')
          }
        })
      },
      doLoadBottom(){
        if (typeof this.bottomMethod === 'function') {
          this.bottomMethod();
        }
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      this.doLoadBottom();
    }
};
</script>


