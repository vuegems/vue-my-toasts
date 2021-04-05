import { createApp } from 'vue'
import TailwindComponent from '../../src/components/toasts/TailwindComponent.vue'
import plugin from '../../src/index'
import App from './Demo.vue'

const app = createApp(App)

app.use(plugin, {
  component: TailwindComponent,
  options: {
    position: 'bottom-right',
  },
})

app.mount('#app')
