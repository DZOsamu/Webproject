// 目标：基于http模块创建Web服务程序

// 1.1 加载http模块，创建Web服务对象
const http = require('http')
const server = http.createServer()

// 1.2 监听request请求事件，设置响应头和响应体
server.on('request', (req, res) => {
   // 设置响应头：内容类型，普通文本：编码格式为utf-8
   res.setHeader('Content-Type', 'text/plain;charset=utf-8')
   // 设置响应体内容，结束本次请求与响应
   res.end('欢迎使用 Node.js 和 http模块 创建的 Web服务 ~')
})
// 1.3 配置端口号并启动Web服务
server.listen(3001, () => {
   console.log('Web服务启动成功了')
})

// 1.4 浏览器请求（http://localhost:3001）测试