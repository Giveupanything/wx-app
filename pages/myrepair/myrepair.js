// pages/myrepair/myrepair.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        repairList: [],
    },
    async getRepairList() {
        // 调用接口
        const {
            code,
            data: {
                rows: repairList
            },
        } = await wx.http.get('/repair', {
            current: 1,
            pageSize: 10
        })
        // 检测接口是否用成功
        if (code !== 10000) return wx.utils.toast()
        // 渲染数据
        this.setData({
            repairList,
            isEmpty: repairList.length === 0,
        })
    },
    goDetail(e) {
        // console.log(e);
        wx.navigateTo({
            url: '/pages/repairDetail/repairDetail?id=' + e.mark.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getRepairList()
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