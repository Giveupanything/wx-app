// // pages/editHouse/editHouse.js
// Page({

//     /**
//      * 页面的初始数据
//      */
//     data: {

//     },
//     async getHouseDetail(id) {
//         const {
//             code,
//             data: houseDetail
//         } = await wx.http.get('/room/' + id)
//         if (code !== 10000) return wx.util2.toast()
//         this.setData({
//             ...houseDetail
//         })
//     },
//     // 提交审核
//     async submitForm() {
//         if (!this.validate()) return
//         // 获取全部数据，剔除多余参数
//         const {
//             __webviewId__,
//             status,
//             ...data
//         } = this.data
//         const {
//             code
//         } = await wx.http.post('/room', data)
//         if (code !== 10000) return wx.util2.toast('数据提交失败')

//         // 返回房屋列表首页
//         wx.navigateBack({
//             delta: 4
//         })
//     },

//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad({
//         point,
//         building,
//         room,
//         id
//     }) {
//         // 根据id判断是否修改房屋
//         if (id) return this.getHouseDetail(id)
//         this.setData({
//             point,
//             building,
//             room
//         })
//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady() {

//     },

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow() {

//     },

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide() {

//     },

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload() {

//     },

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh() {

//     },

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom() {

//     },

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage() {

//     }
// })