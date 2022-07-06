// custom-tab-bar/index.js
import {
    storeBindingsBehavior
} from "mobx-miniprogram-bindings"
import {
    store
} from '../store/store'
Component({
    /**
     * 组件的属性列表
     */
    behaviors: [storeBindingsBehavior],

    storeBindings: {
        store,
        fields: {
            sum: 'sum',
            activeTabBarIndex: 'activeTabBarIndex'
        },
        actions: {
            updateActiveTabBarIndex: 'updateActiveTabBarIndex'
        }
    },

    properties: {

    },

    options: {
        styleIsolation: "shared"
    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [{
            pagePath: "/pages/home/home",
            text: "首页",
            iconPath: "/images/bender.png",
            selectedIconPath: "/images/homer.png"
        }, {
            pagePath: "/pages/message/message",
            text: "消息",
            iconPath: "/images/koya.png",
            selectedIconPath: "/images/mario.png",
            info: 0
        }, {
            pagePath: "/pages/contact/contact",
            text: "联系",
            iconPath: "/images/rj.png",
            selectedIconPath: "/images/stan.png"
        }]
    },

    observers: {
        'sum': function (val) {
            this.setData({
                'list[1].info': val
            })
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            wx.switchTab({
                url: this.data.list[event.detail].pagePath,
            })

            this.updateActiveTabBarIndex(event.detail)
        },
    }
})