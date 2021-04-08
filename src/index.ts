import { Plugin } from 'vue-demi'
import helperMethods from './lib/helperMethods'
import {
  push,
  remove,
  toasts,
  updateConfig as _updateConfig,
} from './lib/instanceMethods'
import useToasts from './lib/useToasts'
import defineToastComponent from './mixins/defineToastComponent'
import TimerMixin from './mixins/TimerMixin'
import ToastMixin from './mixins/ToastMixin'
import {
  VueMyToastsComponent,
  VueMyToastsGlobalInstance,
  VueMyToastsOptions,
  VueMyToastsPluginOptions,
} from './types'
// Exports
export * from './types'
export { useToasts, ToastMixin, TimerMixin, defineToastComponent }
export let currentComponent: VueMyToastsComponent | undefined = undefined
export let pluginOptions: VueMyToastsOptions = {
  width: '400px', // CSS variable
  padding: '1rem', // CSS variable
  position: 'bottom-right', // top-left, top-right, bottom-left, bottom-right, top-middle, bottom-middle
}

/**
 * Update the VueMyToasts options and reload instance.
 * @param newOptions
 * @param userComponent
 */
export const updateConfig = (
  newOptions: VueMyToastsOptions,
  userComponent: VueMyToastsComponent,
) => {
  pluginOptions = {
    ...pluginOptions,
    ...newOptions,
  }

  currentComponent = userComponent

  _updateConfig(pluginOptions, userComponent)
}

/**
 * Vue plugin functions, default component and mixins
 *
 * @type {{
 *  install: install,
 *  version: string
 * }}
 */
const plugin: Plugin = {
  /**
   * Install the plugin into Vue
   *
   * @param Vue
   * @param component
   * @param options
   */
  install: (app, { component, options }: VueMyToastsPluginOptions) => {
    // Overriding default config by user provided one
    pluginOptions = {
      ...pluginOptions,
      ...options,
    }

    // Initialize config
    updateConfig(pluginOptions, component)

    // Generate VueMyToasts global instance
    const $toasts: VueMyToastsGlobalInstance = {
      toasts,
      push,
      remove,
      ...helperMethods,
      updateConfig,
    }

    // Inject into Vue prototype
    app.provide('toasts', $toasts)
    app.config.globalProperties.$toasts = $toasts
  },
}

export default plugin

// Try to auto-inject if Vue is loaded as a script tag.
if (typeof window !== 'undefined' && (window as any).Vue) {
  ;(window as any).Vue.use(plugin)
}
