// 封装 校验手机号长度、验证码长度 的函数
// 命名导出 语句前加export
export const checkPhone = phone => phone.length === 11
export const checkCode = code => code.length === 6