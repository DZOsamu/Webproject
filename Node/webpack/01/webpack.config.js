// 2.修改webpack打包入口和出口
// 2.1 项目根目录 新建webpack.config.js配置文件
// 2.2 导出配置对象 配置入口出口文件路径
// 2.3 重新打包观察


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

module.exports = {
   // 打包模式 配置对象方式（development 开发模式-使用相关内置优化）
   // mode: 'development',

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
      new MiniCssExtractPlugin({
         filename: './login/index.css'
      }),   // 生成css文件
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
   ],
   // 加载器 让webpack识别更多模块文件的内容
   module: {
      rules: [
         {
            test: /\.css$/i,
            // use: ["style-loader", "css-loader"]
            use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
         },
         {
            test: /\.less$/i,
            use: [
               // compiles Less to CSS
               // "style-loader",   不能和MiniCssExtractPlugin混用
               process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
               "css-loader",
               "less-loader"
            ]
         },
         {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset',
            generator: {
               filename: 'assets/[hash][ext][query]'
            }
         }
      ]
   },
   // 优化
   optimization: {
      // 最小化
      minimizer: [
         // 在webpack@5中，可以使用`...`语法来扩展现有的minimizer（即`terser-webpack-plugin`），将下一行取消注释（保证js代码还能压缩）
         `...`,
         new CssMinimizerPlugin()
      ]
   }
}