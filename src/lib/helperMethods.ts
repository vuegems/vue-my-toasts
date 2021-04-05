import { VueMyToastsOptions } from 'src/types'
import { push } from './instanceMethods'

/**
 * The following 4 functions are helpers.
 * base(), success(), warning(), error() accepts `message` as first argument, and `options` as a second one.
 */
export default {
  base: (message: string, options: VueMyToastsOptions = {}) => {
    push({
      type: 'base',
      message,
      ...options,
    })
  },
  success: (message: string, options: VueMyToastsOptions = {}) => {
    push({
      type: 'success',
      message,
      ...options,
    })
  },
  warning: (message: string, options: VueMyToastsOptions = {}) => {
    push({
      type: 'warning',
      message,
      ...options,
    })
  },
  error: (message: string, options: VueMyToastsOptions = {}) => {
    push({
      type: 'error',
      message,
      ...options,
    })
  },
}
