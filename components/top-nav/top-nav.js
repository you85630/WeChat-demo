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
    msg:'这里是子组件传递的值'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    childClick() {
      let msg = this.data.msg
      this.triggerEvent('childmsg',msg)
    }
  }
})
