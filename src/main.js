import Vue from 'vue'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
    render: h => h(App),
}).$mount('#app')