// app.js
import util2 from './utils/util2'
import http from './utils/http'
wx.util2 = util2
wx.http = http

App({
    // 封装获取token的函数
    getToken() {
        this.token = wx.getStorageSync('token')
        this.refreshToken = wx.getStorageSync('refreshToken')
    },
    onLaunch() {
        this.getToken()

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    globalData: {
        userInfo: null,
        originURL: ''
    }
})