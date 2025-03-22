import { defineStore } from "pinia";
import {constantRoute} from '@/router/routes'
import Request from "@/unit/request";



export default defineStore('store',{
    //保存数据
    state:()=>({
        //路由数据
        sidderRoutes:constantRoute,
        name:'',
        weather:{},
        main:{},
        wind:{},
        forecast:[],
        forecastTime:[],
        forecastTemp:[]
       
    }),
    actions:{
        // 发送请求获取当前数据
        async getResult(city){
            
            try{
                await Request.request(city).then((result)=>{

                    if(result){
                        this.name=result.data.name,
                        this.weather=result.data.weather
                        this.main=result.data.main
                        this.wind=result.data.wind
                    } 
                })
            }catch(err){
                
                alert(err.message)
                
                return Promise.reject(err)
            } 
        },
        //发送请求获取预测数据
        async getMulTemp(city){
            try{
                const result=Request.requestForecast(city).then((data)=>{
                    this.forecast=data.data.list
                    // 获取预测数据的前六项数据（当前时间的及前后两个，三个小时数据）并返回
                    //温度及时间（由于openweather是三小时测一次）
                    function getForecast(data){
                        
                        let arrTemp=[]
                        let arrTime=[]
                        
                        for(let i=0;i<6;i++){
                            arrTime.push(data[i].dt_txt.split(" "))
                            
                            arrTemp.push(data[i].main.temp)
                        }
                        
                        let arrTimeHour=[]
                        arrTime.forEach(item => {
                            arrTimeHour.push(item[1])
                        });

                        return {arrTemp,arrTimeHour}

                    }
                    //将数据保存在仓库
                    const {arrTemp,arrTimeHour}=getForecast(data.data.list)

                    // let arr=data.data.list
                    // let arrTemp=[]
                    // let arrTime=[]
                    
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

                    this.forecastTime=arrTimeHour
                    this.forecastTemp=arrTemp

                   return 'ok'
                })
                            
                            // console.log(result);
                
            }catch(err){
                alert(err)
                return Promise.reject(err)
            }
        }

    }
})