// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mineTools: [{
                id: '1',
                iconPath: '../../images/myhouse.png',
                iconBgColor: '#56ABB0',
                toolText: '我的房屋',
                path: '/pages/myhouse/myhouse'
            },
            {
                id: '2',
                iconPath: '../../images/fixed.png',
                iconBgColor: '#E8BD8A',
                toolText: '我的报修',
                path: '/pages/myrepair/myrepair'
            },
            {
                id: '3',
                iconPath: '../../images/myvisitor.png',
                iconBgColor: '#CB665E',
                toolText: '访客记录',
                path: '/pages/visitorRecord/visitorRecord'
            }
        ],
        userInfo: wx.getStorageSync('userInfo'),
        my: {
            myhouse: [12, 23],
            myfixed: [],
            myvisitor: []
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setStorageSync('my', this.data.my)
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