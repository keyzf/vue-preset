import axios from 'axios'

// 定义一个 App mixin 对象
const AppMixin = {
  baseUrl: 'http://test.activity.ffrj.net/distribution/forward',
  uid: '6767499',
  methods: {
    get (path, params) {
      const data = Object.assign({ router: path, uid: AppMixin.uid }, params)
      return axios.get(AppMixin.baseUrl, { params: data })
    }
  }
}

export default AppMixin;