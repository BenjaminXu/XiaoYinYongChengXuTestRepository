//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onAddToFavorites(res) {
    // webview 页面返回 webviewUrl
    console.log('WebviewUrl: ', res.webviewUrl)
    return {
      title: '自定义标题',
      imageUrl: 'http://demo.png',
      query: 'name=xxx&age=xxx',
    }
  },
  handleContact (e) {// 测试客服消息
      console.log("======handleContact======"+JSON.stringify(e));
      console.log("handleContact====="+e.detail.path)
      console.log("handleContact====="+e.detail.query)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  navigateToCustomMap: function(){
    wx.navigateTo({
      url: '../customMap/customMap'
    })
  },
  TestLoginHandler: function(){
    wx.login({
      complete: (res) => {
        var obj = {res1:"res1",res2:"res2"};
        console.log("========res===================="+JSON.stringify(res));
      },
    })
  },
  TestOpenSettingHandler: function(){    

    wx.authorize({
      scope: 'scope.userLocation',
    })

    // wx.openSetting({
    //   complete: (res) => {
    //     console.log("=============="+JSON.stringify(res));
    //   },
    // })

    wx.getSetting({
      complete: (res) => {
        console.log("================="+JSON.stringify(res));
      },
    })
  },
  getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    console.log("======getPhoneNumber======="+JSON.stringify(e));
  },
  TeststartSoterAuthentication:function(){
    wx.startSoterAuthentication({
      challenge: 'challenge',
      requestAuthModes: ["facial" | "fingerPrint" | "speech"],
    })
  },
  onShow: function (){
    console.log("=============index===============onShow=============");
  },
  onLoad: function () {
    console.log("=========index=========onLoad===111=====");

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          console.log("==========getUserInfo=================="+JSON.stringify(res));
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
