require('./rem/rem.js');
require('./jquery-1.11.3.min')
require('./jquery.waypoints.min')
require('./jquery.countup.min')
/*
* 目的是做一个定时器，执行需要的回调函数
* opation:{
*   start:
   * end:
*   duration:300, //动画过度的时间
*   callback:()=>{} //回调
* }*/
window.wxAnimation=function(option){
    var obj={
      start:parseFloat(option.start),
      end:parseFloat(option.end),
      callback:option.callback,
      duration:option.option||300,
      long:(parseFloat(option.end)-parseFloat(option.start))/20,
      moved:0,
      move:function(){
        setTimeout(()=>{
          this.moved++
          this.callback(this.start+this.moved*this.long)
          if(this.moved<20){
            this.move();
          }
        },this.duration/20)
      }
    }
    obj.move();
}

//ajax 请求的公共域名
window.pubUrl='http://fc.bywb0396.com/Api/'

//这个用来获取数据
window.ajaxGet=function(a){
  $.ajax({
    url: (a.url.indexOf('http')!=-1)?a.url:pubUrl+a.url,
    data: a.data,
    type: "get",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // },
    dataType: 'json',
    success:(data)=>{
      a.success(data);
    },
    error:(data)=>{
      a.error&&a.error(data);

    }
  })
}
//这个用来提交数据

window.ajaxPost=function(a){
  $.ajax({
    url: a.url,
    data: a.data,
    type: "post",
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // },
    dataType: 'json',
    success:(data)=>{
      a.success(data);
    },
    error:(data)=>{
      a.error&&a.error(data);

    }
  })

}
