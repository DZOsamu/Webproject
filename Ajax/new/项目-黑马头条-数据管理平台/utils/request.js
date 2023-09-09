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

// 添加响应拦截器
axios.interceptors.response.use(function (response){
   // 2xx的状态码都会触发该函数
   // 对响应数据做点什么
   return response
},function (error){
   // 超出2xx范围内的状态码都会触发该函数
   // 对响应错误做点什么
   // 例如 统一对401身份验证失败情况做出处理
   console.dir(error)
   if(error?.response?.status===401){
      alert('身份验证失败，请重新登录')
      localStorage.clear()
      location.href = '../login/index.html'
   }
   return Promise.reject(error)
})