# Guide

If you use this package, there is a **big chance** that you want to **create** your **own** toast **component**.

Don't be afraid, this is almost the same experience as creating a regular Vue component.

## How does this work ?

This package **adds** another **Vue instance** at the root of your app.

This is a **common thing** when it comes to "**fixed**" elements that appears **above** the rest of your **app**.

This new Vue instance is controlled via the [**Toast Instance**](/usage/toast-instance) injected in your app.

This is **important** to understand, because that means **every data** you want to see in your **toast** has to be **passed** as a **prop**.

Things such as **VueX Store**, **Vue Router**, **won't** be **followed** to this additional Vue instance.

You can still pass them as options from the [**Plugin Installation**](/installation).

## Using defineToastComponent

The package exposes a function called `defineToastComponent`, which is a wrapper around `defineComponent` from Vue.

It will inject the [**two mixins**](#mixins) that adds all the required parameters for the package to work properly.

```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineToastComponent } from 'vue-my-toasts'

export default defineToastComponent({
  name: 'ToastComponent',

  // Your component implementation...
})
</script>
```

## Mixins

[**defineToastComponent**](#using-definetoastcomponent) adds two mixins by default to your component.

Both are heavily commented so reading the source will make you understand what it does.

The first is called [**ToastMixin**](https://github.com/vuegems/vue-my-toasts/blob/master/src/mixins/ToastMixin.ts) and is **always** injected.

It holds all the **needed props** for a **toast**, but still can be **rewritten** from your component if needed.

The second one is called [**TimerMixin**](https://github.com/vuegems/vue-my-toasts/blob/master/src/mixins/TimerMixin.ts).

It holds all the **props and logic** used to implement the timer that can be seen on [**Default Components**](/create/defaults).

The injection of TimerMixin can be **disabled** by adding `false` as a **second** parameter to `defineToastComponent`.

```typescript
defineToastComponent({}, false) // Will disable `TimerMixin`
```
