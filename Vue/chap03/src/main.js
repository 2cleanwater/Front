import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: createElement => createElement(App)
  render: h => h(App),
}).$mount('#app')
