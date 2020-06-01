<p align="center">
    <img src="./resources/vue-my-toasts.png" width="400">
</p>

---

# vue-my-toasts

A Vue toast plugin that finally lets you create your own toast component.

You can see a demo of the default behaviour [here](https://vue-my-toasts.netlify.app).

## Why another toast plugin ?

Most toast plugins out here comes with a pre-defined style.

I love some of these plugins, but you can't assume that your design will be used in every projects.

This plugin aims to abstract what is boring in creating a toast notification plugin, and let you focus on designing your toast component.

It comes with a pre-configured toast component, and mixins (base mixin and timer mixin for now) that you can import in your own component.

## Setup

Add it to your project with your favorite package manager.

```bash
npm install vue-my-toasts
```

```bash
yarn add vue-my-toasts
```

## Configure

Inject the plugin to your Vue instance, and configure it using the parameters.

```javascript
import VueMyToasts from "vue-my-toasts";
import YourToastComponent from "~/components/toasts/YourToastComponent"

Vue.use(VueMyToasts, {
  component: YourToastComponent,
  options: {
    width: "400px",
    position: "bottom-right"
  }
});
```

The whole principle of this package is to build your own toast component.

Still, it comes with an included component, based on Tailwind that is ready to be used, or copy pasted for your own implementation.

If you want to see the included component, you can watch the demo [here](https://vue-my-toasts.netlify.app).

```javascript
import VueMyToasts from "vue-my-toasts";
const { TailwindComponent } = VueMyToasts.components;

Vue.use(plugin, {
  component: TailwindComponent,
  options: {
    width: "400px",
    position: "bottom-right"
  }
});
```

## Create your own

If you want to create your own component, you can start from the [Demo one](src/components/toasts/TailwindComponent.vue).

You need to import the [ToastMixin](src/mixins/ToastMixin.js) in your component, so you have a good start with the default configuration.

If you want to have a timer inside your component, you can import the [TimerMixin](src/mixins/TimerMixin.js).

## Credits

[Yaël GUILLOUX](mailto:yael.guilloux@gmail.com)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.