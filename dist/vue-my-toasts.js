import Vue from 'vue';

/**
 * Get a toast uuid, useful when no `id` is provided by the user.
 *
 * @returns {string}
 */
function getUuid () {
  return 'toast-' + Date.now() + '-' + Math.floor(Math.random() * 10)
}

var MyToasts = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.toasts.length > 0)?_c('div',{class:['vue-my-toasts', _vm.position],style:({
    '--vueMyToastsWidth': _vm.width,
    '--vueMyToastsPadding': _vm.padding
  }),attrs:{"id":"vue-my-toasts-root"}},[_c('transition-group',{class:['vue-my-toasts-wrapper', _vm.position],attrs:{"duration":"350","name":_vm.position.includes('middle') ? 'fade-vertical' : 'fade-horizontal',"tag":"ul"}},_vm._l((_vm.toasts),function(toast,index){return _c(_vm.component,_vm._b({key:toast.id,tag:"component",class:[
        _vm.position.includes('middle') ? 'fade-vertical' : 'fade-horizontal',
        _vm.position
      ],attrs:{"index":index,"position":_vm.position},on:{"remove":function($event){return _vm.remove(toast.id)}}},'component',toast,false))}),1)],1):_vm._e()},
staticRenderFns: [],
  name: 'MyToasts',

  props: {
    padding: {
      type: String,
      required: false,
      default: '1rem'
    },
    width: {
      type: String,
      required: false,
      default: '400px'
    },
    position: {
      type: String,
      required: false,
      default: 'bottom-right'
    },
    component: {
      type: [Object, Function],
      required: true
    }
  },

  data: function () { return ({
    toasts: []
  }); },

  methods: {
    /**
     * Add toast to instance
     *
     * @param toast
     */
    add: function add(toast) {
      // Push the toast data to the toasts list
      this.toasts.push(toast);
    },
    /**
     * Remove toast from instance
     *
     * @param toastId
     */
    remove: function remove(toastId) {
      if ( toastId === void 0 ) toastId = null;

      // Break if there is no toast to delete
      if (this.toasts.length === 0) { return }

      // Get last toast id if no toastId is provided
      toastId = toastId || this.toasts[0].id;

      // Filter the toasts
      this.toasts = this.toasts.filter(function (toast) { return toast.id !== toastId; });
    }
  }
};

/**
 * Register toast handler component to root
 * @param pluginOptions
 * @returns {{reference: Vue | object | Record<never, any>, instance: Vue}}
 */
function injectComponent (pluginOptions, userComponent) {
  // inject userComponent to the pluginOptions
  var _props = Object.assign({}, pluginOptions, {component: userComponent});
  // Create toasts layer instance
  var vueInstance = new Vue({
    render: function (h) { return h(MyToasts, { props: _props }); }
  });

  // Create component
  var component = vueInstance.$mount();

  // Append component to body
  document.body.appendChild(component.$el);

  // Return created instances
  return {
    reference: component,
    instance: component.$children[0]
  }
}

// -- Main plugin instance
var instance = null;

/**
 * Add a new toast to the instance
 *
 * @param toast
 */
var push = function (toast) {
  // Check if toast id is specified
  if (!toast.id) { toast.id = getUuid(); }

  // Add toast
  instance.add(toast);
};

/**
 * Remove a toast from the instance
 *
 * @param toastId
 */
var remove = function (toastId) {
  // Check if toastId is specified
  if (!toastId) {
    console.warn(
      'You need to provide a toastId to remove a toast programatically.'
    );

    return
  }

  // Remove toast from component
  instance.remove(toastId);
};

/**
 * Update the plugin config
 */
var updateConfig = function (pluginOptions, component) {
  // Remove present root element
  var rootEl = document.querySelector('#vue-my-toasts-root');

  // Delete current instance
  if (rootEl) {
    rootEl.remove();
  }

  // Get component instance & reference
  var componentData = injectComponent(pluginOptions, component);
  instance = componentData.instance;
};

/**
 * The following 4 functions are helpers.
 * base(), success(), warning(), error() accepts `message` as first argument, and `options` as a second one.
 */
var helperMethods = {
  base: function (message, options) {
    if ( options === void 0 ) options = {};

    push(Object.assign({}, {type: 'base',
      message: message},
      options));
  },
  success: function (message, options) {
    if ( options === void 0 ) options = {};

    push(Object.assign({}, {type: 'success',
      message: message},
      options));
  },
  warning: function (message, options) {
    if ( options === void 0 ) options = {};

    push(Object.assign({}, {type: 'warning',
      message: message},
      options));
  },
  error: function (message, options) {
    if ( options === void 0 ) options = {};

    push(Object.assign({}, {type: 'error',
      message: message},
      options));
  }
};

// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// VARIABLES
// ------------------------------------------------------------------------------
var version = '1.1.1';
var pluginOptions = {
  width: '400px', // CSS variable
  padding: '1rem', // CSS variable
  position: 'bottom-right' // top-left, top-right, bottom-left, bottom-right, top-middle, bottom-middle
};

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
var install = function (Vue, ref) {
  var component = ref.component;
  var options = ref.options;

  // Overriding default config by user provided one
  pluginOptions = Object.assign({}, pluginOptions,
    options);

  // Initialize config
  updateConfig(pluginOptions, component);

  // Inject into vue prototype
  Vue.prototype.$toasts = Object.assign({}, {push: push,
    remove: remove},
    helperMethods,
    /**
     * Update the used toasts config
     *
     * @param newOptions
     */
    {updateConfig: function (newOptions, userComponent) {
      if ( userComponent === void 0 ) userComponent = component;

      pluginOptions = Object.assign({}, pluginOptions,
        newOptions);

      updateConfig(pluginOptions, userComponent);
    }});
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
var plugin = {
  install: install,
  version: version
};

/**
 * Try to auto-inject if Vue is loaded as a script tag.
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
