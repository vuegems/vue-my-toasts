import Vue from 'vue'
import MyToasts from '../components/MyToasts.vue'

/**
 * Register toast handler component to root
 * @param pluginOptions
 * @returns {{reference: Vue | object | Record<never, any>, instance: Vue}}
 */
export default (pluginOptions, userComponent) => {
  // Inject user provided component
  Vue.component('my-toasts-component', userComponent)

  // Create toasts layer instance
  const vueInstance = new Vue({
    render: (h) => h(MyToasts, { props: pluginOptions })
  })

  // Create component
  const component = vueInstance.$mount()

  // Append component to body
  document.body.appendChild(component.$el)

  // Return created instances
  return {
    reference: component,
    instance: component.$children[0]
  }
}
