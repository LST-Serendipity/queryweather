<template>
    <div class="containerCheckview">
        <div class="weather">
            <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="" class="icon">
            <h1> {{temp}} ℃</h1>
        </div>
        <p>{{ description }}</p>
        <h4> 城市： {{ name }}</h4>
        <h4>风速：{{ speed }} m/s</h4>
        <p>{{ time }}</p>
        <button @click="backCheck">返回</button>
    </div>
    <div class="containerForecast">
        <div ref="chartDom" class="tempECharts"></div>
    </div>
</template>

<script setup lang='ts'>
    import useStore from '@/store/modale/datasidderL'
    import { onMounted, ref } from 'vue'
    import {useRouter} from 'vue-router'
    import * as echarts from 'echarts';
    import getDate from '@/unit/NowDate';


    const usestore=useStore()
    //获取仓库数据
    const {main,name,wind,weather,forecastTemp,forecastTime}=usestore.$state

    //获取数据并渲染页面
    const temp=ref((main as {temp:number}).temp)
    const speed=ref((wind as {speed:number}).speed)
    const icon=ref((weather as {icon:any})[0].icon)
    const description=ref((weather as {description:string})[0].description)
    
    const time=getDate()
    
   
    const chartDom = ref(null);
    let myChart = null;

    onMounted(()=>{

        // let arr=ListTemp.value
        // let arrTemp=[]
        // let arrTime=[]
        // // arr.forEach(item => {
        // //     arrTime.push(item.dt_txt)
        // //     arrTemp.push(item.main.temp)
        // // });
        
        // let a=[]

        // for(let i=0;i<6;i++){
        //     a.push(arr[i].dt_txt.split(" "))
        //     arrTime.push(arr[i].dt_txt)
        //     arrTemp.push(arr[i].main.temp)
        // }
        // console.log(a);
        // let b=[]
        // a.forEach(item => {
        //     b.push(item[1])
        // });
        // console.log(b);
        
        // console.log(arrTemp);
        // console.log(arrTime);
        
        //制作图表
        if (chartDom.value) {
        myChart = echarts.init(chartDom.value);
        const option = {
        xAxis: {
            type: 'category',
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            data:forecastTime
        },
        yAxis: {
            
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [{
            // data: [150, 230, 224, 218, 135, 147, 260],
            data:forecastTemp,
            type: 'line'
        }]
        };
        myChart.setOption(option);
    }
    })

    
    
    // const windSpeed=ref(main) 
    const $router=useRouter()
    
    const backCheck=()=>{
        $router.push('/weather')
    }
</script>

<style scoped >
    .containerCheckview{
        position: relative;
        background-color: rgb(193, 240, 240,0.2);
        width: 50%;
        height: 40%;

        margin: auto;
        border: 1px solid black;
        border-radius: 20px;
        align-items: center;
        .weather{
            display: flex;
            
        }
        .icon{
            width: 60px;
            height: 60px;
            margin: auto 5px;
            transition: transform 0.5s ease;
        }
        h1{
            margin: 10px 10px ;
            
        }
        p{
            text-align: center;
            margin: 5px 0;
        }
        h4{
            text-align: center;
            margin: 10px 0;
        }
        button{
            display: block;
            width: 100px;
            height: 30px;
            margin: 20px auto;
            border-radius: 5px;
            border-color: gray;
            background-color: transparent;
            transition: transform 0.5s ease;
        }
        
    }
    button:hover{
        box-shadow: 2px 2px 4px gray;
        transform: scale(1.1);
    }
    .icon:hover{
        transform: scale(1.2);
    }
    
    .containerForecast{
        position: relative;
        width: 95%;
        height: 52%;
        margin: auto;
        margin-top: 30px;
        border-radius: 20px;
        background-color: rgb(107, 166, 166,0.6);
        .tempECharts{
            position: relative;
            width: 90%;
            height: 100%;
            background-color: aquamarine;
            margin: 0 auto;
        }
    }
</style>