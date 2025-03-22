import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/store/index'

import router from '@/router/index'


const app=createApp(App)

app.use(router)
app.use(pinia)


app.mount('#app')
