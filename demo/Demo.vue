<template>
  <div id="app">
    <button @click="createToast">Create a toast message</button>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    createToast() {
      this.$toasts.push({
        message: "Test message"
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
}
</style>
