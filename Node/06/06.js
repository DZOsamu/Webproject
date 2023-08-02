// 目标：基于Web服务，开发提供网页资源的功能

// 1.基于http模块，创建Web服务
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
   // 2.使用req.url获取请求资源路径，并读取index.html里字符串内容返回给请求方
   if (req.url === 'index.html') {
      fs.readFile(path.join(__dirname, '../04/dist/index.html'), (err, data) => {
         if (err) console.log(err)
         else {
            // 设置响应内容类型 htm1超文本字符串 让浏览器解析成标签网页等
            res.setHeader('Content-Type', 'text/html;charset=utf-8')
            res.end(data.toString())
         }
      })
   }
   // 3.其他路径，暂时返回不存在提示
   else {
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end('你要访问的资源路径不存在')
   }
})
server.listen(8080, () => {
   console.log('Web服务器启动成功了')
})

// 4.运行Web服务，用浏览器发起请求