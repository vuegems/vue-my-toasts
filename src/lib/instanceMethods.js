import getUuid from './getUuid'
import injectComponent from './injectComponent'

// -- Main plugin reference
// eslint-disable-next-line no-unused-vars
export let reference = null
// -- Main plugin instance
export let instance = null

/**
 * Add a new toast to the instance
 *
 * @param toast
 */
export const push = (toast) => {
  // Check if toast id is specified
  if (!toast.id) toast.id = getUuid()

  // Add toast
  instance.add(toast)
}

/**
 * Remove a toast from the instance
 *
 * @param toastId
 */
export const remove = (toastId) => {
  // Check if toastId is specified
  if (!toastId) {
    console.warn(
      'You need to provide a toastId to remove a toast programatically.'
    )

    return
  }

  // Remove toast from component
  instance.remove(toastId)
}

/**
 * Update the plugin config
 */
export const updateConfig = (pluginOptions, component) => {
  // Remove present root element
  const rootEl = document.querySelector('#vue-my-toasts-root')

  // Delete current instance
  if (rootEl) {
    rootEl.remove()
  }

  // Get component instance & reference
  let componentData = injectComponent(pluginOptions, component)

  reference = componentData.reference
  instance = componentData.instance
}
