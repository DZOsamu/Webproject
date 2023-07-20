/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

// 定义一个全局常量 外号
const creator = '池舟'

// 封装-获取并渲染图书列表的函数
function getBooksList() {
   // 1.1获取数据
   axios({
      url: 'http://hmajax.itheima.net/api/books',
      params: {
         // 外号：获取对应的数据
         creator
      }
   }).then(result => {
      // console.log(result)
      const bookList = result.data.data
      // console.log(bookList)

      // 1.2 渲染数据
      const htmlStr = bookList.map((item, index) => {
         return `
         <tr>
            <td>${index + 1}</td>
            <td>${item.bookname}</td>
            <td>${item.author}</td>
            <td>${item.publisher}</td>
            <td>
               <span class="del">删除</span>
               <span class="edit">编辑</span>
            </td>
         </tr>`
      }).join('')
      // console.log(htmlStr)
      document.querySelector('.list').innerHTML = htmlStr
   })
}

// 网页加载运行，获取并渲染列表一次
getBooksList()