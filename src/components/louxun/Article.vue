<template>
    <div>
       <div v-for='(val,index) in articeList' v-if='articeList.length' class="item" @click='clickItem(val.id)'>
         <div class="msg">
           <p class="title">{{val.title}}</p>
           <p class="content" v-if='!val.img'>{{val.content}}</p>
           <p class="bottomMsg" >
             <img src='./timg.jpg'><span>管理员 · {{val.islink}}次阅读</span>
           </p>
          </div>
         <div class="pic" v-if='val.img'>
           <img v-lazy="val.imgurl">
         </div>
       </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import loadMore from '../zujian/loadMore.vue';
  import noContent from '../zujian/noContent.vue';
  export default {
    name: '',
    props: {
      articeList:{
        type:Array,
        dafault:[]
      }
    },
    data () {
        return {
            list:[],
            allLoad:false,
        }
    },
    watch: {},
    methods: {
      clickItem(id){
        this.$router.push({
          path:'/articleDetail/'+id
        })
      }
    },
    created(){

    }
};
</script>

<style scoped lang="less">
.item{
  display: flex;
  padding:.5rem 0 .5rem .5rem;
  border-top:1px solid #dddddd;
  .msg{
    flex:1;
    padding-right:0.5rem;
    p.title{
      font-size:.48rem;
      line-height: .7rem;
      text-align: left;
      color: #000000;
      overflow : hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-box-orient :vertical;
      -webkit-line-clamp:2;
    }
    .content{
      font-size:.35rem;
      text-align: left;
      color: #999999;
      margin-top: 0.2rem;
      overflow : hidden;
      text-overflow:ellipsis;
      display: -webkit-box;
      -webkit-box-orient :vertical;
      -webkit-line-clamp:1;
    }
    .bottomMsg{
      font-size:0.3rem;
      color:#999;
      text-align: left;
      margin-top: 0.3rem;
      display: flex;
      align-items:center;
      img{
        width:0.45rem;
        height: 0.45rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }
  };
  .pic{
      flex: none;
      width:3.5rem;
      text-align: right;
      padding-right:.3rem;
      img{
        width:3rem;
        border-radius: 0.2rem;
      }
  }
}
</style>
