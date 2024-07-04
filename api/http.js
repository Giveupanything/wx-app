const baseURL = 'https://live-api.itheima.net/'

export default function (config) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseURL + config.url,
            method: config.method,
            data: config.data,
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}