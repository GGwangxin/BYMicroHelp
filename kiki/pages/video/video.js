// pages/video/video.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    hidden: false,
    inputVal: '',
    msgData: [],
    id:'',
  },
  onLoad: function (e) {
    var that = this
    console.log(e.id)
    //获取视频标题
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/cms/news/detail',
      data: {
        id: e.id
      },
      success: function (res) {
        console.log(res.data.data)
        wx.setNavigationBarTitle({ title: res.data.data.title })
        that.setData({
          id: e.id,
          zhubo: res.data.data,
        });
      }
    }),
      //获取留言内容
      wx.request({
        url: 'https://api.it120.cc/' + app.globalData.subDomain + '/comment/list',
        data: {
          page: 1,
          pageSize: 10,
          refId: e.id,
          type: 3,
          status: 1
        },
        success: function (res) {
          console.log("获取留言")
          console.log(res.data.data)
          that.setData({
            liuyan: res.data.data,
            hidden: true
          });
        }
      })
  },
  //添加留言
  changeInputVal(ev) {
    var that = this
    console.log(ev.detail.value)
    that.setData({
      inputVal: ev.detail.value
    });
  },
  addMsg: function () {
    var that = this
    console.log(this.data.inputVal)
    console.log(this.data.id)
    //提交留言到后台审核
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/comment/add',
      data: {
        refId: that.data.id,
        type: 3,
        content: that.data.inputVal,
        token: app.globalData.token
      },
      success: function (res) {
        if (res.data.code == 600) {
          wx.showToast({
            title: '请输入评论内容',
            icon: 'loading',
            duration: 2000
          })
        }else{
          that.setData({
            inputVal: ""
          });
          wx.showToast({
            title: '审核中...',
            icon: 'success',
            duration: 3000
          })
        }
      }
    })
  },
  //获取用户信息
  onShow() {
    this.getUserInfo();
    this.setData({
      version: app.globalData.version
    });
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
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
  textAreaFocus: function () {

  },

})
