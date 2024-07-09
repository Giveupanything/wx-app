Page({
    data: {
        repairDetail: {},
        id: ''
    },
    onLoad({
        id
    }) {
        // 获取报修详情的数据
        this.getRepairDetail(id)
        this.setData({
            id
        })
    },
    editRepair() {
        wx.navigateTo({
            url: '/pages/online-report/online-report?id=' + this.data.id,
        })
    },
    // 报修详情接口
    async getRepairDetail(id) {
        if (!id) return wx.utils.toast('参数有误!')
        // 调用接口
        const {
            code,
            data: repairDetail
        } = await wx.http.get('/repair/' + id)
        // 检测接口是否调用成功
        if (code !== 10000) return wx.utils.toast()
        // 渲染数据
        this.setData({
            repairDetail
        })
    },
    async cancelRepair(ev) {
        console.log(ev);
        const {
            code
        } = await wx.http.put('/cancel/repaire/' + ev.mark.id)
        console.log(code);
        if (code !== 10000) return wx.util2.toast()
        wx.navigateTo({
            url: '/pages/myrepair/myrepair',
        })
    }
})