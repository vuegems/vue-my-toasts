import {
  ComponentOptions,
  ComponentOptionsMixin,
  defineComponent,
} from 'vue-demi'
import TimerMixin from './TimerMixin'
import ToastMixin from './ToastMixin'

const defineToastComponent = (
  parameters: ComponentOptions,
  withTimer: boolean = true,
) => {
  const mixins: ComponentOptionsMixin[] = [ToastMixin]

  if (withTimer) {
    mixins.push(TimerMixin)
  }

  return defineComponent({
    ...parameters,
    mixins: [...(parameters.mixins || []), ...mixins],
  })
}

export default defineToastComponent
