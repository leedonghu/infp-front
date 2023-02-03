
import { createWebHistory, createRouter } from "vue-router";
import home from '@/components/Home.vue'
import about from '@/components/About.vue'



// export default new VueRouter({
//     mode : 'history',
//     routes: [{
//         path : '/',
//         redirect : '/home'
//     },{
//         path :'/home',
//         component : home
//     },{
//         path : '/about',
//         component : about
//     }]
// })

const routes = [
    {
        path: '/home',   //라우터 경로
        component: home //라우터 매칭 컴포넌트
    },
    {
        path : '/about',
        component : about
    }
    // {
    //     path: '/chart',
    //     redirect: '/chart/null/null', //'/chart' 경로이면 /chart/null/null 경로로 요청됨
    //     component: ()=>import('@/views/Chart.vue')
    // },
    // {
    //     path: '/chart/:mode/:id', //param 값 입력 가능
    //     name: 'chart',
    //     component: ()=> import('@/views/Chart.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;