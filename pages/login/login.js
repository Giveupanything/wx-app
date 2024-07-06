// pages/login/login.js
import {
    getVerifyCodeAPI,
    postLoginAPI,
} from '../../api/index'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        mobile: '13333333333',
        verifyCode: '',
        resCode: '',
        verifyBtnStatus: false
    },
    async handleGetVerifyCode() {
        const flag = this.handleCheckMobile(this.data.mobile)
        if (!flag) return

        // 展示loading
        const a = await wx.showToast({
            title: '正在加载...',
            icon: 'loading',
            mask: true,
            duration: 1000
        })

        console.log(a);

        this.setData({
            verifyBtnStatus: true
        })

        const result = await getVerifyCodeAPI({
            mobile: this.data.mobile
        })
        console.log(result);
        let {
            code,
            message
        } = result.data
        this.setData({
            verifyCode: result.data.data.code,
            resCode: result.data.data.code
        })
    },
    handleCheckMobile(str) {
        const reg = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
        // console.log(!reg.test(this.data.mobile));
        if (!reg.test(str)) {
            wx.showToast({
                title: '请输入正确的手机号码！',
                icon: 'none',
                mask: true,
                duration: 2000
            })
            return false
        } else {
            return true
        }
    },
    handleCheckVerify(str, code) {
        if (str.length !== 6 || str !== code) {
            wx.showToast({
                title: '请输入正确的验证码！',
                icon: 'none',
                mask: true,
                duration: 2000
            })
            return false
        }
        return true
    },
    async handleLogin() {
        const flag1 = this.handleCheckMobile(this.data.mobile)
        const flag2 = this.handleCheckVerify(this.data.verifyCode, this.data.resCode)
        if (flag1 && flag2) {
            // console.log(postLoginAPI);
            const result = await postLoginAPI({
                mobile: this.data.mobile,
                code: this.data.verifyCode
            })
            console.log(result);

            // 登录成功，返回到登陆前的页面
            if (result.data.message === '操作成功') {
                let {
                    token,
                    refreshToken
                } = result.data.data
                wx.setStorageSync('token', token)
                wx.setStorageSync('refreshToken', refreshToken)

                let app = getApp()
                app.token = token
                // wx.navigateTo({
                //     url: '',
                // })
                wx.navigateBack(1)
            }
        }
    },
    countDownChange(ev) {
        // console.log(ev);
        this.setData({
            timeData: ev.detail,
            verifyBtnStatus: ev.detail.minutes === 1 || ev.detail.seconds > 0
        })
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