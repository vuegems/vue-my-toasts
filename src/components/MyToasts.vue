<template>
  <div class="vue-my-toasts">
    <transition-group>
      <my-toasts-component
        v-for="toast of toasts"
        :key="toast.id"
        v-bind="toast"
      />
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "MyToasts",

  data: () => ({
    toasts: []
  }),

  methods: {
    add(toast) {
      this.toasts.push(toast);
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
</style>
