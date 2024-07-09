// pages/online-report/online-report.js
import wxValidate from 'wechat-validate'
Page({

    /**
     * 页面的初始数据
     */
    behaviors: [wxValidate],
    data: {
        houseList: [],
        houseId: '',
        houseName: '',
        repairItem: [],
        repairItemId: '',
        repairItemName: '',
        appointment: '',
        houseLayerVisible: false,
        repairLayerVisible: false,
        dateLayerVisible: false,
        mobile: '',
        appointment: '',
        description: '',
        attachment: [],
        currentDate: '',
        minDate: new Date().getTime(),
        maxDate: new Date(2024, 10, 1).getTime(),
    },
    rules: {
        houseId: [{
            required: true,
            message: '请选择报修房屋!'
        }],
        repairItemId: [{
            required: true,
            message: '请选择维修的项目!'
        }],
        mobile: [{
                required: true,
                message: '请填写手机号码!'
            },
            {
                pattern: /^1[3-8]\d{9}$/,
                message: '请填写正确的手机号码!'
            },
        ],
        appointment: [{
            required: true,
            message: '请选择预约日期!'
        }],
        description: [{
            required: true,
            message: '请填写问题描述!'
        }],
    },
    async getRepairItem() {
        // 调用接口
        const {
            code,
            data: repairItem
        } = await wx.http.get('/repairItem')
        // 检测接口是否调用成功
        if (code !== 10000) return wx.utils.toast()
        // 渲染数据
        this.setData({
            repairItem
        })
    },
    async getHouseList() {
        const {
            code,
            data: houseList
        } = await wx.http.get('/house')
        if (code !== 10000) return wx.util2.toast()
        this.setData({
            houseList
        })
        console.log(houseList);
    },
    uploadPicture(ev) {
        // 上传文件的信息
        const {
            file
        } = ev.detail
        // 调用 API 实现文件上传
        wx.uploadFile({
            url: wx.http.baseURL + '/upload',
            filePath: file.url,
            name: 'file',
            header: {
                Authorization: 'Bearer ' + getApp().token,
            },
            success: (result) => {
                // 处理返回的 json 数据
                const data = JSON.parse(result.data)
                // 检测接口是否调用成功
                if (data.code !== 10000) return wx.utils.toast('文件上传失败!')
                // 先获取原来已经上传的图片
                const {
                    attachment
                } = this.data
                // 追加新的上传的图片
                attachment.push(data.data)
                // 渲染数据
                this.setData({
                    attachment
                })
            },
        })
    },
    async submitForm() {
        // 验证表单数据
        if (!this.validate()) return
        // 提取接口需要的数据
        const {
            houseId,
            repairItemId,
            mobile,
            appointment,
            description,
            attachment
        } = this.data
        // 调用接口
        const {
            code
        } = await wx.http.post('/repair', {
            houseId,
            repairItemId,
            mobile,
            appointment,
            description,
            attachment,
        })
        // 检测接口是否调用成功
        if (code !== 10000) return wx.util2.toast('在线报修失败!')
        // 跳转到报修列表页面
        wx.redirectTo({
            url: '/pages/myrepair/myrepair',
        })
    },
    openHouseLayer() {
        this.setData({
            houseLayerVisible: true
        })
        this.getHouseList()
    },
    openRepairLayer() {
        this.setData({
            repairLayerVisible: true
        })
    },
    selectHouseInfo(ev) {
        this.setData({
            houseLayerVisible: true
        })
        // 数据渲染
        this.setData({
            houseId: ev.detail.id,
            houseName: ev.detail.name,
        })
    },
    closeHouseLayer() {
        this.setData({
            houseLayerVisible: false
        })
    },
    selectRepairItemInfo(ev) {
        this.setData({
            repairItemId: ev.detail.id,
            repairItemName: ev.detail.name,
        })
        this.setData({
            repairLayerVisible: true
        })
    },
    closeRepairLayer() {
        this.setData({
            repairLayerVisible: false
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
            appointment: wx.utils.formatTime(ev.detail),
            dateLayerVisible: false,
        })
    },
    async getRepairDetail(id) {
        const {
            code,
            data: repairDetail
        } = await wx.http.get('/repair/' + id)
        if (code !== 10000) return wx.util2.toast()
        console.log(repairDetail);
        this.setData({
            ...repairDetail
        })
    },
    onLoad(options) {
        if (options.id) {
            this.getRepairDetail(options.id)
            return
        }
        this.getRepairItem()
    },
})