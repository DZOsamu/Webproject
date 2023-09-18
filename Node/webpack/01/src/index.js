// 1.体验webpack打包过程
// 1.1 准备项目和源代码
// 命名导入 import {同名变量} from '模块名或路径'
import { checkPhone, checkCode } from "./utils/check.js"
console.log(checkPhone('15618092023'))
console.log(checkCode('879645123'))

// 1.2 准备webpack打包环境

// 1.3 运行 自定义命令 查看效果 npm run 自定义命令