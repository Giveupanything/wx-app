// pages/home-visitor/home-visitor.js
import wxValidate from 'wechat-validate'
Page({

    /**
     * 页面的初始数据
     */
    behaviors: [wxValidate],
    data: {
        houseList: [],
        houseName: '',
        houseLayerVisible: false,
        dateLayerVisible: false,
        minDate: new Date().getTime(),
        maxDate: Date.now() + 1000 * 3600 * 24 * 3,
        name: '周柯',
        gender: 1,
        mobile: '18943434343',
        houseId: '',
        visitDate: '',
    },
    rules: {
        name: [{
                required: true,
                message: '访客姓名不能为空!'
            },
            {
                pattern: /[\u4e00-\u9fa5]{2,5}/,
                message: '访客姓名只能为中文!'
            },
        ],
        mobile: [{
                required: true,
                message: '访客手机号不能为空!'
            },
            {
                pattern: /^1[3-8]\d{9}$/,
                message: '请填写正确的手机号码!'
            },
        ],
        houseId: [{
            required: true,
            message: '请选择到访的房屋!'
        }],
        visitDate: [{
            required: true,
            message: '请选择到访的日期!'
        }],
    },
    handleGenderStatus(e) {
        console.log(e.detail.value);
        this.setData({
            gender: e.detail.value
        })
    },
    // 获取房屋列表
    async getHouseList() {
        // 调用接口
        const {
            code,
            data: houseList
        } = await wx.http.get('/house')
        // 检测接口是否调用成功
        if (code !== 10000) return wx.utils.toast()
        // 渲染数据
        this.setData({
            houseList
        })
    },
    // 获取用户选择的房屋
    selectHouseInfo(ev) {
        // 数据渲染
        this.setData({
            houseLayerVisible: true,
            houseId: ev.detail.id,
            houseName: ev.detail.name,
        })
    },
    openHouseLayer() {
        this.setData({
            houseLayerVisible: true
        })
        this.getHouseList()
    },
    closeHouseLayer() {
        this.setData({
            houseLayerVisible: false
        })
    },
    openDateLayer() {
        this.setData({
            dateLayerVisible: true
        })
    },
    closeDateLayer() {
        this.setData({
            dateLayerVisible: false
        })
    },
    selectDateInfo(ev) {
        console.log(ev)
        // 渲染数据
        this.setData({
            visitDate: wx.utils.formatTime(ev.detail),
            dateLayerVisible: false,
        })
    },
    async goPassport() {
        // 验证表单数据
        if (!this.validate()) return
        // 获取接口需要的数据
        const {
            name,
            gender,
            mobile,
            houseId,
            visitDate
        } = this.data
        // 调用接口
        const {
            code,
            data: {
                id
            },
        } = await wx.http.post('/visitor', {
            name,
            gender,
            mobile,
            houseId,
            visitDate
        })
        // 检测接口是否调用成功
        if (code !== 10000) return wx.utils.toast()
        // 跳转到访客详情页面
        wx.reLaunch({
            url: '/pages/passport/passport?id=' + id,
        })
    },
    onLoad(options) {
        this.getHouseList()
    }
})