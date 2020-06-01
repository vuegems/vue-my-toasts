<template>
  <div id="app" class="px-4 md:px-16 lg:px-32 xl:px-64">
    <hero />

    <div class="mb-8 flex flex-col items-center">
      <h2 class="mb-4 text-lg font-bold">Toasts types</h2>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="createToast('base')"
      >
        Create a base toast
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-orange-400 font-bold text-white"
        @click="createToast('warning')"
      >
        Create a warning toast
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-green-400 font-bold text-white"
        @click="createToast('success')"
      >
        Create a success toast
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-red-400 font-bold text-white"
        @click="createToast('error')"
      >
        Create a error toast
      </button>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="mb-4 text-lg font-bold">Toasts positions</h2>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-left')"
      >
        Bottom left
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-right')"
      >
        Bottom right
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('top-left')"
      >
        Top left
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('top-right')"
      >
        Top right
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
        @click="updateConfig('bottom-middle')"
      >
        Bottom middle
      </button>

      <button
        class="w-full md:w-2/5 py-2 mb-4 rounded-lg px-4 bg-blue-400 font-bold text-white"
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
#app {
  width: 100%;
}
</style>
