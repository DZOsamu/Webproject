// 1.体验webpack打包过程
// 1.1 准备项目和源代码
// 1.2 准备webpack打包环境
// 1.3 运行 自定义命令 查看效果 npm run 自定义命令

import { checkCode, checkPhone } from "../utils/check.js"
console.log(checkPhone('15618092023'))
console.log(checkCode('879645123'))

// 2.修改webpack打包入口和出口
// 2.1 项目根目录 新建webpack.config.js配置文件
// 2.2 导出配置对象 配置入口出口文件路径
// 2.3 重新打包观察

// 3.用户登录 长度判断案例
// 3.1 准备用户登录页面
// 3.2 编写核心js逻辑代码
// document.querySelector('.btn').addEventListener('click', () => {
//    const phone = document.querySelector('.login-form [name=mobile]').value
//    const code = document.querySelector('.login-form [name=code]').value

//    if (!checkPhone(phone)) {
//       console.log('手机号长度必须是11位')
//       return
//    }

//    if (!checkCode(code)) {
//       console.log('验证码长度必须是6位')
//       return
//    }

//    console.log('提交到服务器')
// })
// 3.3 打包并手动复制网页到dist下 引入打包后的js 运行

// 4.使用html-webpack-plugin插件生成html网页文件，并引入打包后的其他资源
// 4.1 下载html-webpack-plugin本地软件包 npm i html-webpack-plugin --save-dev
// 4.2 配置webpack.config.js让webpack拥有插件功能（webpack.config.js）
// 4.3 重新打包观察结果

// 5打包css代码
// 5.1 准备css代码 并引入到js中
// 下载bootstrap第三方软件包 npm i bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// 将css一并引入过来让webpack处理，且接收的css对象在下面用不到，所以可以省略变量和from的书写

// 5.2 下载css-loader和style-loader本地软件包 npm i css-loader style-loader --save-dev
// 5.3 配置webpack.config.js让webpack拥有加载器功能（webpack.config.js）
// 5.4 打包观察结果

// 6.优化 提取css代码到单独的css文件中
// 6.1 下载mini-css-extract-plugin本地软件包 npm i mini-css-extract-plugin --save-dev
// 6.2 配置webpack.config.js让webpack拥有插件功能（webpack.config.js）
// 6.3 打包观察结果

// 7.优化 压缩css代码
// 7.1 下载css-minimizer-webpack-plugin本地软件包 npm i css-minimizer-webpack-plugin --save-dev
// 7.2 配置webpack.config.js让webpack拥有插件功能（webpack.config.js）
// 7.3 打包观察结果

// 8.打包less代码
// 8.1 新建less代码（设置背景图）并引入到src/login/index.js中
import './index.less'
// 8.2 下载less和less-loader本地软件包 npm i less less-loader --save-dev
// 8.3 配置webpack.config.js让webpack拥有功能（webpack.config.js）
// 8.4 打包观察结果

// 9.打包资源模块（图片处理）
// 9.1 创建img标签并动态添加到页面 配置webpack.config.js
// 9.2 打包后观察结果
// 注意：js中引入本地图片资源需要用import方式加载，如果是网络图片http地址，字符串可以直接写
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)

// 10.完成登录功能
// 10.1 使用npm下载axios（体验npm作用在前端项目中）
// 10.2 准备并修改utils工具包源代码导出实现函数
// 10.3 导入并编写逻辑代码，打包后运行观察结果
import myAxios from '../utils/request.js'
import { myAlert } from "../utils/alert.js"
document.querySelector('.btn').addEventListener('click', () => {
   const phone = document.querySelector('.login-form [name=mobile]').value
   const code = document.querySelector('.login-form [name=code]').value

   if (!checkPhone(phone)) {
      // console.log('手机号长度必须是11位')
      myAlert(false, '手机号长度必须是11位')
      return
   }

   if (!checkCode(code)) {
      // console.log('验证码长度必须是6位')
      myAlert(false, '验证码长度必须是6位')
      return
   }

   // console.log('提交到服务器')
   myAxios({
      url: '/v1_0/authorizations',
      method: 'POST',
      data: {
         mobile: phone,
         code: code
      }
   }).then(() => {
      myAlert(true, '登录成功')
   }).catch(error => {
      myAlert(false, error.response.data.message)
   })
})