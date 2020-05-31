<template>
  <div id="app">
    <button class="py-2 mb-4 rounded-lg px-4 bg-blue-400" @click="createToast">
      Create a toast message
    </button>
    <div class="flex items-center">
      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('bottom-left')"
      >
        Bottom left
      </button>

      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('bottom-right')"
      >
        Bottom right
      </button>

      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('top-left')"
      >
        Top left
      </button>

      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('top-right')"
      >
        Top right
      </button>

      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('bottom-middle')"
      >
        Bottom middle
      </button>

      <button
        class="py-2 rounded-lg px-4 bg-blue-400 mx-4"
        @click="updateConfig('top-middle')"
      >
        Top middle
      </button>
    </div>
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
    updateConfig(position) {
      this.$toasts.updateConfig({
        position
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
