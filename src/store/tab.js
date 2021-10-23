module.exports={
    state: {
        menu:[

        ], //全部菜单
        currentMenu: null
    },
    mutations: {
        //选择菜单
        selectMenu(state,val){
            if (val.name !=='home'){
                state.currentMenu=val; //当前菜单更新为选择的菜单
            } else {
                state.currentMenu=null;
            }
        }
    },
    actions: {},

}