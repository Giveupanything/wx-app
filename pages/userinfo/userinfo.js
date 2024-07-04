// pages/userinfo/userinfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            nickname: wx.getStorageSync('userInfo').nickname || '微信用户',
            avatarURL: wx.getStorageSync('userInfo').avatarURL || '../../images/home.png'
        }
    },
    handleUserNikname(e) {
        console.log(e.detail.value);
        this.setData({
            'userInfo.nickname': e.detail.value
        })
        this.handleStorage()
    },
    handleChooseAvatar(e) {
        console.log(e);
        this.setData({
            "userInfo.avatarURL": e.detail.avatarUrl
        })
        this.handleStorage()

        // wx.chooseMedia({
        //     count: 1,
        //     mediaType: ['image', 'video'],
        //     success: function (res) {
        //         // 选择媒体文件成功
        //         console.log(res.tempFiles);
        //     },
        //     fail: function (res) {
        //         // 选择媒体文件失败
        //         if (res.errMsg === 'chooseMedia:fail cancel') {
        //             // 用户取消选择操作
        //             console.log('用户取消了选择媒体文件');
        //         } else {
        //             // 其他错误情况
        //             console.log('选择媒体文件失败', res.errMsg);
        //         }
        //     }
        // })
    },
    handleStorage() {
        wx.setStorageSync('userInfo', this.data.userInfo)
    },
    handleError(e) {
        console.log(e);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})