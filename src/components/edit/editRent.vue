<style scoped lang="less">
    #editRent .content{
      margin-top: 1.2rem;
    }
    .name .mint-cell-text:before{
      content: '\e67a';
      color: @base;
      margin-right: 0.2rem;
    }
    .phone .mint-cell-text:before{
      content: '\e623';
      color: @base;
      margin-right: 0.2rem;
    }
</style>

<template>
    <div id="editRent">
      <header>
        <a class="mt_left " @click="back()"></a>
        <a class="mt_center header_name">{{this.title}}</a>
        <a class="mt_right">

        </a>
      </header>
      <div class="content">
        <mt-field class="name" label="信息描述" rows="3" placeholder="请输入信息描述" type="textarea" v-model="userName"></mt-field>

        <mt-field class="name" label="联系人" placeholder="请填写联系人姓名" v-model="userName"></mt-field>
        <mt-field class="phone" label="电话号码" state="success"  placeholder="请填写联系人电话号码" type="tel" v-model="userPhone"></mt-field>
        <mt-field label="验证码">
          <span>重新发送</span>
        </mt-field>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {
          sell:[
            '出售',
            '出租'
          ],
          type:[
            '二手房',
            '商铺'
          ],
          title:'',
          userName:"",
          userPhone:'',

        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      back(){
        history.go(-1)
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
        var a=parseQueryString();
        this.title=this.sell[a.sell-1]+this.type[a.type-1]
    }
};
</script>

