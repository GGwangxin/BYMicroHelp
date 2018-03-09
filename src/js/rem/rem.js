new function () {
  var _self = this;
  _self.width = 1080;//设置默认最大宽度
  _self.fontSize = 100;//默认字体大小
  _self.widthProportion = function (){
    var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
    return p > 1 ? 1 : p < 0.2 ? 0.2 : p;
  };
  _self.changePage = function () {
    var a=_self.widthProportion() * _self.fontSize;
    document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + a + "px !important");
    if(parseInt(window.getComputedStyle(document.documentElement)["fontSize"])==parseFloat(window.getComputedStyle(document.documentElement)["fontSize"])){
      document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + Math.ceil(a) + "px !important");
    }
    if(a!=parseFloat(window.getComputedStyle(document.documentElement)["fontSize"])){
      document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + a/(parseFloat(window.getComputedStyle(document.documentElement)["fontSize"])/a) + "px !important");
    }
  }
  _self.changePage();
  window.addEventListener('resize', function () {
    _self.changePage();
  }, false);
};

