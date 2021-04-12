<template>
  <div
    :class="[
      `alert-${color}`,
      {
        'mb-2': position.includes('top'),
        'mt-2': position.includes('bottom'),
      },
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
        width: percentageElapsed + '%',
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineToastComponent } from 'vue-my-toasts'

export default defineToastComponent({
  name: 'BootstrapComponent',

  props: {
    title: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
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
    },
  },
})
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
