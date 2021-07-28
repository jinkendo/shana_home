import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/index'

import {createRouter, createWebHashHistory} from 'vue-router'
import './assets/css/base.css'



function Init() {
    const app = createApp(App)

    const router = createRouter({
        history:createWebHashHistory(),
        routes
    })
    app.use(router)
    app.mount('#app')
}


export default { MODE: import.meta.env.MODE, VERSION:"SHANA", Init }