const fs = require('fs')

// 1.引入path对象
const path = require('path')

// 2.调用path.join()配合__dirname组成目标文件的绝对路径
console.log(__dirname)

fs.readFile(path.join(__dirname, './test.txt'), (err, data) => {
   if (err) console.log(err)
   else console.log(data.toString())
})