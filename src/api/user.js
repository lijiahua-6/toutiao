// 用户请求相关模块
// 导出请求函数，相关代码
// 把每一个接口都封装成一个方法，

import request from '@/utils/request' // 调用基础路径
// data 接收一下
export const login = data => {
  // 具体请求的代码
  return request({
    // 返回响应对象
    method: 'POST',
    url: '/app/v1_0/authorizations',
    headers: {
      // axios 会自动添加请求头
      //   'Content-Type':'application/json'//特殊符号需要加引号
    }, // 请求头参数
    //   params:{}, //查询参数
    data // 请求体
  })
}
export const getSmsCode = mobile => {
  // 具体请求的代码
  return request({
    // 返回响应对象
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
/**
 * 获取当前登录用户个人信息
 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

/**
 * 获取指定用户个人信息
 */
export const getUserById = userId => {
  return request({
    method: 'GET',
    url: `/app/v1_0/users/${userId}`
  })
}
