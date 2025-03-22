import { Title } from 'chart.js';

export const constantRoute=[
    {
        path:'/',
        name:'home',
        component:()=>import('@/view/home/index.vue'),
        meta:{
            title:'主页'
        }
    },
    {
        path:'/weather',
        name:'weather',
        component:()=>import('@/view/weather/index.vue'),
        meta:{
            title:'天气'
        },
        
        
    },
    {
        path:'/weather/displayView',
        name:'displayView',
        component:()=>import('@/view/weather/displayView/index.vue'),
        meta:{
            title:''
        }
        
    }

]