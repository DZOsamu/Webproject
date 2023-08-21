// 封装校验手机号长度、验证码长度的函数
export const checkPhone = phone => phone.length === 11
export const checkCode = code => code.length === 6

// 命名导出 加export