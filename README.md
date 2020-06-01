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

This plugin aims to abstract what is boring in creating a toast notification plugin, and let you focus on designing your toast component while keeping a simple API to interact with.

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
    position: "bottom-right",
    padding: "1rem"
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
    position: "bottom-right",
    padding: "1rem"
  }
});
```

## Usage

vue-my-toasts come with a simple API that you can use from anywhere in your codebase.

As it is a Vue plugin, we inject our main functions and helpers in the Vue prototype under the key `$toasts`.

You can so access this from anywhere in your Vue components, and generally from anywhere you have access to your Vue instance.

```javascript
export default {
    name: "MyComponent",

    mounted() {
        // From helpers
        this.$toasts.success('This is my favorite toasts plugin.')
        
        // From base function
        this.$toasts.push({
            type: "warning",
            message: "This is definitely my favorite toasts plugin.",
        })
    }
}
```

## Create your own

If you want to create your own component, you can start from the [Demo one](src/components/toasts/TailwindComponent.vue).

You need to import the [ToastMixin](src/mixins/ToastMixin.js) in your component, so you have a good start with the default configuration.

If you want to have a timer inside your component, you can import the [TimerMixin](src/mixins/TimerMixin.js).

### Attributes

Attributes accessible by using the included mixins:

- [ToastMixin](src/mixins/ToastMixin.js):
- `this.id`: The ID of the toast, you can provide it yourself or it will be auto-generated.
- `this.index`: The index of the toast inside the currently visible list
- `this.type`: The type of the toast, can be: "base", "warning", "error", "success"
- `this.position`: The position of the toast, can be: "bottom-right", "bottom-left", "top-right", "top-left", "top-middle", "bottom-middle"
- `this.message`: The message of the toast.


- [TimerMixin](src/mixins/TimerMixin.js):
- `this.duration`: The duration for which the toast will be shown (in ms)
- `this.percentageElapsed`: The percentage elapsed of the toast duration
- `this.remaining`: The remaining time of the toast visible duration

### Events

- `$emit('remove')`: Remove event, that will close the current current toast.

## Credits

[Yaël GUILLOUX](mailto:yael.guilloux@gmail.com)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.