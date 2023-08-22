// 获取数据
axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    creator: '小黑'
  }
}).then(result => {
  const userObj = result.data.data
  console.log(userObj)
  
  // 回显数据
  Object.keys(userObj).forEach(key=>{
    if (key === 'avatar') {
      // 赋予默认头像
      document.querySelector('.prew').src = userObj[key]
    } else if (key === 'gender') {
      // 赋予默认性别
      // 获取性别单选框 伪数组 [男radio元素, 女radio元素]
      const gRadioList = document.querySelector('.gender')
      // 获取性别数字 男0 女1
      const gNum = userObj[key]
      // 通过性别数字作为下标，找到对应单选框设置选中状态
      gRadioList[gNum].checked = true
    } else {
      // 赋予默认内容
      document.querySelector(`${key}`).value = userObj[key]
    }
  })
})
