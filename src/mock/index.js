import Mock from 'mockjs'
import httpApi from './home'
//模拟获取数据时间 20-200毫秒延时
Mock.setup({
    timeout:'20-200'
})

// 拦截home路径的ajax请求
Mock.mock(/\/home\/getData/,'get',httpApi.getHmoeDate);