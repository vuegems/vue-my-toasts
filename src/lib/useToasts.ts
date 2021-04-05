import { VueMyToastsGlobalInstance } from 'src/types'
import { updateConfig } from '../index'
import helperMethods from './helperMethods'
import { push, remove, toasts } from './instanceMethods'

/**
 * Returns the toasts instance methods
 *
 * @returns VueMyToastsGlobalInstance instance
 */
const useToasts = (): VueMyToastsGlobalInstance => ({
  toasts,
  push,
  remove,
  ...helperMethods,
  updateConfig,
})

export default useToasts
