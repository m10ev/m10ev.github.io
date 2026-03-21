import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './style.css'

const applyScheme = (dark: boolean) => {
  document.documentElement.classList.toggle('dark', dark)
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
applyScheme(mediaQuery.matches)
mediaQuery.addEventListener('change', e => applyScheme(e.matches))

createApp(App).mount('#app')
