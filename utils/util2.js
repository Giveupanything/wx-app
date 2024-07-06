const util2 = {
    toast(title = '数据加载失败...') {
        wx.showToast({
            title,
            mask: true,
            icon: 'none'
        })
    }
}

export default util2