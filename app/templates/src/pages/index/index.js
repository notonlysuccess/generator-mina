var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo:userInfo
      })
    })
  }
})
