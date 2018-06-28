// pages/page5/page5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:1,
    list: [
      {
        name: 'tab1',
        text: ["one",'two','three'],
        show: false
      }, {
        name: 'tab2',
        text: [1, 2, 3],
        show: false
      }
    ]
  },

  tabLi(e) {
    let Inx = e.currentTarget.dataset.text
    this.setData({
      show: Inx + 1
    })
  },

  showTab(e) {
    let Inx = e.currentTarget.dataset.text
    let now = this.data.list[Inx].show
    this.setData({
      ['list[' + Inx + '].show']: !now
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
