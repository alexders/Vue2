module.exports = {
    state: {
        menu: [

        ], //全部菜单
        currentMenu: null,
        tabList: [{
            path: "/",
            name: "home",
            lable: "首页",
            icon: "home"
        }]
    },
    mutations: {
        //选择菜单
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val; //当前菜单更新为选择的菜单
                let result = state.tabList.findIndex(item => item.name == val.name);
                result == -1 ? state.tabList.push(val) : '';
                
            } else {
                state.currentMenu = null;
            }
        },
        closeTab(state, val) {
            let result = state.tabList.findIndex(item => item.name == val.name)
            state.tabList.splice(result, 1);
        }
    },
    actions: {},

}