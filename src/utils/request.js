import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.1.43:8061', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      return Promise.reject(res.message || 'Error')
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 请求
 * @param {*} url 请求地址
 * @param {*} data 请求数据
 */

export const postRequest = (url, data) => {
  return service({
    method: 'post',
    url: url,
    data: data,
    transformRequest: [
      function(data) {
        return qs.stringify(data, {
          arrayFormat: 'repeat'
        })
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export const postRequestJson = (url, data) => {
  return service({
    method: 'post',
    url: url,
    data: data,
    headers: { 'Content-Type': 'application/json' }
  })
}
