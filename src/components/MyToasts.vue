<template>
  <div
    id="vue-my-toasts-root"
    v-if="toasts.length > 0"
    :class="['vue-my-toasts', position]"
    :style="{
      '--vueMyToastsWidth': width,
      '--vueMyToastsPadding': padding
    }"
  >
    <transition-group
      duration="350"
      :name="position.includes('middle') ? 'fade-vertical' : 'fade-horizontal'"
      tag="ul"
      :class="['vue-my-toasts-wrapper', position]"
    >
      <component
        :is="component"
        :class="[
          position.includes('middle') ? 'fade-vertical' : 'fade-horizontal',
          position
        ]"
        v-for="(toast, index) of toasts"
        :key="toast.id"
        :index="index"
        :position="position"
        v-bind="toast"
        @remove="remove(toast.id)"
      ></component>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MyToasts',

  props: {
    padding: {
      type: String,
      required: false,
      default: '1rem'
    },
    width: {
      type: String,
      required: false,
      default: '400px'
    },
    position: {
      type: String,
      required: false,
      default: 'bottom-right'
    },
    component: {
      type: [Object, Function],
      required: true
    }
  },

  data: () => ({
    toasts: []
  }),

  methods: {
    /**
     * Add toast to instance
     *
     * @param toast
     */
    add(toast) {
      // Push the toast data to the toasts list
      this.toasts.push(toast)
    },
    /**
     * Remove toast from instance
     *
     * @param toastId
     */
    remove(toastId = null) {
      // Break if there is no toast to delete
      if (this.toasts.length === 0) return

      // Get last toast id if no toastId is provided
      toastId = toastId || this.toasts[0].id

      // Filter the toasts
      this.toasts = this.toasts.filter((toast) => toast.id !== toastId)
    }
  }
}
</script>

<style scoped>
dl,
ol,
ul {
  margin-bottom: 0;
  margin-block-start: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
}

#vue-my-toasts-root {
  max-width: var(--vueMyToastsWidth);
  width: var(--vueMyToastsWidth);
  padding: var(--vueMyToastsPadding);
  position: fixed;
  z-index: 999999;
}

/*
@media screen and (max-device-width: var(--vueMyToastsWidth)) {
  max-width: 100%;
}
*/

.vue-my-toasts-wrapper {
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}

.vue-my-toasts-wrapper.top-right,
.vue-my-toasts-wrapper.top-left,
.vue-my-toasts-wrapper.top-middle {
  flex-direction: column;
}

.vue-my-toasts-wrapper.bottom-right,
.vue-my-toasts-wrapper.bottom-left,
.vue-my-toasts-wrapper.bottom-middle {
  flex-direction: column-reverse;
}

.vue-my-toasts.bottom-right {
  bottom: 0;
  right: 0;
}

.vue-my-toasts.bottom-left {
  bottom: 0;
  left: 0;
}

.vue-my-toasts.bottom-left {
  bottom: 0;
  left: 0;
}

.vue-my-toasts.top-right {
  top: 0;
  right: 0;
}

.vue-my-toasts.top-left {
  top: 0;
  left: 0;
}

.vue-my-toasts.top-middle {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.vue-my-toasts.bottom-middle {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.fade-horizontal-enter.top-left,
.fade-horizontal-leave-to.top-left {
  transform: translateX(-325px);
}

.fade-horizontal-enter.bottom-left,
.fade-horizontal-leave-to.bottom-left {
  transform: translateX(-325px);
}

.fade-horizontal-enter.top-right,
.fade-horizontal-leave-to.top-right {
  transform: translateX(325px);
}

.fade-horizontal-enter.bottom-right,
.fade-horizontal-leave-to.bottom-right {
  transform: translateX(325px);
}

.fade-vertical-enter.top-middle,
.fade-vertical-leave-to.top-middle {
  transform: translateY(-35px);
}

.fade-vertical-enter.bottom-middle,
.fade-vertical-leave-to.bottom-middle {
  transform: translateY(35px);
}

.fade-horizontal,
.fade-vertical {
  transition: all 0.35s ease-out;
}

.fade-horizontal-enter,
.fade-horizontal-leave-to,
.fade-vertical-enter,
.fade-vertical-leave-to {
  opacity: 0;
}

.fade-horizontal-leave-active,
.fade-vertical-leave-active {
  transition: all 0.35s ease-in;
}
</style>
