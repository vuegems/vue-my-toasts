import Vue from "vue";
import MyToasts from "./components/MyToasts";

const version = "__VERSION__";

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
  const pluginOptions = {
    position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
    ...options // User provided value overrides the default ones above
  };

  const { reference, instance } = injectComponent(pluginOptions, component);

  Vue.prototype.$toasts = {
    push: toast => {
      // Check if toast id is specified
      if (!toast.id) toast.id = getUuid();

      // Add toast
      instance.add(toast);
    }
  };
};

/**
 * Register toast handler component to root
 * @param pluginOptions
 * @returns {{reference: Vue | object | Record<never, any>, instance: Vue}}
 */
const injectComponent = (pluginOptions, userComponent) => {
  Vue.component("my-toasts-component", userComponent);

  const vueInstance = new Vue({
    render: h => h(MyToasts, { props: pluginOptions })
  });

  const component = vueInstance.$mount();

  document.body.appendChild(component.$el);

  return {
    reference: component,
    instance: component.$children[0]
  };
};

const getUuid = () => {
  return "toast-" + Date.now() + "-" + Math.floor(Math.random() * 10);
};

// ------------------------------------------------------------------------------
// EXPORTS
// ------------------------------------------------------------------------------

const plugin = {
  install,
  version
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
