<template>
  <div id="app">
    <hero />

    <div class="mb-8 w-full flex flex-col items-center">
      <h2 class="mb-4 text-gray-800 text-lg font-bold">Toasts types</h2>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="createToast('base')"
      >
        Create a base toast
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-orange-400 font-bold text-white"
        @click="createToast('warning')"
      >
        Create a warning toast
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-green-400 font-bold text-white"
        @click="createToast('success')"
      >
        Create a success toast
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-red-400 font-bold text-white"
        @click="createToast('error')"
      >
        Create a error toast
      </button>
    </div>

    <div class="w-full flex flex-col items-center">
      <h2 class="mb-4 text-gray-800 text-lg font-bold">Toasts positions</h2>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-left')"
      >
        Bottom left
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-right')"
      >
        Bottom right
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('top-left')"
      >
        Top left
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('top-right')"
      >
        Top right
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-middle')"
      >
        Bottom middle
      </button>

      <button
        class="w-full py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('top-middle')"
      >
        Top middle
      </button>
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";

const messages = [
  `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler`,
  `“First, solve the problem. Then, write the code.” – John Johnson`,
  `“Experience is the name everyone gives to their mistakes.” – Oscar Wilde`,
  `“In order to be irreplaceable, one must always be different” – Coco Chanel`,
  `“Java is to JavaScript what car is to Carpet.” – Chris Heilmann`,
  `“Knowledge is power.” – Francis Bacon`,
  `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon`
];

const randomElement = array => array[Math.floor(Math.random() * array.length)];

export default {
  name: "App",

  components: {
    Hero
  },

  methods: {
    createToast(status = "base") {
      this.$toasts.push({
        message: randomElement(messages),
        type: status
      });
    },
    updateConfig(position) {
      this.$toasts.updateConfig({
        position
      });

      this.createToast();
    }
  }
};
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 320px;
}
</style>
