// app.js
App({
    // 封装获取token的函数
    getToken() {
        // wx.getStorage({
        //     key: 'token',
        //     success: (data) => {
        //         this.token = data
        //     },
        //     fail: () => {}
        // })

        this.token = wx.getStorageSync('token')
        // console.log(this.token, 'app');
    },

    //#region 
    // routerGuard: {
    //     beforeEach(to, from, next) {
    //         console.log('before each');
    //         if (!isAuthenticated()) {
    //             wx.navigateTo({
    //                 url: '/pages/login/login',
    //             })
    //         } else {
    //             next()
    //         }
    //     },
    //     afterEach(to, from) {
    //         console.log('after each');
    //     }
    // },
    //#endregion

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