import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
const pinia = createPinia()

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.provide("baseUrl", "https://dramatic-carpenter-production.up.railway.app");

app.mount('#app')