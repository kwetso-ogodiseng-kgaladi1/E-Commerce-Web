import { createApp } from 'vue'
import App from './App.vue' // Import the App component from the appropriate file

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
