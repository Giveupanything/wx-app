import http from 'wechat-http'

http.baseURL = 'https://live-api.itheima.net'

http.intercept.request = function (options) {
    const defaultHeader = {}
    defaultHeader.Authorization = 'Bearer ' + getApp().token
    options.header = Object.assign({}, defaultHeader, options.header)
    return options
}

http.intercept.response = async function ({
    data,
    config
}) {
    // 状态码为401表示token失效
    if (data.code === 401) {
        // 获取应用实例，读取refresh-token
        const app = getApp()
        console.log(app.refreshToken);
        console.log(data);

        // 状态为401，且接口为/refreshToken 表明 refreshToken 也过期了
        // if (config.url.includes('/refreshToken')) {
        //     // 获取当前页面路径，保证登陆后能跳回原来页面
        //     const pageStack = getCurrentPages()
        //     const currentPage = pageStack.pop()
        //     const redirectURL = currentPage.route
        //     // 路由跳转（登陆页面）
        //     return wx.redirectTo({
        //         // url: '/pages/login/login?redirectURL=/' + redirectURL,
        //         url: '/pages/login/login',
        //     })
        // }

        // 调用新接口获取新的token
        // const res = await http({
        //     url: '/refreshToken',
        //     method: 'POST',
        //     header: {
        //         Authorization: 'Bearer ' + app.refreshToken
        //     }
        // })
        // 检测接口是否调用成功
        // if (res.code !== 10000) return wx.util2.toast('更新token失败')
        // 重新存储新的token
        // wx.setStorageSync('token', res.data.token)
        // wx.setStorageSync('refreshToken', res.data.refreshToken)

        // 获取到原来接口的请求参数
        // config = Object.assign(config, {
        //     header: {
        //         // 更新后的token
        //         Authorization: 'Bearer ' + app.globalData.token
        //     }
        // })
        // 重新发送请求
        // return http(config)
    }
    // 只保留data数据，其他都过滤掉
    return data
}

export default http