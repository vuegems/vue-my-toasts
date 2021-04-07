import { MotionDirective, MotionVariants, useMotions } from '@vueuse/motion'
import {
  defineComponent,
  h,
  PropType,
  Ref,
  ref,
  TransitionGroup,
  withDirectives,
} from 'vue-demi'
import '../assets/style.css'
import type {
  TransitionComponentHook,
  VueMyToastsPayload,
  VueMyToastsPosition,
  VueMyToastsVariantsFunction,
} from '../types'

const defaultVariants: VueMyToastsVariantsFunction = (
  position: VueMyToastsPosition,
) => {
  return {
    initial: {
      y: position.includes('bottom') ? 50 : -50,
      opacity: 0,
      scale: 1,
    },
    enter: { y: 0, opacity: 1, scale: 1 },
    leave: { scale: 0, opacity: 0, height: 0 },
  }
}

export default defineComponent({
  name: 'MyToasts',

  directives: {
    motion: MotionDirective(),
  },

  props: {
    padding: {
      type: String as PropType<string>,
      required: false,
      default: '1rem',
    },
    width: {
      type: String as PropType<string>,
      required: false,
      default: '400px',
    },
    position: {
      type: String as PropType<string>,
      required: false,
      default: 'bottom-right',
    },
    component: {
      type: Object as PropType<typeof defineComponent>,
      required: true,
    },
    variants: {
      type: [Object, Function] as PropType<
        MotionVariants | VueMyToastsVariantsFunction
      >,
      required: false,
      default: ({ position }: { position: VueMyToastsPosition }) =>
        defaultVariants(position),
    },
  },

  setup(props) {
    const leaving = ref(false)
    const toasts = ref([]) as Ref<VueMyToastsPayload[]>

    /**
     * Add toast to instance
     *
     * @param toast
     */
    const add = (toast: VueMyToastsPayload) => {
      // Push the toast data to the toasts list
      toasts.value.push(toast)
    }

    /**
     * Remove toast from instance
     *
     * @param toastId
     */
    const remove = (toastId: string | undefined = undefined) => {
      leaving.value = true

      // Break if there is no toast to delete
      if (toasts.value.length === 0) return

      // Get last toast id if no toastId is provided
      toastId = toastId || toasts.value[0].id

      // Filter the toasts
      toasts.value = toasts.value.filter((toast) => toast.id !== toastId)
    }

    const leave: TransitionComponentHook = (el, done) => {
      leaving.value = true

      const motions = useMotions()

      const { height } = el.getBoundingClientRect()

      const instance = motions[el.dataset.id]

      instance.set({
        height,
      })

      instance.leave(() => {
        leaving.value = false
        done()
      })
    }

    /**
     * Get the animation variants for a toast
     *
     * @param position
     * @param toastId
     * @param index
     * @returns MotionVariants
     */
    const toastVariants: VueMyToastsVariantsFunction = (
      position: VueMyToastsPosition,
      toastId?: string,
      index?: number,
    ) => {
      let animations = {
        ...defaultVariants(position),
      }

      if (typeof props.variants === 'function') {
        animations = {
          ...animations,
          ...props.variants(position, toastId, index),
        }
      }

      if (typeof props.variants === 'object') {
        animations = { ...animations, ...props.variants }
      }

      return animations
    }

    return {
      toastVariants,
      leaving,
      toasts,
      add,
      remove,
      leave,
    }
  },

  render({
    position,
    width,
    padding,
    toasts,
    leaving,
    leave,
    toastVariants,
    component,
    remove,
  }: any) {
    return h(
      'div',
      {
        id: 'vue-my-toasts-root',
        class: ['vue-my-toasts', position],
        style: {
          '--vueMyToastsWidth': width,
          '--vueMyToastsPadding': padding,
          display: toasts.length > 0 || leaving ? 'block' : 'none',
        },
      },
      [
        h(
          TransitionGroup,
          {
            css: false,
            onLeave: leave,
            tag: 'ul',
            class: ['vue-my-toasts-wrapper', position],
          },
          () =>
            toasts.map((toast: VueMyToastsPayload, index: number) =>
              withDirectives(
                h(
                  'li',
                  {
                    key: toast.id,
                    'data-id': toast.id,
                  },
                  [
                    h(component, {
                      class: [position],
                      index,
                      position,
                      onRemove: () => remove(toast.id),
                      ...toast,
                    }),
                  ],
                ),
                [
                  [
                    MotionDirective(toastVariants(position, toast.id, index)),
                    toast.id,
                  ],
                ],
              ),
            ),
        ),
      ],
    )
  },
})
