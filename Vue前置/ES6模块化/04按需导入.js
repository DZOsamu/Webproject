import info, { s1, s2 as str2, say } from './03按需导出.js'

console.log(s1)
// console.log(s2)    // 报错
console.log(str2)
console.log(say)

console.log(info)   // 指向默认导出的对象