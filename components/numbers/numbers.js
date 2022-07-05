// components/numbers/numbers.js
import {
    storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
    store
} from '../../store/store'
Component({
    /**
     * 组件的属性列表
     */
    behaviors: [storeBindingsBehavior],
    storeBindings: {
        store,
        fields: {
            numA: 'numA',
            numB: 'numB',
            sum: 'sum'
        },
        actions: {
            updateNum2: 'updateNum2'
        }
    },

    properties: {

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
        btnHandler2(e){
            this.updateNum2(e.target.dataset.step)
        }
    }
})