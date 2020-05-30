<template>
  <div id="app">
    <button class="py-2 mb-4 rounded-lg px-4 bg-blue-400" @click="createToast">
      Create a toast message
    </button>
    <button class="py-2 rounded-lg px-4 bg-blue-400" @click="updateConfig">
      Update config
    </button>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    createToast() {
      this.$toasts.push({
        message: "Test message",
        badge: "My  badge"
      });
    },
    updateConfig() {
      this.$toasts.updateConfig({
        position: "bottom-left"
      });
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
