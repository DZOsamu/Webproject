setTimeout(function () {
   console.log(1)   // 4.下一个宏任务
})

new Promise(function (resolve) {
   console.log(2)   // 1.同步
   resolve()
}).then(function () {
   console.log(3)   // 3.微任务
})

console.log(4)   // 2.同步

// 2 4 3 1