<style scoped lang="less">
  .guidanceTosearch{
    background:url(img/search1.png) no-repeat center center;
    background-size:0.59rem 0.57rem;
  }
</style>
<template>
   <div id="houseList">
      <header>
        <a class="mt_left" @click="back()"></a>
        <a class="mt_center header_name">{{typeList[tid]}}</a>
        <a class="mt_right">
          <router-link class="guidanceTosearch" to="" tag="span"></router-link>
        </a>
      </header>
     <loadMore
       ref="loadmore"
       :bottom-method="loadBottom"
       :bottom-all-loaded="allLoad"
       style="position: absolute;top: 1.2rem;bottom: 0;width: 100%"
     >
       <div v-if="list.length">
         <one-house v-for="(n,i) in list" :key="i" :shuju="n" :type="tid"></one-house>
       </div>
      <div v-else>
        <noContent></noContent>
      </div>
     </loadMore>
   </div>
</template>

<script type="text/ecmascript-6">
  import oneHouse from './oneHouse.vue';
  import loadMore from '../zujian/loadMore.vue';
  import noContent from '../zujian/noContent.vue';
  export default {
    name: '',
    props: {},
    data () {
        return {
          tid:0,
          allLoad:false,
          list:[],
          page:1,
          index:0,
          typeList:[
            '新房',
            '二手房',
            '租房'
          ],
          typeList:{
              '156':'新房',
              '158':'二手房',
              '159':'租房',
          }
        }
    },
    computed: {},
    components: {
      oneHouse,loadMore,noContent
    },
    watch: {},
    methods: {
      back(){
          this.$router.push('/')
      },
      loadBottom(){
        ajaxGet({
          data:{
            page:this.page,
            page_size:8,
            pid:this.tid

          },
          url:'cmslist/',
          success:(data)=>{
            this.list=data;
            this.$nextTick(()=>{
              this.$refs.loadmore.onBottomLoaded()
              if(data.length<8){
                this.allLoad=true
              }else{
                this.allLoad=false
              }
            })
            this.page++;
          },
          error:()=>{
            this.$toast('网络异常');
          }
        })

      },
    },
    beforeCreate() {},
    mounted() {},
    created(){
        var tid=window.location.href.split('?tid=')[1];
        this.tid=tid
    }
};
</script>


