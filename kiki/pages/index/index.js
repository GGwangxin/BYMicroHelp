//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    hidden: false
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })

    /*轮播图*/
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/banner/list',
      data: {
        key: 'mallName'
      },
      success: function (res) {
        that.setData({
          banners: res.data.data
        });
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/cms/news/list',
      data: {
        categoryId: '1161'
      },
      success: function (res) {
        that.setData({
          goods: res.data.data
        });
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/cms/news/list',
      data: {
        categoryId: '1118'
      },
      success: function (res) {
        that.setData({
          wudao: res.data.data,
           hidden: true
        });
      }
    })
    
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/video/video?id=" + e.currentTarget.dataset.id
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  //转发
  onShareAppMessage: function () {

  }
})
