import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css'
import './assets/styles.css'
import './components/RutinaEjercicio.vue'
import './components/Login.vue'
import  './components/Signup.vue';

import router from './router';

createApp(App).use(router).mount('#app');