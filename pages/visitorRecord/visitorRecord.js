import {
    throttle
} from 'miniprogram-licia'
// console.log(throttle);
Page({
    data: {
        visitorList: [],
        isEmpty: false,
        hasMore: true,
        _current: 0
    },
    onLoad() {
        // console.log(throttle);
        // 事件回调函数
        this.getVisitorList(++this.data._current)
        this.getMoreVisitor = throttle(() => {
            console.log(111);
            // 没有更多数据了...
            if (!this.data.hasMore) return
            // 创建了节流函数
            this.getVisitorList(++this.data._current)
        }, 100)
    },
    // 访客列表接口
    async getVisitorList(current = 1, pageSize = 5) {
        // 调用接口
        const {
            code,
            data: {
                pageTotal,
                rows: visitorList
            },
        } = await wx.http.get('/visitor', {
            current,
            pageSize
        })
        console.log(visitorList);
        // 检测接口是否调用成功
        if (code !== 10000) return wx.util2.toast()
        // 渲染数据
        this.setData({
            hasMore: current < pageTotal,
            isEmpty: visitorList.length === 0,
            visitorList: this.data.visitorList.concat(visitorList),
        })
        // 记录下来当前的页面
        this._current = current
    },
    goPassport() {
        wx.navigateTo({
            url: '/pages/passport/passport',
        })
    }
})