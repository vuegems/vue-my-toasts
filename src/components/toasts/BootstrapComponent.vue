<template>
  <div
    :class="[
      `alert-${color}`,
      {
        'mb-4': position.includes('top'),
        'mt-4': position.includes('bottom')
      }
    ]"
    class="position-relative alert w-100 alert-dismissible"
    role="alert"
  >
    <!-- Message -->
    {{ message }}

    <!-- Close button -->
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="$emit('remove')"
    >
      <span aria-hidden="true">&times;</span>
    </button>

    <!-- Loading bar -->
    <div
      class="loading-bar position-absolute bg-white"
      :style="{
        width: percentageElapsed + '%'
      }"
    />
  </div>
</template>

<script>
// If you are creating a new component from this, you should use:
// import ToastMixin from "vue-my-toasts/src/mixins/ToastMixin"
// import TimerMixin from "vue-my-toasts/src/mixins/TimerMixin"
import ToastMixin from '../../mixins/ToastMixin'
import TimerMixin from '../../mixins/TimerMixin'

export default {
  name: 'BootstrapComponent',

  mixins: [ToastMixin, TimerMixin],

  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: false
    }
  },

  computed: {
    color() {
      switch (this.type) {
        case 'base':
          return 'info'
        case 'warning':
          return 'warning'
        case 'error':
          return 'danger'
        case 'success':
          return 'success'
        default:
          return 'info'
      }
    }
  }
}
</script>

<style scoped>
.alert {
  margin-bottom: 0;
}

.loading-bar {
  height: 0.33rem;
  opacity: 75%;
  bottom: 0;
  left: 0;
}
</style>
