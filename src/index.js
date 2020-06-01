// ------------------------------------------------------------------------------
// IMPORTS
// ------------------------------------------------------------------------------
import Vue from "vue";
import MyToasts from "./components/MyToasts.vue";
import TailwindComponent from "./components/toasts/TailwindComponent.vue";
import TimerMixin from "./mixins/TimerMixin";
import ToastMixin from "./mixins/ToastMixin";

// Variables
// -- Package version
const version = "__VERSION__";
// -- Main plugin reference
// eslint-disable-next-line no-unused-vars
let reference = null;
// -- Main plugin instance
let instance = null;

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
  // Initialize options, overriding default config by user provided one
  let pluginOptions = {
    position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
    ...options // User provided value overrides the default ones above
  };

  const updateConfig = () => {
    // Remove present root element
    const rootEl = document.querySelector("#vue-my-toasts-root");

    if (rootEl) {
      rootEl.remove();
    }

    // Get component instance & reference
    let componentData = injectComponent(pluginOptions, component);
    reference = componentData.reference;
    instance = componentData.instance;
  };

  // Initialize config
  updateConfig();

  // Inject into vue prototype
  Vue.prototype.$toasts = {
    /**
     * Add a new toast to the instance
     *
     * @param toast
     */
    push: toast => {
      // Check if toast id is specified
      if (!toast.id) toast.id = getUuid();

      // Add toast
      instance.add(toast);
    },
    /**
     * Remove a toast from the instance
     *
     * @param toastId
     */
    remove: toastId => {
      // Check if toastId is specified
      if (!toastId) {
        console.warn(
          "You need to provide a toastId to remove a toast programatically."
        );

        return;
      }

      // Remove toast from component
      instance.remove(toastId);
    },
    /**
     * Update the used toasts config
     *
     * @param newOptions
     */
    updateConfig: newOptions => {
      pluginOptions = {
        ...pluginOptions,
        ...newOptions
      };

      updateConfig();
    }
  };
};

/**
 * Register toast handler component to root
 * @param pluginOptions
 * @returns {{reference: Vue | object | Record<never, any>, instance: Vue}}
 */
const injectComponent = (pluginOptions, userComponent) => {
  // Inject user provided component
  Vue.component("my-toasts-component", userComponent);

  // Create toasts layer instance
  const vueInstance = new Vue({
    render: h => h(MyToasts, { props: pluginOptions })
  });

  // Create component
  const component = vueInstance.$mount();

  // Append component to body
  document.body.appendChild(component.$el);

  // Return created instances
  return {
    reference: component,
    instance: component.$children[0]
  };
};

/**
 * Get a toast uuid, useful when no `id` is provided by the user.
 *
 * @returns {string}
 */
const getUuid = () => {
  return "toast-" + Date.now() + "-" + Math.floor(Math.random() * 10);
};

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
  version,
  components: {
    TailwindComponent
  },
  mixins: {
    TimerMixin,
    ToastMixin
  }
};

/**
 * Vue plugin w/ install method
 */
export default plugin;

/**
 * Try to auto-inject if Vue is loaded as a script tag.
 */
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
