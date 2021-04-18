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

<div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem;">
  <Try :text="`Try bottom-left`" :config="{ position: 'bottom-left' }" />
  <Try :text="`Try bottom-middle`" :config="{ position: 'bottom-middle' }" />
  <Try :text="`Try bottom-right`" :config="{ position: 'bottom-right' }" />
</div>

<div style="display: flex; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
  <Try :text="`Try top-left`" :config="{ position: 'top-left' }" />
  <Try :text="`Try top-middle`" :config="{ position: 'top-middle' }" />
  <Try :text="`Try top-right`" :config="{ position: 'top-right' }" />
</div>

### `variants`

Toast **animations** are provided by [**useMotion**](https://motion.vueuse.org).

You can use `initial`, `enter`, `leave` variants, so your toasts has **nice** and **smooth** animations.

You can pass **variants** as a **plain object**, or a **toast variant function**.

This function accepts three parameters:

- `position`

  - A string from the [**position**](#position) parameter.

- `toastId`

  - The toast **id**.

- `index`
  - The toast **index** (position in the toast queue).

```javascript
Vue.use(VueMyToasts, {
  options: {
    width: '400px',
    position: 'bottom-right',
    padding: '1rem',
    variants: (position) => ({
      initial: {
        y: position.includes('bottom') ? 50 : -50,
        opacity: 0,
        scale: 1,
      },
      enter: { y: 0, opacity: 1, scale: 1 },
      leave: { scale: 0, opacity: 0, height: 0 },
    }),
  },
})
```
