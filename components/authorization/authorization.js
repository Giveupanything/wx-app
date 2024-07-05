// components/authorization/authorization.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isLogin: false
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        attached() {
            // 获取登录凭证，判断用户是否登录
            const app = getApp()
            // console.log(app.token);
            const isLogin = Boolean(app.token)
            // console.log(Boolean(app.token));
            // 更新页面数据
            this.setData({
                isLogin
            })
            if (!isLogin) {
                wx.redirectTo({
                    url: "/pages/login/login"
                })
            }
        }
    }
})