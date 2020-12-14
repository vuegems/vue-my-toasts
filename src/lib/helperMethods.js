import { push } from './instanceMethods'

/**
 * The following 4 functions are helpers.
 * base(), success(), warning(), error() accepts `message` as first argument, and `options` as a second one.
 */
export default {
  base: (message, options = {}) => {
    push({
      type: 'base',
      message,
      ...options
    })
  },
  success: (message, options = {}) => {
    push({
      type: 'success',
      message,
      ...options
    })
  },
  warning: (message, options = {}) => {
    push({
      type: 'warning',
      message,
      ...options
    })
  },
  error: (message, options = {}) => {
    push({
      type: 'error',
      message,
      ...options
    })
  }
}
