// 富文本编辑器
const { createEditor, createToolbar } = window.wangEditor   // 创建编辑器函数，创建工具栏函数

const editorConfig = {
   placeholder: '发布文章内容...',

   // 编辑器变化时的回调函数
   onChange(editor) {
      const html = editor.getHtml()
      console.log('editor content', html)
      // 也可以同步到 <textarea>

      // 为后续快速收集整个表单内容做铺垫
      document.querySelector('.publish-content').value = html
   }
}

const editor = createEditor({
   // 创建位置
   selector: '#editor-container',
   html: '<p><br></p>',
   // 配置项
   config: editorConfig,
   // 配置集成模式
   mode: 'default', // or 'simple' 简洁模式，仅部分常见功能
   // default 默认模式，集成wangEditor所有功能
})

// 工具栏配置对象
const toolbarConfig = {}

// 创建工具栏
const toolbar = createToolbar({
   editor,   // 为指定编辑器创建工栏
   selector: '#toolbar-container',
   config: toolbarConfig,
   mode: 'default', // or 'simple'
})