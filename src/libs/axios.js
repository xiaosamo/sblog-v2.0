import axios from 'axios'
// import { getToken } from '@/libs/util'

// import { Spin } from 'iview'
const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
}

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // 'content-type': 'application/json',
        // 设置公共请求头token
        // 'token': getToken(),
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*'
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url) {
    // axios.defaults.headers.common['token'] = getToken()
    // axios.defaults.headers.common['content-type'] ='application/json'

      // 请求拦截
    instance.interceptors.request.use(config => {
      console.log('请求拦截,get token='+config.headers.token)
      // config.headers.token = getToken()
      // config.headers.common['token'] = getToken()
      // config.headers.common['content-type'] ='application/json'
      // 添加全局的loading...
      // if (!Object.keys(this.queue).length) {
      //   // Spin.show() // 不建议开启，因为界面不友好
      // }
      // this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
