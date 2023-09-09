// axios 公共配置
// 基地址
axios.defaults.baseURL = 'http://geek.itheima.net'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
   // 在发送请求之前做什么
   // 统一携带token令牌字符串在请求头
   const token = localStorage.getItem('token')
   token && (config.headers.Authorization = `Bearer ${token}`)
   
   return config
}, function (error) {
   return Promise.reject(error)
})