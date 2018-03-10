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
        :topMethod = 'loadUp'
        @freshList = 'freshList'
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
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                number:'10000+',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655354795&di=81d12c34edbac1e404120d0e93ac4a00&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2FBizhi%2Fmn53_12802.jpg'
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                number:'10000+',
                img:''
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                number:'10000+',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655354795&di=81d12c34edbac1e404120d0e93ac4a00&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2FBizhi%2Fmn53_12802.jpg'
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                number:'10000+',
                img:''
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                number:'10000+',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655354795&di=81d12c34edbac1e404120d0e93ac4a00&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2FBizhi%2Fmn53_12802.jpg'
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                number:'10000+',
                img:''
              },{
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                number:'10000+',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655354795&di=81d12c34edbac1e404120d0e93ac4a00&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2FBizhi%2Fmn53_12802.jpg'
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                number:'10000+',
                img:''
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                number:'10000+',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655354795&di=81d12c34edbac1e404120d0e93ac4a00&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2FBizhi%2Fmn53_12802.jpg'
              },
              {
                id:78896233,
                title:'少年迷恋美女主播 为送礼物盗刷父亲信用卡上万元',
                content:'未来网燃新闻 一名高中辍学少年沉迷网络，为了送礼给美女主播，竟盗刷父亲的信用卡上万元，窃取家人的手机及现金后离家出走。父亲心痛求助，警方找到这名少年后劝其返回正途，并将少年送入管教所。警方表示，3月初，这名少年的父亲向警方求助，称17岁儿子盗刷他的信用卡10余笔，偷走家人的2部手机及3万多元现金，目前不知去向。他还表示，儿子就读国中时开始结识网友，逐渐出现偏激行为，父母早已管不动。',
                publisher:'酒丽敏(EN010)',
                header:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520655716300&di=b8870bc03256ed3ca1163cbba4c18770&imgtype=0&src=http%3A%2F%2Fwx4.sinaimg.cn%2Fthumb150%2F8d95d355gy1fkqsw661ghj20m80m577h.jpg',
                number:'10000+',
                img:'http://img1.imgtn.bdimg.com/it/u=3683106941,2992842744&fm=27&gp=0.jpg'
              }
            ],
            allLoad:false,
        }
    },
    computed: {},
    components: {
      loadMore,noContent,articleList
    },
    watch: {},
    methods: {
      loadUp(){
          console.log('-----')
      },
      freshList(){
        console.log(this.list.length)
      },
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
.articleContent{
  margin-top: 0.3rem;
}
</style>
