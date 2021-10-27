import axios from 'axios'

//创建一个实例
const service=axios.create({
    timeout:3000,

})
//添加一个请求拦截器，每个请求加入 token
service.interceptors.request.use(
    congfig=>{return congfig},
    err=>{
        console.log(err)
    }
)
//创建一个响应拦截器
service.interceptors.response.use(
    response => {
        let res={}
        res.state=response.state
        res.data=response.data
        return res
    },
    err=>{
        console.log(err)
    }
)
export default service;