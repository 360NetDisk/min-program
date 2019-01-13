//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 轮播列表
    postsShowSwiperList: [{id: 1, appid: 122, url:"www.baidu.com",post_medium_image:"www.baidu.com"},{}],
    //图标导航列表
    topNav: [
      { id: 111, redirecttype: '111', url: "", appId: "", extraData: "", url: "", img: "/images/nav-icon1.png",name:"书籍" },
      { id: 111, redirecttype: '111', url: "", appId: "", extraData: "", url: "", img: "/images/nav-icon2.png",name:"视频" }, 
      { id: 111, redirecttype: '111', url: "", appId: "", extraData: "", url: "", img: "/images/nav-icon3.png",name:"好文" },
      { id: 111, redirecttype: '111', url: "", appId: "", extraData: "", url: "", img: "/images/nav-icon4.png",name:"资源" },
      { id: 111, redirecttype: '111', url: "", appId: "", extraData: "", url: "", img: "/images/nav-icon5.png",name:"其他" }],
      //内容列表,
    postsList: [{ id: 11, post_medium_image: "", date: "2018-12-30", title: { rendered:"hello"}},{}],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
        success: res => {
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
  },
  onNavRedirect:function(e){
    wx.navigateTo({
      url: "../../pages/them/them"
    });

  }
})
