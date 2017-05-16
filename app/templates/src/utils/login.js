const regeneratorRuntime = require('../assets/runtime.js')

const hh = require('./hh')
const config = require('./config')

module.exports = async function() {
  const getCodeRes = await hh.login()
  //const loginRes = await hh.request({
    //url: config.ROUTE.LOGIN,
    //method: 'POST',
    //data: {
      //code: getCodeRes.code
    //}
  //})
  //const userInfoRes = await hh.getUserInfo()
  //const setUserInfoRes = await hh.request({
    //url: config.ROUTE.SET_USER_INFO,
    //method: 'POST',
    //data: {
      //iv: userInfoRes.iv,
      //encryptedData: userInfoRes.encryptedData,
      //sessionKey: loginRes.data.sessionKey
    //},
  //})
}
