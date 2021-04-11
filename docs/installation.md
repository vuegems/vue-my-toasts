# Installation

Add it to your project with your favorite package manager.

```bash
npm install vue-my-toasts
```

```bash
yarn add vue-my-toasts
```

Please note that if you are using **Vue 2** or **Nuxt**, you need to install the [**Composition API**](https://v3.vuejs.org/guide/composition-api-introduction.html).

The **required** packages can be found [**here for Vue 2**](https://github.com/vuejs/composition-api), and [**here for Nuxt**](https://composition-api.nuxtjs.org/).

## Configuration

Inject the plugin to your Vue instance, and configure it using the parameters.

```javascript
import VueMyToasts from 'vue-my-toasts'
import YourToastComponent from '~/components/toasts/YourToastComponent'

Vue.use(VueMyToasts, {
  component: YourToastComponent,
  options: {
    width: '400px',
    position: 'bottom-right',
    padding: '1rem',
  },
})
```
