<style>
    #mapContain{
      position: absolute;
      /*top: 1.2rem;*/
      bottom: 0;
      width: 100%;
      height: 100%;
    }
    .lpmark {
      z-index: 10;
      position: absolute;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-pack: center;
      color: #333;
      font-size: 1.4rem;
      padding: 0 10px;
      line-height: 25px;
      white-space: nowrap;
      max-width: 185px;
    }
   .BMapLabel{
      user-select: none;
       background: #f60!important;
       border: 1px solid #f60!important;
       color: #fff;
    }
    .BMapLabel {
      z-index: 10;
      position: absolute;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-pack: center;
      color: #333;
      font-size: 0.4rem;
      padding: 0 10px;
      line-height: 25px;
      white-space: nowrap;
      max-width: 185px;
    }
    .BMapLabel {
      -webkit-box-shadow: 2px 2px 3px #bbb;
      box-shadow: 2px 2px 3px #bbb;
      -webkit-border-radius: 5px;
      border-radius: 5px;
    }
    .BMapLabel strong {
      display: block;
      line-height: 25px;
      height: 25px;
      width: auto;
      max-width: 185px;
      overflow: hidden;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
      color: #fff;
      padding: 0 10px;
    }
    .BMapLabel i {
      position: absolute;
      top: 100%;
      left: 50%;
      height: 14px;
      width: 20px;
      margin: -4px 0 0 -10px;
      background: url('img/icon.png') no-repeat;
      -webkit-background-size: 20px 14px;
      background-size: 20px 14px;
    }
</style>

<template>
    <div id="map">
      <header>
        <a class="mt_left " @click="back"></a>
        <a class="mt_center header_name">地图</a>
        <a class="mt_right">
        </a>
      </header>
      <div ref="map" id="mapContain">

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data () {
        return {
          name:'',
          posx:'',
          posy:''
        }
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      initMap(){
        this.map = new BMap.Map("mapContain");
        var point=new BMap.Point(this.posx,this.posy)
        this.map.centerAndZoom(point,18);
        this.map.enableScrollWheelZoom(true); //启用滚轮放大缩小，默认禁用
        this.map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
        //放大缩小控件
        var navigationControl = new BMap.NavigationControl({
          anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
          // LARGE类型
          type: BMAP_NAVIGATION_CONTROL_LARGE,
          // 启用显示定位
          enableGeolocation: false
        });
        this.map.addControl(navigationControl);
//        var name='尚东第一城'
        var maxLen=(12+6*name.length)>92.5?92.5:(12+6*name.length)
        var opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset: new BMap.Size(-maxLen, -29)

        }
        var label = new BMap.Label('<strong>'+this.name+'</strong><i></i>', opts);  // 创建文本标注对象
        this.map.addOverlay(label);

      },
      back(){
//          this.$router.push('/tatil')
        history.go(-1)
      }
    },
    beforeCreate() {},
    mounted() {},
    created(){
      var a=location.href.split('?name=')[1];
      console.log(a)
      this.name=decodeURIComponent(a.split('&posx')[0])
      this.posx=a.split('&posx=')[1].split('&posy=')[0]
      this.posy=a.split('&posx=')[1].split('&posy=')[1]
      this.$nextTick(()=>{
          console.log(this.posy)
        this.initMap();

      })
    }
};
</script>

