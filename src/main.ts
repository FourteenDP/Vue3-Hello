import { createApp } from 'vue'
import App from './App'
import router from './router'
import './styles/index.css'

const app = createApp(App)


app.config.performance = true


app.use(router)
app.mount('#app')
