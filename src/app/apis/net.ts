import axios from 'axios'

const MODE =  import.meta.env.MODE
const API_URL_BASE =  import.meta.env.VITE_API_URL_BASE

// 请求拦截器，如果开发模式走mockjs

axios.interceptors.request.use(config => {
    console.log('----')
    console.log(config)
    return config
}, error => {
  console.log(error)
//   return Promise.error(error)
})

export default {}