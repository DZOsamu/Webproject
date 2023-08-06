// 本文件是utils工具包的唯一出口
// 把所有工具模块方法集中起来，统一向外暴露
const { getArraySum } = require('./lib/arr.js')
const { checkUser, checkPwd } = require('./lib/str.js')

// 同一导出到server.js
module.exports = {
   getArraySum,
   checkUser,
   checkPwd
}