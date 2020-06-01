<!-- WARNING: This file is intentionally pretty dirty, as I am handling the switch between 2 completely different CSS frameworks on the same elements. -->
<template>
  <div id="app">
    <hero />

    <div
      class="mb-8 w-full w-100 d-flex flex-column align-items-center flex flex-col items-center"
      style="margin-bottom: 2rem;"
    >
      <h2
        style="font-size: 1.125rem; color: #2d3748; margin-bottom: 1rem !important;"
        class="text-gray-800 text-lg font-bold"
      >
        Demo component
      </h2>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 border-2 font-bold text-white focus:outline-none"
        :style="{ 'background-color': '#38b2ac', 'margin-bottom': '1rem' }"
        :class="{
          'border-transparent border-white': currentComponent !== 'tailwind',
          'border-blue-400': currentComponent === 'tailwind'
        }"
        @click="setComponent('tailwind')"
      >
        Use Tailwind
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 border-2 bg-blue-400 font-bold text-white focus:outline-none"
        :style="{ 'background-color': '#7952b3', 'margin-bottom': '1rem' }"
        :class="{
          'border-transparent border-white': currentComponent !== 'bootstrap',
          'border-blue-400': currentComponent === 'bootstrap'
        }"
        @click="setComponent('bootstrap')"
      >
        Use Bootstrap
      </button>

      <a
        class="btn btn-success text-center bg-green-400 w-full w-100 py-2 rounded-lg px-4 border-2 border-white font-bold text-white focus:outline-none"
        target="_blank"
        href="https://github.com/Tahul/vue-my-toasts"
      >
        Create your own
      </a>
    </div>

    <div
      class="mb-8 w-full w-100 flex flex-col items-center d-flex flex-column align-items-center"
      style="margin-bottom: 2rem;"
    >
      <h2
        class="text-gray-800 text-lg font-bold"
        style="font-size: 1.125rem; color: #2d3748; margin-bottom: 1rem !important;"
      >
        Toasts types
      </h2>

      <button
        class="btn btn-info w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="createToast('base')"
      >
        Create a base toast
      </button>

      <button
        class="btn btn-warning w-full w-100 py-2 rounded-lg px-4 bg-orange-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="createToast('warning')"
      >
        Create a warning toast
      </button>

      <button
        class="btn btn-success w-full w-100 py-2 rounded-lg px-4 bg-green-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="createToast('success')"
      >
        Create a success toast
      </button>

      <button
        class="btn btn-danger w-full w-100 py-2 rounded-lg px-4 bg-red-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="createToast('error')"
      >
        Create a error toast
      </button>
    </div>

    <div
      class="w-full w-100 flex flex-col items-center mb-8 d-flex flex-column align-items-center"
      style="margin-bottom: 2rem;"
    >
      <h2
        class="text-gray-800 text-lg font-bold"
        style="font-size: 1.125rem; color: #2d3748; margin-bottom: 1rem !important;"
      >
        Toasts positions
      </h2>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('bottom-left')"
      >
        Bottom left
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('bottom-right')"
      >
        Bottom right
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('top-left')"
      >
        Top left
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('top-right')"
      >
        Top right
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('bottom-middle')"
      >
        Bottom middle
      </button>

      <button
        class="btn btn-primary w-full w-100 py-2 rounded-lg px-4 bg-blue-400 font-bold text-white"
        :style="{ 'margin-bottom': '1rem' }"
        @click="updateConfig('top-middle')"
      >
        Top middle
      </button>
    </div>

    <div
      style="margin-bottom: 2rem;"
      class="w-full w-100 flex items-center justify-center text-center d-flex flex-column align-items-center"
    >
      <a
        class="text-gray-600 opacity-50 hover:opacity-100 transition-opacity duration-100 ease-in"
        href="https://github.com/Tahul/vue-my-toasts"
      >
        <span class="mr-2">↩</span>Back to GitHub
      </a>
    </div>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import TailwindComponent from "../src/components/toasts/TailwindComponent";
import DemoToast from "../src/components/toasts/BootstrapComponent";

const messages = [
  `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler`,
  `“First, solve the problem. Then, write the code.” – John Johnson`,
  `“Experience is the name everyone gives to their mistakes.” – Oscar Wilde`,
  `“In order to be irreplaceable, one must always be different” – Coco Chanel`,
  `“Java is to JavaScript what car is to Carpet.” – Chris Heilmann`,
  `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon`,
  `“Knowledge is power.” – Francis Bacon`
];

const randomElement = array => array[Math.floor(Math.random() * array.length)];

export default {
  name: "App",

  components: {
    Hero
  },

  data: () => ({
    currentComponent: "tailwind"
  }),

  methods: {
    loadStylesheet(framework) {
      if (framework === this.currentComponent) return;

      if (document.getElementById("currentStyleSheet")) {
        document.getElementById("currentStyleSheet").remove();
      }

      const head = document.head;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.id = "currentStyleSheet";
      link.type = "text/css";

      if (framework === "bootstrap") {
        link.href =
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css";
        link.integriy =
          "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk";
        link.crossorigin = "anonymous";
      }

      if (framework === "tailwind") {
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css";
        link.integriy = "sha256-CAI/7ThhltsmP2L2zKBYa7FknB3ZwFbD0nqL8FCdxdc=";
        link.crossorigin = "anonymous";
      }

      head.appendChild(link);
    },

    createToast(status = "base") {
      this.$toasts[status](randomElement(messages), {
        title: "My toast title"
      });
    },

    updateConfig(position) {
      this.$toasts.updateConfig(
        {
          position
        },
        this.currentComponent === "tailwind" ? TailwindComponent : DemoToast
      );

      this.createToast();
    },

    setComponent(component) {
      switch (component) {
        case "tailwind":
          this.loadStylesheet(component);
          this.$toasts.updateConfig(
            {
              padding: "1rem"
            },
            TailwindComponent
          );
          this.currentComponent = "tailwind";
          return;
        case "bootstrap":
          this.loadStylesheet(component);
          this.currentComponent = "bootstrap";
          this.$toasts.updateConfig(
            {
              padding: "1.5rem"
            },
            DemoToast
          );
          return;
      }
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
