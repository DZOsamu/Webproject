// 权限插件（引入到了除登录页面，以外的其他所有页面）

// 1.访问权限控制
// 1.1 判断无token令牌字符串，则强制跳转到登录页
const token = localStorage.getItem('token')
if (!token) {
   location.href = '../login/index.html'
}
// 1.2 登录成功后，保存token令牌字符串到本地，并跳转到内容列表页面（publish/index.js）


// 2.设置个人信息
// 2.1 在utils/request.js设置请求拦截器，统一携带token
// 2.2 请求个人信息并设置到页面
axios({
   url: '/v1_0/user/profile'
}).then(result => {
   // console.log(result)
   const username = result.data.name
   document.querySelector('.nick-name').innerHTML = username
})

// 3.退出登录
// 3.1 绑定点击事件
document.querySelector('.quit').addEventListener('click', e => {
   // 3.2 清空本地缓存，跳转到登录页面
   localStorage.clear()
   location.href = '../login/index.html'
})