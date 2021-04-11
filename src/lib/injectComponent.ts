import MyToasts from '../components/MyToasts'
import MyToastsCompat from '../components/MyToastsCompat'
import { createApp, isVue3 } from 'vue-demi'
import type { VueMyToastsComponent, VueMyToastsOptions } from '../types'

/**
 * Register toast handler component to root
 * @param pluginOptions
 * @returns {{reference: Vue | object | Record<never, any>, instance: Vue}}
 */
export default (
  pluginOptions: VueMyToastsOptions,
  userComponent: VueMyToastsComponent,
) => {
  // inject userComponent to the pluginOptions
  const _props = { ...pluginOptions, component: userComponent }

  // Create root element
  const rootEl = document.createElement('div')

  // Set root element id
  rootEl.id = 'vue-my-toasts'

  // Append component to body
  document.body.appendChild(rootEl)

  let vueInstance

  // Create toasts layer instance
  if (isVue3) {
    vueInstance = createApp(MyToasts, _props)
  } else {
    vueInstance = createApp(MyToastsCompat, _props)
  }

  // Create component
  const vueComponent = vueInstance.mount('#vue-my-toasts')

  // Return created instances
  return {
    reference: vueInstance,
    instance: vueComponent,
  }
}
