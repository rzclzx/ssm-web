// axios配置
import Axios from 'axios'
import qs from 'qs'

export const AxiosInit = (obj) => {
  obj = obj || {}
  const axios = Axios.create({
    baseURL: obj.url,
    //headers: { 'Content-Type': obj.contentType ? obj.contentType : 'application/json;charset=UTF-8' }
    headers: { 'Content-Type': obj.contentType ? obj.contentType : 'application/x-www-form-urlencoded;charset=UTF-8' }
  })
  axios.interceptors.request.use((config) => {
    // post方法并且数据不是formData，序列化参数
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
      config.data = qs.stringify(config.data)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  return axios
}

export default AxiosInit
