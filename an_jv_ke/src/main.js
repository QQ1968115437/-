import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import axios from "axios"
import qs from "qs"
import moment from 'moment'

Vue.prototype.axios=axios;
Vue.prototype.qs=qs;
Vue.prototype.moment=moment;

Vue.use(MintUI)
axios.defaults.baseURL="http://localhost:3000"

Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app')
