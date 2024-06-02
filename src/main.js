import { createApp } from 'vue'
import App from './App.vue'
import 'vue3-carousel/dist/carousel.css'
import './assets/css/style.scss'
import router from './router.js';

createApp(App).use(router).mount('#app');
