//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {

      }
    })
  },
  globalData: {
    userInfo: null
  },
  Api: function (url, data, success, fail){
    // url 请求地址, data 参数, success 成功的回调, fail 失败的回调
    var URL = ''
    wx.request({
      url: URL + url,
      header: { 'Content-Type': 'application/json' },
      data: data,
      success: function (res){
        success(res)
      },
      fail: function (res){
        fail(res)
      }
    })
  }
})
