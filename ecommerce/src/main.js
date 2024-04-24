/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


import './App.vue'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(app)

registerPlugins(app)

app.mount('#app')

