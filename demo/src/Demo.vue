<!-- WARNING: This file is intentionally pretty dirty, as I am handling the switch between 2 completely different CSS frameworks on the same elements. -->
<template>
  <div id="app">
    <hero />

    <div class="tmb-8 w-full flex flex-col items-center">
      <h2>Demo component</h2>

      <button
        class="btn btn-primary tmb-4 w-full rounded-lg border-2 font-bold focus:outline-none"
        :style="{ 'background-color': '#38b2ac' }"
        :class="{
          'border-transparent border-white': currentComponent !== 'tailwind',
          'border-blue-400': currentComponent === 'tailwind',
        }"
        @click="setComponent('tailwind')"
      >
        Use Tailwind
      </button>

      <button
        class="btn btn-primary tmb-4 w-full rounded-lg border-2 bg-blue-400 font-bold focus:outline-none"
        :style="{ 'background-color': '#7952b3' }"
        :class="{
          'border-transparent border-white': currentComponent !== 'bootstrap',
          'border-blue-400': currentComponent === 'bootstrap',
        }"
        @click="setComponent('bootstrap')"
      >
        Use Bootstrap
      </button>

      <a
        class="btn btn-success text-center bg-green-400 w-full rounded-lg border-2 border-white font-bold focus:outline-none"
        target="_blank"
        href="https://github.com/Tahul/vue-my-toasts"
      >
        Create your own
      </a>
    </div>

    <div class="tmb-8 w-full flex flex-col items-center">
      <h2>Toasts types</h2>

      <button
        class="btn btn-info w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="createToast('base')"
      >
        Create a base toast
      </button>

      <button
        class="btn btn-warning w-full rounded-lg bg-orange-400 font-bold tmb-4"
        @click="createToast('warning')"
      >
        Create a warning toast
      </button>

      <button
        class="btn btn-success w-full rounded-lg bg-green-400 font-bold tmb-4"
        @click="createToast('success')"
      >
        Create a success toast
      </button>

      <button
        class="btn btn-danger w-full rounded-lg bg-red-400 font-bold tmb-4"
        @click="createToast('error')"
      >
        Create a error toast
      </button>
    </div>

    <div class="w-full flex flex-col items-center tmb-8">
      <h2>Toasts positions</h2>

      <button
        class="btn btn-primary w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="updateConfig('bottom-left')"
      >
        Bottom left
      </button>

      <button
        class="btn btn-primary w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="updateConfig('bottom-right')"
      >
        Bottom right
      </button>

      <button
        class="btn btn-primary w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="updateConfig('top-left')"
      >
        Top left
      </button>

      <button
        class="btn btn-primary w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="updateConfig('top-right')"
      >
        Top right
      </button>

      <button
        class="tmb-4 btn btn-primary w-full rounded-lg bg-blue-400 font-bold tmb-4"
        @click="updateConfig('bottom-middle')"
      >
        Bottom middle
      </button>

      <button
        class="btn btn-primary w-full rounded-lg bg-blue-400 font-bold"
        @click="updateConfig('top-middle')"
      >
        Top middle
      </button>
    </div>

    <div class="tmb-8 w-full flex items-center justify-center text-center">
      <a
        class="text-gray-600 opacity-50 hover:opacity-100 transition-opacity duration-100 ease-in"
        href="https://github.com/Tahul/vue-my-toasts"
      >
        <span class="tmr-2">↩</span>Back to GitHub
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Hero from './components/Hero.vue'
import { useToasts } from '../../src'
import TailwindComponent from '../../src/components/toasts/TailwindComponent.vue'
import DemoToast from '../../src/components/toasts/BootstrapComponent.vue'

const messages = [
  `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler`,
  `“First, solve the problem. Then, write the code.” – John Johnson`,
  `“Experience is the name everyone gives to their mistakes.” – Oscar Wilde`,
  `“In order to be irreplaceable, one must always be different” – Coco Chanel`,
  `“Java is to JavaScript what car is to Carpet.” – Chris Heilmann`,
  `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon`,
  `“Knowledge is power.” – Francis Bacon`,
]

const randomElement = (array) => array[Math.floor(Math.random() * array.length)]

export default defineComponent({
  name: 'App',

  components: {
    Hero,
  },

  data: () => ({
    currentComponent: 'tailwind',
  }),

  methods: {
    loadStylesheet(framework) {
      if (framework === this.currentComponent) return

      if (document.getElementById('currentStyleSheet')) {
        document.getElementById('currentStyleSheet').remove()
      }

      const head = document.head
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.id = 'currentStyleSheet'
      link.type = 'text/css'

      if (framework === 'bootstrap') {
        link.href =
          'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        link.integriy =
          'sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        link.crossorigin = 'anonymous'
      }

      if (framework === 'tailwind') {
        link.href =
          'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css'
        link.integriy = 'sha256-CAI/7ThhltsmP2L2zKBYa7FknB3ZwFbD0nqL8FCdxdc='
        link.crossorigin = 'anonymous'
      }

      head.appendChild(link)
    },

    createToast(status = 'base') {
      this.$toasts[status](randomElement(messages), {
        title: 'My toast title',
      })
    },

    updateConfig(position) {
      this.$toasts.updateConfig(
        {
          position,
        },
        this.currentComponent === 'tailwind' ? TailwindComponent : DemoToast,
      )

      this.createToast()
    },

    setComponent(component) {
      switch (component) {
        case 'tailwind':
          this.loadStylesheet(component)
          this.$toasts.updateConfig(
            {
              padding: '1rem',
            },
            TailwindComponent,
          )
          this.currentComponent = 'tailwind'
          return
        case 'bootstrap':
          this.loadStylesheet(component)
          this.currentComponent = 'bootstrap'
          this.$toasts.updateConfig(
            {
              padding: '1.5rem',
            },
            DemoToast,
          )
          return
      }
    },
  },
})
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

.font-bold {
  font-weight: 700 !important;
}

.btn {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  color: #ffffff !important;
}

h1,
h2,
h3 {
  line-height: inherit !important;
  font-size: 1.125rem !important;
  color: #2d3748 !important;
  margin-bottom: 1rem !important;
  font-weight: 700 !important;
}

.w-full {
  width: 100% !important;
}

.flex-col {
  flex-direction: column !important;
}

.flex {
  display: flex !important;
}

.items-center {
  align-items: center !important;
}

.justify-center {
  justify-content: center !important;
}

.tmb-8 {
  margin-bottom: 2rem !important;
}

.tmb-4 {
  margin-bottom: 1rem !important;
}

.tmr-2 {
  margin-right: 0.5rem !important;
}
</style>
