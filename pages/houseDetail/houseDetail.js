// pages/houseDetail/houseDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        houseDetail: {},
        id: ''
    },

    async getHouseDetail(id) {
        if (!id) return wx.util2.toast('参数有误')
        const {
            code,
            data: houseDetail
        } = await wx.http.get('/room/' + id)
        if (code !== 10000) return wx.util2.toast()
        this.setData({
            houseDetail
        })
    },
    editHouse() {
        wx.navigateTo({
            url: '/pages/form/form?id=' + this.data.id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad({
        id
    }) {
        // console.log(111, this);
        this.setData({
            id
        })
        this.getHouseDetail(id)
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