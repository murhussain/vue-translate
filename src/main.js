import { createApp } from 'vue/dist/vue.esm-bundler' // <--- 1
import App from './App.vue'
import router from './router'
import i18n from "./i18n" // <--- 2

createApp(App).
  use(router).
  use(i18n). // <--- 3
  mount('#app')