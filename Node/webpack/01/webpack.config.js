// 2.修改webpack打包入口和出口
// 2.1 项目根目录 新建webpack.config.js配置文件
// 2.2 导出配置对象 配置入口出口文件路径
// 2.3 重新打包观察


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   // 入口
   entry: path.resolve(__dirname, 'src/login/index.js'),
   // 出口
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './login/index.js',
      clean: true   //生成打包的内容之前，先清空输出目录
   },
   // 插件 给webpack提供更多功能
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/login.html'),   // 模板文件
         filename: path.resolve(__dirname, 'dist/login/index.html')   // 输出文件
      }),
      new MiniCssExtractPlugin()   // 生成css文件
   ],

   // 加载器 让webpack识别更多模块文件的内容
   module: {
      rules: [
         {
            test: /\.css$/i,
            // use: ["style-loader", "css-loader"]
            use: [MiniCssExtractPlugin.loader, "css-loader"]
         }

      ]
   }
}