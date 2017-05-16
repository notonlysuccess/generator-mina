const regeneratorRuntime = require('../../assets/runtime.js')
const hh = require('../../utils/hh')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  bindButtonTap: async function() {
    const res = await hh.getUserInfo()
    this.setData({
      userInfo: res.userInfo
    })
  }
})
