import './assets/style/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const buttonMenu = document.querySelector('.mobile-navigation__header-button')
const mobilenavigation = document.querySelector('.mobile-navigation')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    mobilenavigation.classList.toggle('opened')
}