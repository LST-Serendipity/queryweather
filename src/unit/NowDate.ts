// 获取当前时间（年月日时分秒）
export default function getDate(){
    const date=new Date()
    const time=date.toLocaleDateString()+'/'+date.toLocaleTimeString()
    return time
}