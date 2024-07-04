// pages/myhouse/myhouse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataArr: [],
        emptyStatus: true,
        text: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options);

        wx.setNavigationBarTitle({
            title: options.toolText,
            success: () => {
                // console.log('成功了');
            }
        })

        switch (options.toolText) {
            case '我的房屋':
                this.setData({
                    dataArr: wx.getStorageSync('my').myhouse,
                    text: '认证房屋'
                })
                console.log(this.data);
                // console.log(this.data.text);
                break
            case '我的报修':
                this.setData({
                    dataArr: wx.getStorageSync('my').myfixed,
                    text: '报修记录'
                })
                break
            case '访客记录':
                this.setData({
                    dataArr: wx.getStorageSync('my').myvisitor,
                    text: '访客记录'
                })
                break
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady(options) {},

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