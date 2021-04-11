# Composition API

The **Composition API** usage is allowed by the use of a hook called **useToasts**.

You can use this from **anywhere**, even outside of your Vue instance.

The object exposed is called the [**Toast Instance**](/usage/toast-instance), visit the page to discover its functions.

```vue
<script setup>
import { useToasts } from 'vue-my-toasts'

const { success } = useToasts()

success('The shortest way to send a toast ever.')
</script>
```
