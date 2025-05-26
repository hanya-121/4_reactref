import { createApp } from 'vue'
import App from './App.vue'
import Emit from './components/Emit.vue'
//import FoodItem from './components/FoodItem.vue'


const app = createApp(App)

app.component('food-item', Emit)

app.mount('#app')
/*
404 = url오류
500 = 오타
400 = 기능을 부여하지 않았을때
*/