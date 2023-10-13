import thenFs from 'then-fs'

// thenFs.readFile('./files/1.txt', 'utf8').then(r1 => { console.log(r1) })
// thenFs.readFile('./files/2.txt', 'utf8').then(r2 => { console.log(r2) })
// thenFs.readFile('./files/3.txt', 'utf8').then(r3 => { console.log(r3) })
// 以上方法不能保证文件是按顺序读取的

thenFs.readFile('./files/11.txt', 'utf8')
.catch(err => {   // 如果不希望前面的错误影响后面的.then()正常执行，可以将.catch()的调用提前
   console.log(err.message)
})
.then(r1 => {
   console.log(r1)
   return thenFs.readFile('./files/2.txt', 'utf8')
}).then(r2 => {
   console.log(r2)
   return thenFs.readFile('./files/3.txt', 'utf8')
}).then(r3 => {
   console.log(r3)
})
// .catch(err => {
//    console.log(err.message)
// })