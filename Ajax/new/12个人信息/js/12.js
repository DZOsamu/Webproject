// 1.信息渲染
const creator = '小池'
// 获取数据
axios({
  url: 'http://hmajax.itheima.net/api/settings',
  params: {
    // creator: '小池'   // 会多次用到，直接定义一个全局变量
    creator
  }
}).then(result => {
  const userObj = result.data.data
  // console.log(userObj)

  // 回显数据
  Object.keys(userObj).forEach(key => {
    if (key === 'avatar') {
      // 赋予默认头像
      document.querySelector('.prew').src = userObj[key]
    } else if (key === 'gender') {
      // 赋予默认性别
      // 获取性别单选框 伪数组 [男radio元素, 女radio元素]
      const gRadioList = document.querySelectorAll('.gender')
      // 获取性别数字 男0 女1
      const gNum = userObj[key]
      // 通过性别数字作为下标，找到对应单选框设置选中状态
      gRadioList[gNum].checked = true
    } else {
      // 赋予默认内容
      document.querySelector(`.${key}`).value = userObj[key]
    }
  })
})

// 2.修改头像
// 文件选择元素->change事件
document.querySelector('.upload').addEventListener('change', e => {
  // 获取头像文件
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  fd.append('creator', creator)

  // 提交服务器并更新头像
  axios({
    url: 'http://hmajax.itheima.net/api/avatar',
    method: 'PUT',
    data: fd
  }).then(result => {
    // console.log(result)
    const imgUrl = result.data.data.avatar
    // 把头像回显到页面上
    document.querySelector('.prew').src = imgUrl
  })
})

// 3.提交表单
// 保存修改->点击事件
document.querySelector('.submit').addEventListener('click', () => {
  // 收集表单信息 使用form-serialize插件
  const userForm = document.querySelector('.user-form')
  const userObj = serialize(userForm, { hash: true, empty: true })
  userObj.creator = creator
  // 性别数字字符串转成数字类型
  userObj.gender = +userObj.gender
  console.log(userObj);
  // 提交到服务器保存
  axios({
    url: 'http://hmajax.itheima.net/api/settings',
    method: 'PUT',
    data: userObj
  // }).then(result => {
  //   console.log(result)
    // const imgUrl = result.data.data.avatar
    // 把头像回显到页面上
    // document.querySelector('.prew').src = imgUrl
  })
})