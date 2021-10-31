import Mock from 'mockjs'

export default {
    getHmoeDate: () => {
        return {
            code: 2000,
            data: {
                //折线图
                saleData: {
                    //视频中为14组对象数据？不清楚为什么要十四组
                    selldata: [{
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                        {
                            Vue: Mock.Random.float(1000, 10000, 0, 2),
                            JavaScript: Mock.Random.float(1000, 10000, 0, 2),
                            uniapp: Mock.Random.float(1000, 10000, 0, 2),
                            "Node.js": Mock.Random.float(1000, 10000, 0, 2),
                            React: Mock.Random.float(1000, 10000, 0, 2),
                            wechat: Mock.Random.float(1000, 10000, 0, 2),
                        },
                    ],
                    selltime: [
                        '20211011', '20211012', '20211013', '20211014', '20211015', '20211016', '20211017'
                    ]
                },
                //饼图
                videoData: [{
                        name: 'SpringBoot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'vue',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'react',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'java',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'es6',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: '小程序',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                ],
                //下面是bar图，用户数据
                userData: {
                    time: [
                        '周一', '周二', '周三', '周四', '周五', '周六', '周日'
                    ],
                    num: [{
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                        {
                            '新增用户': Mock.Random.integer(10, 100),
                            '活跃用户': Mock.Random.integer(40, 400),
                        },
                    ]
                },
                //下面是表单数据
                tableData: [{
                        name: 'Vue',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                    {
                        name: 'JavaScript',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                    {
                        name: 'uniapp',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                    {
                        name: 'Node.js',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                    {
                        name: 'React',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                    {
                        name: '小程序',
                        todayBuy: Mock.Random.float(500, 800, 0, 2),
                        monthBuy: Mock.Random.float(10000, 20000, 0, 2),
                        totalBuy: Mock.Random.float(100000, 300000, 0, 2)
                    },
                ],

            }
        }
    }
}