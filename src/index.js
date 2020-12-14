// ------------------------------------------------------------------------------
// IMPORTS
// ------------------------------------------------------------------------------
import { push, remove, updateConfig } from './lib/instanceMethods'
import helperMethods from './lib/helperMethods'

// ------------------------------------------------------------------------------
// VARIABLES
// ------------------------------------------------------------------------------
const version = '__VERSION__'
let pluginOptions = {
  width: '400px', // CSS variable
  padding: '1rem', // CSS variable
  position: 'bottom-right' // top-left, top-right, bottom-left, bottom-right, top-middle, bottom-middle
}

// ------------------------------------------------------------------------------
// FUNCTIONS
// ------------------------------------------------------------------------------
/**
 * Install the plugin into Vue
 *
 * @param Vue
 * @param component
 * @param options
 */
const install = (Vue, { component, options }) => {
  // Overriding default config by user provided one
  pluginOptions = {
    ...pluginOptions,
    ...options
  }

  // Initialize config
  updateConfig(pluginOptions, component)

  // Inject into vue prototype
  Vue.prototype.$toasts = {
    push,
    remove,
    ...helperMethods,
    /**
     * Update the used toasts config
     *
     * @param newOptions
     */
    updateConfig: (newOptions, userComponent = component) => {
      pluginOptions = {
        ...pluginOptions,
        ...newOptions
      }

      updateConfig(pluginOptions, userComponent)
    }
  }
}

// ------------------------------------------------------------------------------
// EXPORTS
// ------------------------------------------------------------------------------

/**
 * Vue plugin functions, default component and mixins
 *
 * @type {{
 *  install: install,
 *  version: string
 * }}
 */
const plugin = {
  install,
  version
}

export default plugin

/**
 * Try to auto-inject if Vue is loaded as a script tag.
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
