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
        style="position: absolute;top: 1.2rem;bottom: 0;width: 100%"
      >

          <noContent></noContent>
      </loadMore>

    </div>
</template>

<script type="text/ecmascript-6">
  import loadMore from '../zujian/loadMore.vue';
  import noContent from '../zujian/noContent.vue';
  export default {
    name: '',
    props: {},
    data () {
        return {
            list:[],
            allLoad:false,
        }
    },
    computed: {},
    components: {
      loadMore,noContent
    },
    watch: {},
    methods: {
      loadBottom(){
        this.$nextTick(()=>{
          this.$refs.loadmore.onBottomLoaded()
          this.allLoad=true
        })
      },
      back(){
          history.go(-1)
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){

    }
};
</script>

<style scoped lang="less">

</style>
