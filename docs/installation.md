# Installation

## Direct Download / CDN

https://unpkg.com/vue-my-toasts/dist/vue-my-toasts 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-my-toasts@{{ $version }}/dist/vue-my-toast.js
 
Include vue-my-toasts after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-my-toasts/dist/vue-my-toasts.js"></script>
```

## NPM

```sh
$ npm install vue-my-toasts
```

## Yarn

```sh
$ yarn add vue-my-toasts
```

When used with a module system, you must explicitly install the `vue-my-toasts` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueMyToasts from 'vue-my-toasts'

Vue.use(VueMyToasts)
```

You don't need to do this when using global script tags.

