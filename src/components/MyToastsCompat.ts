import { MotionDirective, MotionVariants, useMotions } from '@vueuse/motion'
import {
  defineComponent,
  h,
  onBeforeMount,
  onBeforeUnmount,
  PropType,
  Ref,
  ref,
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

  directives: {
    'toast-motion': MotionDirective(),
  },

  setup(props) {
    const leaving = ref(false)

    const full = ref(false)

    const toasts = ref([]) as Ref<VueMyToastsPayload[]>

    // Handle
    const handleResize = () => {
      if (parseInt(props.width) > window.innerWidth) {
        full.value = true
      }
    }

    onBeforeMount(() => {
      window.addEventListener('resize', handleResize)

      handleResize()
    })

    onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

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
      full,
    }
  },

  render({
    full,
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
        class: [
          'vue-my-toasts',
          `vue-my-toasts-${position}`,
          { 'vue-my-toasts-full': full },
        ],
        style: {
          '--vueMyToastsWidth': width,
          '--vueMyToastsPadding': padding,
          display: toasts.length > 0 || leaving ? 'block' : 'none',
        },
      },
      [
        h(
          'transition-group',
          {
            css: false,
            onLeave: leave,
            tag: 'ul',
            class: [
              'vue-my-toasts-wrapper',
              `vue-my-toasts-wrapper-${position}`,
            ],
          },
          () =>
            toasts.map((toast: VueMyToastsPayload, index: number) =>
              h(
                'li',
                {
                  key: toast.id,
                  'data-id': toast.id,
                  props: {
                    variants: toastVariants(position, toast.id, index),
                  },
                  directives: [
                    {
                      name: 'toast-motion',
                      value: toast.id,
                    },
                  ],
                },
                [
                  h(component, {
                    class: [`vue-my-toasts-${position}`],
                    index,
                    position,
                    full,
                    onRemove: () => remove(toast.id),
                    ...toast,
                  }),
                ],
              ),
            ),
        ),
      ],
    )
  },
})
