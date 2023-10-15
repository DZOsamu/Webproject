// webpack打包的入口
import { addFn } from "./add/add"
import { getArrSum } from "./tool/tool"

console.log(addFn(2, 5))
console.log(getArrSum([2, 4, 5, 7]))