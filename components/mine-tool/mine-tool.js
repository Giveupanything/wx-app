// components/mine-tool/mine-tool.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        toolItem: Object,
        my: Object
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleGoTool(e) {
            console.log(e);
        }
    },
    lifetimes: {
        created(e) {
            // console.log(e);
        }
    }
})