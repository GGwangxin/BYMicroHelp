import Vue from 'vue'


//过滤器
Vue.filter('time', function (value) {
  var diff = new Date().getTime() - value;
  if (diff < 60000) {
    return '刚刚';
  } else if (diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前';
  } else if (diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前';
  } else if (diff < 86400000 * 2) {
    return '一天前';
  } else {
    var time = new Date(value);
    var m = time.getMonth() + 1;
    var d = time.getDate();
    return (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
  }
})
//
Vue.filter('houer', function (value) {
  var t = new Date(value);
  return (t.getHours() > 9 ? t.getHours() : '0' + t.getHours()) + ':' + (t.getMinutes() > 9 ? t.getMinutes() : '0' + t.getMinutes())
})
  Vue.filter('Max', function (value) {

  return value>99?'99+':value
})
//   时间=》01:20
Vue.filter('playTime',function(n){
  var fen = Math.floor(n / 60)
  var miao = Math.floor(n % 60)
  return (fen > 9 ? fen : '0' + fen) + ':' + (miao > 9 ? miao : '0' + miao);
})


Vue.filter('timeTrans',function(a){

  var diff = new Date().getTime() - a;
  if (diff < 60000) {
    return '刚刚';
  } else if (diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前';
  } else if (diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前';
  } else if (diff < 86400000 * 2) {
    return '一天前';
  } else {
    var time = new Date(a);
    var m = time.getMonth() + 1;
    var d = time.getDate();
    return (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
  }
})
Vue.filter('url',function(a){
  return decodeURIComponent(a)
})

Vue.filter('NtoL',function(a){
    a=parseFloat(a);
    var b;
    switch (a){
      case 0:
        return b='A';
        break;
      case 1:
        return b='B ';
        break;
      case 2:
        return b='C';
        break;
      case 3:
        return b='D';
        break;
      case 4:
        return b='E';
        break;
      case 5:
        return b='F';
        break;
      case 6:
        return b='G';
        break;
      case 7:
        return b='H';
        break;
      case 8:
        return b='I';
        break;
      case 9:
        return b='J';
        break;
      case 10:
        return b='K';
        break;
      case 11:
        return b='L';
        break;
      case 12:
        return b='M';
        break;
      case 13:
        return b='N';
        break;
      default:
        return b='·'
    }
})
