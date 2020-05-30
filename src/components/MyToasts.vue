<template>
  <div id="vue-my-toasts-root" class="vue-my-toasts">
    <transition-group
      name="fade-horizontal"
      tag="div"
      class="vue-my-toasts-wrapper"
    >
      <my-toasts-component
        class="fade-horizontal"
        v-for="toast of toasts"
        :key="toast.id"
        :position="position"
        v-bind="toast"
        @remove="remove(toast.id)"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MyToasts",

  props: {
    position: {
      type: String,
      required: false,
      default: "bottom-right"
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
      this.toasts.push(toast);
    },
    /**
     * Remove toast from instance
     *
     * @param toastId
     */
    remove(toastId = null) {
      // Break if there is no toast to delete
      if (this.toasts.length === 0) return;

      // Get last toast id if no toastId is provided
      toastId = toastId || this.toasts[0].id;

      // Filter the toasts
      this.toasts = this.toasts.filter(toast => toast.id !== toastId);
    }
  }
};
</script>

<style scoped>
.vue-my-toasts {
  position: fixed;
  width: auto;
  bottom: 0;
  right: 0;
  z-index: 999999;
}

.vue-my-toasts-wrapper {
  display: flex;
  flex-direction: column;
}

.fade-horizontal {
  transition: all 0.35s ease-out;
}

.fade-horizontal-enter,
.fade-horizontal-leave-to {
  opacity: 0;
  transform: translateX(325px);
}

.fade-horizontal-leave-active {
  transition: all 0.35s ease-in;
}
</style>
