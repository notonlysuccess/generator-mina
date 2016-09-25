App({
  onLaunch: () => {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function(cb) {
    if (typeof cb !== 'function') {
      return
    }
    if (this.globalData.userInfo) {
      cb(this.globalData.userInfo)
    } else {
      wx.login({
        success: e => {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              cb(this.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {}
})
