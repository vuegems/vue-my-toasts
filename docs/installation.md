# Installation

Add it to your project with your favorite package manager.

```bash
npm install vue-my-toasts
```

```bash
yarn add vue-my-toasts
```

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
