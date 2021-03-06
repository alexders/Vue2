import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component: ()=>import('@/views/Main.vue'),
    children:[
      {
        path:'/',
        name:'home',
        component: ()=>import('@/views/Home/Home.vue')
      },
      {
        path:'/video',
        name:'video',
        component: ()=>import('@/views/VideoManger/VideoManger.vue')
      }, 
      {
        path:'/user',
        name:'user',
        component: ()=>import('@/views/UserManger/UserManger.vue')
      },
      {
        path:'/page1',
        name:'page1',
        component: ()=>import('@/views/OtherManger/PageOne.vue')
      },
      {
        path:'/page2',
        name:'page2',
        component: ()=>import('@/views/OtherManger/PageTwo.vue')
      },
    ]
  },
];

// 重复点击路由时会报错，就加上这段代码，重写一些push方法，或者降低到v-router 3.0版本
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes,
});

export default router;
