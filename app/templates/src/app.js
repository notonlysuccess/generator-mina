const config = require('./utils/config')
const hh = require('./utils/hh')
const login = require('./utils/login')

App({
  onLaunch: function() {
    login()
  },
})
