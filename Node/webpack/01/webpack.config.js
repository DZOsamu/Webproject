// 2.修改webpack打包入口和出口
// 2.1 项目根目录 新建webpack.config.js配置文件
// 2.2 导出配置对象 配置入口出口文件路径
// 2.3 重新打包观察


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')
const { serialize } = require('v8')

const config = {
   // 打包模式 配置对象方式（development 开发模式-使用相关内置优化）
   // mode: 'development',

   // 入口
   // entry: path.resolve(__dirname, 'src/login/index.js'),
   entry: {
      'login': path.resolve(__dirname, 'src/login/index.js'),
      'content': path.resolve(__dirname, 'src/content/index.js'),
      'publish': path.resolve(__dirname, 'src/publish/index.js')
   },
   // 出口
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './[name]/index.js',
      clean: true   //生成打包的内容之前，先清空输出目录
   },
   // 插件 给webpack提供更多功能
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/login.html'),   // 模板文件
         filename: path.resolve(__dirname, 'dist/login/index.html'),   // 输出文件
         useCdn: process.env.NODE_ENV === 'production',   // 生产模式下使用cdn引入的地址
         chunks: ['login']   // 引入哪些打包后的模块（和entry的key一致）
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/content.html'),   // 模板文件
         filename: path.resolve(__dirname, 'dist/content/index.html'),   // 输出文件
         useCdn: process.env.NODE_ENV === 'production',   // 生产模式下使用cdn引入的地址
         chunks: ['content']
      }),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public/publish.html'),   // 模板文件
         filename: path.resolve(__dirname, 'dist/publish/index.html'),   // 输出文件
         useCdn: process.env.NODE_ENV === 'production',   // 生产模式下使用cdn引入的地址
         chunks: ['publish']
      }),
      new MiniCssExtractPlugin({
         filename: './[name]/index.css'
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
   },
   // 解析别名
   resolve: {
      // 别名
      alias: {
         '@': path.resolve(__dirname, 'src')
      }
   }
}
// 开发环境下使用source-map选项
if (process.env.NODE_ENV === 'development') {
   config.devtool = 'inline-source-map'
}

// 生产环境下使用相关配置
if (process.env.NODE_ENV === 'production') {
   config.externals = {
      // key：import from 语句后面的字符串
      // value：留在原地的全局变量（最好和cdn在全局暴露的变量一致）
      'bootstrap/dist/css/bootstrap.min.css': 'bootstrap',
      'axios': 'axios',
      'form-serialize': 'serialize',
      '@wangeditor/editor': 'wangEditor'
   }
}

module.exports = config