// pages/myhouse/myhouse.js
import {
    getRoomList
} from '../../api/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        houseList: [],
        emptyStatus: true,
        text: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        // console.log(options);

        wx.setNavigationBarTitle({
            title: options.toolText,
            success: () => {
                // console.log('成功了');
            }
        })

        switch (options.toolText) {
            case '我的房屋':
                // let result = await getRoomList()
                // console.log(result);

                const res = await wx.http.get('/room')
                console.log(res);

                // 检测接口是否调用成功
                // if (code !== 10000) return wx.utils.toast()
                // 渲染数据
                this.setData({
                    // houseList: wx.getStorageSync('my').myhouse,
                    houseList: res.data,
                    // houseList,
                    text: '认证房屋'
                })
                // console.log(this.data);
                // console.log(this.data.text);
                break
            case '我的报修':
                this.setData({
                    houseList: wx.getStorageSync('my').myfixed,
                    text: '报修记录'
                })
                break
            case '访客记录':
                this.setData({
                    houseList: wx.getStorageSync('my').myvisitor,
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