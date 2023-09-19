// 2.修改webpack打包入口和出口
// 2.1 项目根目录 新建webpack.config.js配置文件
// 2.2 导出配置对象 配置入口出口文件路径
// 2.3 重新打包观察


const path = require('path')

module.exports = {
   // 入口
   entry: path.resolve(__dirname, 'src/login/index.js'),
   // 出口
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './login/index.js',
      clean: true   //生成打包的内容之前，先清空输出目录
   }
}