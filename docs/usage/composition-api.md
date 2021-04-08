# Composition API

The **Composition API** usage is allowed by the use of a hook called **useToasts**.

You can use this from **anywhere**, even outside of your Vue instance.

```vue
<script setup>
import { useToasts } from 'vue-my-toasts'

const { success } = useToasts()

success('The shortest way to send a toast ever.')
</script>
```
