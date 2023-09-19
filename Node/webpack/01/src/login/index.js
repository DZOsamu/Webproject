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
document.querySelector('.btn').addEventListener('click', () => {
   const phone = document.querySelector('.login-form [name=mobile]').value
   const code = document.querySelector('.login-form [name=code]').value

   if (!checkPhone(phone)) {
      console.log('手机号长度必须是11位')
      return
   }

   if (!checkCode(code)) {
      console.log('验证码长度必须是6位')
      return
   }

   console.log('提交到服务器')
})
// 3.3 打包并手动复制网页到dist下 引入打包后的js 运行