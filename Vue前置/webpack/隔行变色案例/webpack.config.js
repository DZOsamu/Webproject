const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',   // 入口
   output: {   // 出口
      path: path.resolve(__dirname, 'dist'),   // 出口路径文件夹名字
      filename: 'bundle.js',   // 出口文件名字（代码打包进这里）
   },
   plugins: [new HtmlWebpackPlugin({   // plugins插件配置
      template: './pubilc/index.html'   // 告诉webpack 使用插件时 以我们自己的html文件为模板去生成dist/html文件
   })],
};