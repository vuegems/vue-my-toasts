# Toast Instance

The toast instance is exposed via both [**Composition API**](/usage/composition-api) or [**Options API**](/usage/options-api) usages.

It is all the methods and data exposed by the Vue instance created to handle your toasts.

## Data

### toasts

An array reference containing all your active toasts.

All these are objects containing all the data you passed via **message** and **options**.

## Functions

All the helpers accepts the same datas:

```javascript
base('message', options)
success('message', options)
warning('message', options)
error('message', options)
```

Options can be composed of **any data** you want to be passed to your component as a **prop**.

### `base()`

Push a **base** message.

<Try :options="{ type: 'base' }" />

### `success()`

Push a **success** message.

<Try :options="{ type: 'success' }" />

### `warning()`

Push a **warning** message.

<Try :options="{ type: 'warning' }" />

### `error()`

Push a **error** message.

<Try :options="{ type: 'error' }" />

### `push()`

Push a toast from a raw toast payload.

```javascript
push({
  message: 'message',
  ...options,
})
```

### `remove`

Remove a toast from its unique id.

```javascript
remove(id)
```

### `updateConfig()`

Update the toasts base config.

```javascript
updateConfig({
  component: NewComponent,
  options: {
    position: 'top-right',
  },
})
```
