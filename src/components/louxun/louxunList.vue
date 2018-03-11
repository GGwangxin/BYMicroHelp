<template>
    <div>
      <header>
        <a class="mt_left" @click="back()"></a>
        <a class="mt_center header_name">楼讯</a>
        <a class="mt_right">

        </a>
      </header>
      <loadMore
        ref="loadmore"
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoad"
        style="position: absolute;top: 0.5rem;bottom: 0;width: 100%"
      >

          <noContent v-show='!list.length'></noContent>
          <articleList :articeList = 'list' class="articleContent"></articleList>
      </loadMore>

    </div>
</template>

<script type="text/ecmascript-6">
  import loadMore from '../zujian/loadMore.vue';
  import noContent from '../zujian/noContent.vue';
  import articleList from './Article'
  export default {
    name: '',
    props: {},
    data () {
        return {
            list:[

            ],
            allLoad:false,
            page:1,
            pageSize:8,
            isCanLoad:true
        }
    },
    computed: {},
    components: {
      loadMore,noContent,articleList
    },
    watch: {

    },
    methods: {
      loadBottom(){

        ajaxGet({
          data:{
            page:this.page,
            page_size:this.pageSize
          },
          url:'zixunlist/',
          success:(data)=>{
            if(data.code === 0){
              this.list =this.list.concat(data.data) ;
            }
            this.$nextTick(()=> {
              this.$nextTick(() => {
                this.$refs.loadmore.onBottomLoaded()
                if (data.data.length < this.pageSize) {
                  this.allLoad = true
                } else {
                  this.allLoad = false
                }
              })
              this.page++;
            })
          },
          error:()=>{
            this.allLoad = true
            this.$toast('网络异常');
          }
        })
      },
      back(){
          history.go(-1)
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      //this.freshList();
    }
};
</script>

<style scoped lang="less">
.articleContent{
  margin-top: 0.3rem;
}
</style>
