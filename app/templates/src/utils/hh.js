const hh = {}
const SYNC = /Sync$/
const ON = /^on/
for (let name in wx) {
  if (SYNC.test(name) || ON.test(name)) {
    hh[name] = wx[name]
  } else {
    hh[name] = (object = {}) => {
      return new Promise((resolve, reject) => {
        object.success = res => resolve(res)
        object.fail = res => reject(res)
        wx[name](object)
      })
    }
  }
}

module.exports = hh
