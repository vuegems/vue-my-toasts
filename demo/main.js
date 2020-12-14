import Vue from 'vue'
import App from './Demo'
import plugin from '../src/index'
import TailwindComponent from '../src/components/toasts/TailwindComponent'

Vue.use(plugin, {
  component: TailwindComponent,
  options: {
    position: 'bottom-right'
  }
})

Vue.config.productionTip = false

new Vue({
  // NOTE: if you need to inject as option, you can set here!
  // plugin,
  render: (h) => h(App)
}).$mount('#app')
