import Vue from 'vue'
import App from './App.vue'
import router from './basic_service/router'
import store from './store'
import '../node_modules/normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'
import BasePage from '@/components/common/BasePage.vue'
import { xssOptions } from '@/basic_service/plugin/xss'
import VueXss from 'vue-xss'

Vue.component('BasePage', BasePage)
Vue.use(VueXss, xssOptions)
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
