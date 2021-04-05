import { MotionVariants } from '@vueuse/motion'
import {
  ComponentPublicInstance,
  defineComponent,
  Ref,
  RendererElement,
} from 'vue-demi'

export type VueMyToastsComponent = typeof defineComponent

export type VueMyToastsPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-middle'
  | 'bottom-middle'

export type VueMyToastsOptions = {
  width?: string
  padding?: string
  position?: VueMyToastsPosition
  variants?: MotionVariants | VueMyToastsVariantsFunction
  [key: string]: any
}

export type VueMyToastsPluginOptions = {
  component: VueMyToastsComponent
  options: VueMyToastsOptions
}

export type MyToastsInstance = {
  add: (toast: VueMyToastsPayload) => void
  remove: (toastId: string) => void
  toasts: Ref<VueMyToastsPayload[]>
} & ComponentPublicInstance

export type VueMyToastsPayload = {
  id?: string
  type?: 'base' | 'success' | 'warning' | 'error' | string
  message?: string
  [key: string]: any
}

export type VueMyToastsUpdateConfig = (
  newOptions: VueMyToastsOptions,
  userComponent: typeof defineComponent,
) => void

export type VueMyToastsHelper = (
  message: string,
  options: VueMyToastsPayload,
) => void

export type VueMyToastsGlobalInstance = {
  toasts: Ref<VueMyToastsPayload[]>
  push: (toast: VueMyToastsPayload) => void
  remove: (toastId: string) => void
  base: VueMyToastsHelper
  success: VueMyToastsHelper
  warning: VueMyToastsHelper
  error: VueMyToastsHelper
  updateConfig: VueMyToastsUpdateConfig
}

export type TransitionComponentHook = (
  el: RendererElement,
  done: () => void,
) => void

export type VueMyToastsVariantsFunction = (
  position: VueMyToastsPosition,
  toastId?: string,
  index?: number,
) => MotionVariants

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $toasts: VueMyToastsGlobalInstance
  }
}
