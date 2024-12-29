
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LottieVuePlayer from '@lottiefiles/vue-lottie-player'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.use(LottieVuePlayer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')