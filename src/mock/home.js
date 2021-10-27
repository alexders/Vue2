import Mock from 'mockjs'

export default {
    getHmoeDate:()=>{
        return {
            code:2000,
            data: {
                videoData:[
                    {
                        name:'SpringBoot',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'vue',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'react',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'java',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'es6',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name:'小程序',
                        value:Mock.Random.float(1000,10000,0,2)
                    },
                ]
                    
                
            }
        }
    }
}