// component/top-nav/top-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "value": String
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
    change() {
      var name = '这里是监控的事件'
      this.triggerEvent('change', name)
    }
  }
})
