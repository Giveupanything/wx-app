// pages/form/form.js
import wxValidate from 'wechat-validate'
console.log(111, wxValidate);
Page({

    /**
     * 页面的初始数据
     */
    behaviors: [wxValidate],
    data: {
        point: '',
        building: '',
        room: '',
        name: '',
        gender: 1,
        mobile: '',
        idcardFrontUrl: '',
        idcardBackUrl: ''
    },
    rules: {
        name: [{
            require: true,
            message: '业主姓名不能为空'
        }, {
            pattern: /^[\u4e00-\u9fa5]{2,5}$/,
            message: '业主姓名只能为中文'
        }],
        mobile: [{
            require: true,
            message: '业主手机号不能为空'
        }, {
            pattern: /^1[3-9]\d{9}$/,
            message: '请填写正确的手机号'
        }],
        idcardFrontUrl: [{
            require: true,
            message: '请上传身份证国徽面'
        }],
        idcardBackUrl: [{
            require: true,
            message: '请上传身份证人像面'
        }],
    },
    handleGenderStatus(e) {
        console.log(e.detail.value);
    },
    async submitForm() {
        if (!this.validate()) return
        const {
            __webviewId__,
            status,
            ...data
        } = this.data
        const {
            code
        } = await wx.http.post('/room', data)
        if (code !== 10000) return wx.util2.toast('数据提交失败')
        wx.navigateBack({
            delta: 4
        })
    },
    async uploadPicture(e) {
        // 区分用户上传的是正面还是反面
        const type = e.mark.type
        try {
            // 打开相册或摄像机
            const media = await wx.chooseMedia({
                count: 1,
                mediaType: ['image'],
                sizeType: ['compressed']
            })
            // 调用API上传图片
            wx.uploadFile({
                url: wx.http.baseURL + '/upload',
                filePath: media.tempFiles[0].tempFilePath,
                name: 'file',
                header: {
                    Authorization: 'Bearer ' + getApp().token
                },
                success: (result) => {
                    // 处理返回的json数据
                    const data = JSON.parse(result.data)
                    if (data.code !== 10000) return wx.util2.toast('上传图片失败')
                    console.log(data);
                    this.setData({
                        [type]: data.data.url
                    })
                }
            })
        } catch (err) {
            // 获取图片失败
            console.log(err);
        }

    },
    async getHouseDetail(id) {
        const {
            code,
            data: houseDetail
        } = await wx.http.get('/room/' + id)
        if (code !== 10000) return wx.util2.toast()
        this.setData({
            ...houseDetail
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad({
        point,
        building,
        room,
        id
    }) {
        // console.log(id);
        if (id) return this.getHouseDetail(id)
        this.setData({
            point,
            building,
            room
        })
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