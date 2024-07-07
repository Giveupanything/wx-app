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
            const isLogin = Boolean(app.token)
            // 更新页面数据
            this.setData({
                isLogin
            })
            // 获取页面栈
            const pageStack = getCurrentPages()
            // 获取页面路径
            const currentPage = pageStack.pop()
            // console.log(currentPage);
            // 未登录的情况下跳转到登录页
            if (!isLogin) {
                // 使用空白函数覆盖原生的生命周期 onload onshow
                currentPage.onLoad = () => {}
                currentPage.onShow = () => {}
                wx.redirectTo({
                    url: "/pages/login/login?redirectURL=/" + currentPage.route
                })
            }
        }
    }
})