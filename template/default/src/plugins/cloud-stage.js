import Vue from 'vue'

// 0 注入module
const files = require.context('../modules/', true, /\.vue$/)
files.keys().forEach(fileName => {
  // 组件实例
  const reqCom = files(fileName)
  // 截取路径作为组件名
  const reqComName = fileName.split('/')[1]
  // 组件挂载
  console.log('register component', reqComName)
  Vue.component(reqComName, reqCom.default || reqCom)
})


// 1 加载配置数据
import datas from './cloud-stage-data.json'



Vue.mixin({
  created () {
    // 只处理module，必须存在mid
    if (!this.mid)
      return

    if (this.initData)
      return

    // 重新设置
    const data = datas[this.mid]
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // 此处不需要用到Vue.set，因为key必须在data里面设置好，后台才能识别
        this.$data[key] = data[key]
      }
    }
  },
  methods: {
    // 处理action事件
    handleAction (action) {
      open(action)
    }
  }
})