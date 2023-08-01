// 1. 加载fs对象
const fs = require('fs')

// 2. 写入文件内容
fs.writeFile('./test.txt', 'hello, Node.js', err => {
   // 写入后的回调函数
   if (err) console.log(err)
   else console.log('写入成功')
})

// 3. 读取文件内容
fs.readFile('./test.txt', (err, data) => {
   // 读取后的回调函数
   // data是 Buffer 16进制数据流对象
   // .toString() 转换成字符串
   if (err) console.log(err)
   // else console.log(data)  // <Buffer 68 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73>
   else console.log(data.toString())   // hello, Node.js
})