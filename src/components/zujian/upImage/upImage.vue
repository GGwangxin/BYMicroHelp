<style>
  #upImage .send_pic{
    overflow: hidden;
    margin-top: 0.2rem;
  }
  #upImage .send_pic .upBtn{
    width: 2.3rem;
    height: 2.3rem;
    background:url("img/icon_plas2.png") no-repeat;
    background-size: 100%;
    float: right;
    margin-right: 0.65rem;
  }
  #upImage .send_pic .uped{
    width: 10.2rem;
    float: left;
    margin-left: 0.3rem;
  }
  #upImage .send_pic .uped .onlyOne{
    width: 2.3rem;
    height: 2.3rem;
    position: relative;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
    float: left;
  }
  #upImage .send_pic .uped .onlyOne:nth-child(4n){
    margin-right: 0;
  }
  #upImage .send_pic .uped .onlyOne img{
    width: 100%;
    height: 100%;
  }
  #upImage .send_pic .uped .onlyOne .del{
    position: absolute;
    top:0.1rem;
    right: 0.1rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: url('img/del.png') center center no-repeat;
    background-size: 0.4rem 0.4rem;
  }
  #upImage .upBtn{
    width: 100%;
    height: 100%;

  }
</style>
<template>
      <div id="upImage">
        <div class="send_pic">
          <!--<ul class="uped" >-->
          <transition-group name="list" tag="ul" class="uped">
            <li v-for="(n,i) in list.images" :key="n.src" class="onlyOne">
              <img class="preview-img"  :src="n.src" height="100" @click="$preview.open(i,list.images)">
              <span class="del" @click="delImages(i)"></span>
            </li>
            <li class="upBtn onlyOne" :key="'up'" @click="getPic">
              <!--<div class="upBtn">-->

              <!--</div>-->
            </li>
          </transition-group>

        </div>

        <!--<input type="file" capture="camera" accept="image/*" id="loadPicture" ref="loadPicture" @change="onFileChange($event)" />-->
        <input type="file" capture="camera" accept="image/*" id="haha" ref="paizhao" @change="onFileChange($event)" style="display:none;width: 0px;height: 0px;opacity: 0">
        <input type="file"  accept="image/*" id="haha1" ref="upImage" @change="onFileChange($event)" style="display:none;width: 0px;height: 0px;opacity: 0">
        <canvas id="myCanvas" style="display: none;position: absolute" ref="myCanvas" :width="canvasWidth" :height="canvasheight" ></canvas>
        <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
        </mt-actionsheet>
      </div>

</template>

<script type="text/ecmascript-6">
//    import headHeader from  '../../headHeader/headHeader';

    export default {
        props: {
            value:Object|Array
        },
        data(){
            return {
                list:{
                  images:[]
                },
              canvasWidth:0,
              canvasheight:0,
              sheetVisible:false,
              actions:[

              ]
            }
        },
        computed: {},
        methods: {
          back(){
              if(this.sheetVisible){
                  setTimeout(()=>{
                    this.sheetVisible=false;
                  },0)
              }
          },
          getCamera(){
            var me=this;
            var captureSuccess = function(mediaFiles) {
              me.onFileChange1(mediaFiles)
            };

            var captureError = function(error) {
//              layer.msg('拍照失败')
            };

            navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});

          },
//          getPic(){
//            this.$refs.haha.click();
//          },
          getPic(){
//              this.actions=[
//                {
//                  name:'从相册选择',
//                  method:this.selImage
//                },
//                {
//                  name:'拍照',
//                  method:this.paizhao
//                },
//              ]
//              this.$nextTick(()=>{
//                this.sheetVisibleToggle();
//              })
            this.selImage();
          },
          paizhao(){
            if(this.$pingtai!='app'){
              this.$refs.paizhao.click();
            }else{
              var me=this;
              var captureSuccess = function(mediaFiles) {
                me.onFileChange1(mediaFiles)
              };
              var captureError = function(error) {

              };
              navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
            }

          },
          selImage(){
            if(this.$pingtai!='app'){
              this.$refs.upImage.click();
            }else{
              this.$refs.paizhao.click();
            }
          },
          sheetVisibleToggle(){
            this.sheetVisible=!this.sheetVisible
          },
          onFileChange(a){
            var file=a.target.files[0];
            var reader=new FileReader();
            this.$indicator.open();
            reader.onload=()=>{
              var url=reader.result;
              var img = new Image();
              img.src = url;
              img.onload=()=>{
//                Indicator.close();
                this.trans(img)
              }
            }
            reader.readAsDataURL(file);
          },
          onFileChange1(a){
            var file=a[0].fullPath;
            var img = new Image();
            img.src = file;
            this.$indicator.open();
            img.onload=()=>{
//              Indicator.close();
              this.trans(img)
            }
          },
          trans(img,i){
            if(img.height>=768||img.width>=768){
              if(img.height<img.width){
                this.canvasWidth=768;
                this.canvasheight=img.height/img.width*768;
              }else{
                this.canvasheight=768;
                this.canvasWidth=img.width/img.height*768;
              }
            }else{
              this.canvasheight=img.height;
              this.canvasWidth=img.width
            }


            this.$nextTick(()=>{
              var canvas=this.$refs.myCanvas;
              var ctx=canvas.getContext('2d');
              var quality = 0.8; //image quality
              ctx.drawImage(img,0,0,this.canvasWidth,this.canvasheight);
              // 绘制水印
//              ctx.font="22px SimSun";
//              ctx.fillStyle = "rgba(255,255,255,1)";
//              ctx.fillText(now,(this.canvasWidth-ctx.measureText(now).width)/2,50);
//              ctx.fillText(this.positionPole,(this.canvasWidth-ctx.measureText(this.positionPole).width)/2,100);

              var data=canvas.toDataURL("image/jpeg",quality);
              ajaxPost({
                url:'http://'+window.localStorage.getItem('eduds')+'/'+'Jytssmweb/jyt/uploadfile/uploadImg',
                data: JSON.stringify({
                  imgStr:data,
                  zone :window.localStorage.getItem('dishi')
                }),
                success: (data) => {
                  this.list.images.push({
                    w:this.canvasWidth,
                    h:this.canvasheight,
                    imageUrl:data.data,
                    toimageUrl:'',
                    tofilename:'',
                    src:'http://'+window.localStorage.getItem('eduds')+'/'+'downloads/'+data.data
                  })
                  this.$refs.upImage.value=null;
                  this.$refs.paizhao.value=null;
                  this.changeImage();
                  this.$indicator.close()
                },
                error:()=>{
                  this.$toast('网络异常')
                  this.$refs.upImage.value=null;
                  this.$refs.paizhao.value=null;
                  this.$indicator.close()

                }
              })
            })
          },
          delImages(i){
              this.list.images.splice(i,1)
              this.changeImage();
          },
          changeImage(){
            this.$emit('input',this.list)
          }
        },
        components: {},
        watch: {},
        beforeCreated(){

        },
        destroyed() {
          document.removeEventListener("backbutton", this.back, false);
        },
        mounted() {
          document.addEventListener("backbutton", this.back, false);
        },
        created(){
            this.list=this.value
        },
    }
</script>

<style>


</style>
