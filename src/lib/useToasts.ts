import { VueMyToastsGlobalInstance } from 'src/types'
import { updateConfig } from '../index'
import helperMethods from './helperMethods'
import { push, remove, toasts } from './instanceMethods'

const useToasts = (): VueMyToastsGlobalInstance => ({
  toasts,
  push,
  remove,
  ...helperMethods,
  updateConfig,
})

export default useToasts
