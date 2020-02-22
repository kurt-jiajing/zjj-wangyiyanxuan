import axios from 'axios'
import qs from 'qs'

//生成Axios伪示例
const instance = axios.create({
  baseURL: '/api'
})
//添加请求拦截器
instance.interceptors.request.use(config =>{
  //1)config中包含您当前请求的所有请求信息：method、url、data

  //2）修改post请求的请求参数格式：默认为json对象，服务器能处理的是url-encoding
  config.data = qs.stringify(config.data)
  return config
})
//设置相应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    alert('请求失败')
    console.log(error)
    //手动返回一个状态初始化的promise
    return new Promise(()=>{})
  }
)

export default instance