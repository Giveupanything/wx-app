// pages/chooseCommunity/chooseCommunity.js
import QQMap from '../../utils/qqmap'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },
    relocation() {

    },
    async chooseLocation() {
        const {
            latitude,
            longitude
        } = await wx.chooseLocation()
        this.getPoint(latitude, longitude)
    },
    async getLocation() {
        const {
            latitude,
            longitude
        } = await wx.getLocation()
        console.log(latitude);
        this.getPoint(latitude, longitude)
    },
    getPoint(latitude, longitude) {
        // 逆地址解析
        QQMap.reverseGeocoder({
            location: [latitude, longitude].join(','),
            success: ({
                result: {
                    address
                }
            }) => {
                // console.log(address);
                this.setData({
                    address
                })
            }
        })

        // search是实现地点搜索功能的方法
        QQMap.search({
            keyword: '住宅小区',
            location: [latitude, longitude].join(','),
            page_size: 5,
            success: (result) => {
                const points = result.data.map(({
                    id,
                    title,
                    _distance
                }) => {
                    return {
                        id,
                        title,
                        _distance
                    }
                })
                // console.log(points);
                this.setData({
                    points
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取用户经纬度
        this.getLocation()
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