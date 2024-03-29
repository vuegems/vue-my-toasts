// @ts-nocheck
import { MotionPlugin } from '@vueuse/motion'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import Layout from '../components/Layout.vue'
import Illustration from '../components/Illustration.vue'
import Try from '../components/Try.vue'
import TailwindComponent from '../../../src/components/toasts/TailwindComponent.vue'
import MyToastsPlugin from 'vue-my-toasts'
import '../../../src/assets/style.css'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(MotionPlugin)

    app.use(MyToastsPlugin, {
      component: TailwindComponent,
      options: {
        position: 'bottom-right',
      },
    })

    app.component('Features', Features)

    app.component('Hero', Hero)

    app.component('Illustration', Illustration)

    app.component('Try', Try)
  },
}
