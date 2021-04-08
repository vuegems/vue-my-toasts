# Options API

vue-my-toasts come with a simple API that you can use from **anywhere** in your **codebase**.

As it is a Vue plugin, we **inject** our **functions** and **helpers** in the Vue **prototype** under the key **$toasts**.

You can so access this from **anywhere** in your **Vue components**, and generally from anywhere you have access to your **Vue instance**.

The object exposed is called the [**Toast Instance**](/usage/toast-instance), visit the page to discover its functions.

```javascript
export default {
  name: 'MyComponent',

  mounted() {
    // From helpers
    this.$toasts.success('This is my favorite toasts plugin.', {
      // Any other parameter...
    })

    // From base function
    this.$toasts.push({
      type: 'warning',
      message: 'This is definitely my favorite toasts plugin.',
      // Any other parameter...
    })
  },
}
```
