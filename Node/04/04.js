// 目标1：压缩html代码
// 需求：把回车符\r 换行符\n 去掉，写入到新html文件中
// 1.1 读取源html文件内容
const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
   if (err) console.log(err)
   else {
      // 1.2 正则替换字符中
      const htmlStr = data.toString()
      // console.log(data.toString())
      const resultStr = htmlStr.replace(/[\r\n]/g, '')
      console.log(resultStr)

      // 1.3 写入到新的html文件中
      fs.writeFile(path.join(__dirname, 'dist/index.html'), resultStr, err => {
         if (err) console.log(err)
         else console.log('写入成功')
      })
   }
})