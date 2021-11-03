import Mock from 'mockjs'
import httpApi from './home'
import userApi from './user'
//模拟获取数据时间 20-200毫秒延时
Mock.setup({
    timeout:'20-200'
})

// 拦截home路径的ajax请求
Mock.mock(/\/home\/getData/,'get',httpApi.getHmoeDate);

// 用户页相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList);
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser);
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove);
Mock.mock(/\/user\/add/, 'post', userApi.createUser);
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser);
//Mock.mock(/\/home\/getData/, 'get', httpApi.getHomeData());