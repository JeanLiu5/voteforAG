Page({


 
  /**
   * 页面的初始数据
   */
  data: {
      account:'',
      password:''
  },


  accountInput:function (e) {
      this.data.account = e.detail.value
  },


  passwordInput:function (e) {
      this.data.password = e.detail.value
  },


  regist:function (e) {
      wx.navigateTo({
        url: '../enroll/enroll',
      })
  },


  signin:function (e) {
      var that = this
      if(that.data.account==''){
          wx.showModal({
            title:"提示",
            content:"请输入学号/工号",
            showCancel:false,
            success(res){}
            })
      }else{
          console.log('success'),
          wx.switchTab({
            url: '../index/index',
          })
      }
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