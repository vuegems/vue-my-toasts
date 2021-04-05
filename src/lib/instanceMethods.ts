import { App, Ref, ref } from 'vue-demi'
import type {
  MyToastsInstance,
  VueMyToastsComponent,
  VueMyToastsOptions,
  VueMyToastsPayload
} from '../types'
import getUuid from './getUuid'
import injectComponent from './injectComponent'

// -- Main plugin reference
// eslint-disable-next-line no-unused-vars
export let reference: App<Element> | null = null
// -- Main plugin instance
export let instance: MyToastsInstance | null = null
// -- Shallow reference for instance toasts
export let toasts: Ref<VueMyToastsPayload[]> = ref([])

/**
 * Add a new toast to the instance
 *
 * @param toast
 */
export const push = (toast: VueMyToastsPayload) => {
  // Check if instance exists
  if (!instance) return

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
export const remove = (toastId: string) => {
  // Check if instance exists
  if (!instance) return

  // Check if toastId is specified
  if (!toastId) {
    console.warn(
      'You need to provide a toastId to remove a toast programatically.',
    )

    return
  }

  // Remove toast from component
  instance.remove(toastId)
}

/**
 * Update the plugin config
 */
export const updateConfig = async (
  pluginOptions: VueMyToastsOptions,
  component: VueMyToastsComponent,
) => {
  // Remove present root element
  const rootEl = document.querySelector('#vue-my-toasts')

  // Unmount current instance
  if (reference) reference.unmount()

  // Delete current instance element
  if (rootEl) rootEl.remove()

  // Get component instance & reference
  const componentData = injectComponent(pluginOptions, component)

  // Assign new instance values
  reference = componentData.reference
  instance = componentData.instance as MyToastsInstance
  toasts = instance.toasts
}

export default { push, remove, updateConfig }
