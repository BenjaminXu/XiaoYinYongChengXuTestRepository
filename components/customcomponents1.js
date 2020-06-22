// components/customcomponents1.js
Component({
  externalClasses: ['my-class'],
  options: {
    styleIsolation: 'isolated'
  },

  /**
   * 组件的属性列表
   */
  properties: {
      propA:String,
      propB:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      console.log("=========attached=====propA======"+this.data.propA);
      console.log("=========attached=====propA======"+this.data.propB);
    },
    moved: function () { 
      console.log("========moved==============");
    },
    detached: function () { 
      console.log("===============detached==============");
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function() {
      console.log("=========customcomponents====onLoad============");
    }
  }
})
