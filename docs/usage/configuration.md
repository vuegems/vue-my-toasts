# Configuration

The whole principle of this package is to **build** your **own** toast **component**.

It **comes** with **two** included **components**, based on **Tailwind** and **Bootstrap**.

Both of those components are ready to be used straight from your app, or to be copy/pasted to create your own implementation.

```javascript
import BoostrapComponent from 'vue-my-toasts/toasts/BootstrapComponent'
import TailwindComponent from 'vue-my-toasts/toasts/TailwindComponent'

Vue.use(VueMyToasts, {
  component: TailwindComponent || BoostrapComponent,
})
```

## Plugin Configuration

The plugin accepts an **options** key, that allows you to **configure** the **styling** for the toasts _wrapper_.

All those **properties** are passed to your **component** as **props** too.

You can also **add** any **data** you want **there**, that will also be **passed** to your **component**.

### `width`

The max width for a toast (as CSS attribute, preferably in **px**)

### `padding`

The padding of the box handling the toasts list (as CSS attribute, preferably in **px**)

### `position`

The position of the toast list, can be:

`bottom-right`, `bottom-left`, `top-right`, `top-left`, `top-middle`, `bottom-middle`

```javascript
Vue.use(VueMyToasts, {
  options: {
    width: '400px',
    position: 'bottom-right',
    padding: '1rem',
  },
})
```
