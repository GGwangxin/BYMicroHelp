<style lang="less">
  #editRent .mint-cell:first-child .mint-cell-wrapper {

    background-size:100% 0px!important;
  }
  .mintui-field-select:before{
    content: '\e656';
  }
  .mintui-field-mianji:before{
    content: '㎡';
    font-family: "arial";
  }
 #editRent .picker-item.picker-selected{
    color: @base!important;
  }
  #editRent .mint-datetime-cancel{
    color: #666;
   }
  #editRent .mint-datetime-confirm{
    color: @base!important;
  }
  #editRent .mint-radiolist .mint-cell{
    display: inline-block;
  }
  #editRent .mint-radio-input:checked + .mint-radio-core {
    background-color: @base;
    border-color: @base;
  }
  #editRent .mint-radiolist .mint-cell-wrapper{
    background-size: 120% 0px!important;
  }
  #editRent .mint-radiolist .mint-cell:last-child{
    background-size: 120% 0px!important;
  }
</style>
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

    .cont{
      width: 100%;
      padding-top: 0.3rem;
      background: #f8f8f8;
    }
    .adress{
      position: relative;
    }
    .cover{
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      background: transparent;
    }
    .title{
      padding: 0.4rem;
      color: @base;
      font-size: 0.4rem;
      line-height: 0.55rem;
    }
    .zhengjian{
      line-height:56px;
      width: 100%;
      overflow: hidden;
      span{
        float: left;
        font-size: 16px;
        color: #000;
        line-height:56px
      }
    }
  .submit{
    background: #CCCCCC;
    width: 10rem;
    margin: 0.4rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .submit.active{
    background: @base;
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
        <div class="file">
          <mt-field class="address" ref="address" label="地址" placeholder="请填写房源详细地址" v-model="shuju.address"></mt-field>
        </div>
        <div class="cont"></div>
        <div class="file">
          <mt-field class="huxing" ref="huxing"  @click.native="selectAddress(1,$event)" state="select" label="户型"   placeholder="请选择您的户型"  v-model="huxingstring"></mt-field>
          <mt-field class="mianji" ref="mianji" label="面积" state="mianji"  placeholder="请输入您的房屋面积" type="number" v-model="shuju.mianji"></mt-field>
          <mt-field class="price"  ref="price" label="价格"   placeholder="请输入价格,如5000/年,5000元"  v-model="shuju.price"></mt-field>
          <mt-field class="flooer" ref="flooer" @click.native="selectAddress(2,$event)" state="select" label="楼层"   placeholder="请选择您的楼层"  v-model="flooerstring"></mt-field>
          <mt-field class="zhuangxiu" ref="zhuangxiu"  @click.native="selectAddress(3,$event)" state="select" label="装修"   placeholder="请选择房屋装修"  v-model="zhuangxiustring"></mt-field>
        </div>
        <div class="cont"></div>
        <mt-field class="userName"  ref="userName" label="称呼"  placeholder="请输入称呼,如：李先生" v-model="shuju.username"></mt-field>
        <div class="cont"></div>
        <div class="title">
          选填项
        </div>

        <mt-cell title="是否有证件">
          <mt-radio
            v-model="shuju.hascord"
            :options="hasCordArray">
          </mt-radio>
        </mt-cell>
        <transition
          name="aa"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <mt-cell title="多选" v-show="shuju.hascord==1">
            <mt-checklist
              v-model="shuju.cardtype"
              :options="cardTypeArray">
            </mt-checklist>
          </mt-cell>
        </transition>

        <up-image v-model="shuju.imglist" style="background: #fff"></up-image>
        <mt-button class="submit" type="primary" @click="submit" :class="{active:canSend}">立即发布</mt-button>
      </div>
      <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
        <div class="picker-toolbar">
          <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
          <span class="mint-datetime-action mint-datetime-confirm" @click="sureaddress">确定</span>
        </div>
        <mt-picker :slots="popupList" @change="onCityChange" :visible-item-count="3"></mt-picker>
      </mt-popup>
    </div>
</template>

<script type="text/ecmascript-6">
  import upImage from '../zujian/upImage/upImage.vue';
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
          shuju:{
            address:'',
            huxing:[],
            mianji:'',
            price:'',
            flooer:[],
            zhuangxiu:[],
            username:"",
            hascord:'',
            cardtype:[],
            imglist:{
              images:[]
            }
          },
          title:'',
          userPhone:'',
          popupVisible:false,
          maxlen:15,
          popupList:[],
          popupArray:[],
          popupIndex:'',
          huxingSlots :[
            {
              flex: 1,
              values: this.getArr(this.maxlen,'室'),
              className: 'slot1',
              textAlign: 'center'
            }, {
              flex: 1,
              values: this.getArr(this.maxlen,'厅'),
              className: 'slot2',
              textAlign: 'center'
            }, {
              flex: 1,
              values: this.getArr(this.maxlen,'卫'),
              className: 'slot3',
              textAlign: 'center'
            }
          ],
          flooerSlots:[
            {
              flex: 1,
              values: this.getArr(50,'楼'),
              className: 'slot1',
              textAlign: 'center'
            },
          ],
          zhuangxiuSlots:[
            {
              flex: 1,
              values: ['毛坯', '普通装修', '精装修', '豪华装修'],
              className: 'slot1',
              textAlign: 'center'
            },
          ],
          huxing:[],
          flooer:[],
          zhuangxiu:[],
          huxingstring:'',
          flooerstring:'',
          zhuangxiustring:'',
          imgList:[],
          //   是否有证件
          hasCordArray:[
            {
              label:'有',
              value:'1'
            },
            {
              label:'无',
              value:'2'
            }
          ],
          cardTypeArray:[
            {
              label:'房屋产权证',
              value:'1'
            },
            {
              label:'不动产权证',
              value:'2'
            },
            {
              label:'小产权证',
              value:'3'
            },
            {
              label:'使用权',
              value:'4'
            },
          ]
        }
    },
    computed: {
      canSend(){
        var a=false;
        if(this.shuju.address
          &&this.shuju.huxing.length>0
          &&this.shuju.mianji>-1
          &&this.shuju.username
          &&this.shuju.flooer.length>0
          &&this.shuju.zhuangxiu.length>0){
          a=true
        }
        return a
      },
      login(){
          return this.$store.state.login;
      },
      iphone(){
          return this.$store.state.userPhone
      }
    },
    components: {upImage},
    watch: {},
    methods: {
      back(e){
        history.go(-1)
      },
      selectAddress(n, e){

        (e&&e.target.tagName=='INPUT')&&e.target.blur();
        if(n==1){
            this.popupList=this.huxingSlots
            this.$nextTick(()=>{
              this.shuju.huxing.length&&this.picker.setValues(this.shuju.huxing)

            })
          }else if(n==2){
            this.popupList=this.flooerSlots
            this.$nextTick(()=>{
              this.shuju.flooer.length&&this.picker.setValues(this.shuju.flooer)
            })
          }else{
            this.popupList=this.zhuangxiuSlots
            this.$nextTick(()=>{
              this.shuju.zhuangxiu.length&&this.picker.setValues(this.shuju.zhuangxiu)

            })
          }
          this.popupIndex=n;
          this.popupVisible=true
      },
      cancleaddress(){
        this.popupVisible=false

      },
      sureaddress(){
        this.popupVisible=false
        if(this.popupIndex==1){
          this.shuju.huxing=this.popupArray.length>0?this.popupArray:['一室','一厅','一卫']
          this.huxingstring=this.ArrToString(this.shuju.huxing)
        }else if(this.popupIndex==2){
          this.shuju.flooer=this.popupArray.length>0?this.popupArray:['一楼']
          this.flooerstring=this.ArrToString(this.shuju.flooer)
        }else{
          this.shuju.zhuangxiu=this.popupArray.length>0?this.popupArray:['毛坯']
          this.zhuangxiustring=this.ArrToString(this.shuju.zhuangxiu)

        }
      },
      onCityChange(picker, values){
        this.picker=picker
        this.popupArray=values;

      },
      getArr(maxlen, n){
        var arr=[];
        maxlen=maxlen||15
        for(var i=0; i<maxlen;i++){
          arr.push((i+1)+n)
        }
        return arr;
      },
      ArrToString(arr){
        var str=''
        arr.forEach((n, i)=>{
          str+=n
        })
        return str
      },
      getInput(a){

      },
      submit(){
        if(!this.shuju.address){
            this.$toast('请填写房源地址');
            this.$refs.address.$refs.input.focus()
            return
        }
        if(this.shuju.huxing.length==0){
          this.$toast('请选择户型');
          this.$refs.huxing.$refs.input.focus()
          this.selectAddress(1)
          return
        }
        if(!this.shuju.mianji){
          this.$toast('请填写房屋面积');
          this.$refs.mianji.$refs.input.focus()
          return
        }
        if(!this.shuju.price){
          this.$toast('请填写价格');
          this.$refs.price.$refs.input.focus()
          return
        }
        if(this.shuju.flooer.length==0){
          this.$toast('请选择楼层');
          this.$refs.flooer.$refs.input.focus()
          this.selectAddress(2)
          return
        }
        if(this.shuju.zhuangxiu.length==0){
          this.$toast('请选择装修方式');
          this.$refs.zhuangxiu.$refs.input.focus()
          this.selectAddress(3)
          return
        }
        if(!this.shuju.username){
          this.$toast('请填写称呼');
          this.$refs.userName.$refs.input.focus()
          return
        }
        //选填的两项
        if(this.shuju.hascord!=1){
          this.shuju.codearr=[0]
        }else{
          this.shuju.codearr=this.shuju.cardtype
        }
        this.shuju.iphone=this.iphone;
        this.shuju.openid=this.login.openid;
        var a=this.title;
        this.shuju.lxtype=a=='二手房出售'?1:a=='二手房出租'?2:'商铺出售'?3:4;
        ajaxPost({
          url:'uptext/',
          data:this.shuju,
          success:(data)=>{
            if(data.msg=='success'){
              this.$toast('发布成功')
              this.$router.push('/myCenter')
            }else{
              this.$toast(data.msg)
            }
          },
          error:()=>{
            this.$toast('网络异常')
          }
        })
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
        var a=parseQueryString(window.location.hash);
        this.title=this.type[a.type-1]+this.sell[a.sell-1]
    }
};
</script>

