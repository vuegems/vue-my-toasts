<template>
  <button class="try-button" @click="play">{{ text }}</button>
</template>

<script setup="props" lang="ts">
import { defineProps } from 'vue'
import { useToasts } from 'vue-my-toasts'
import type { VueMyToastsPayload, VueMyToastsOptions } from 'vue-my-toasts'

const props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Try',
  },
  options: {
    type: Object as PropType<VueMyToastsPayload>,
    required: false,
    default: {},
  },
  config: {
    type: Object as PropType<VueMyToastsOptions>,
    required: false,
    default: {},
  },
})

const randomElement = (array) => array[Math.floor(Math.random() * array.length)]

const messages = [
  `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler`,
  `“First, solve the problem. Then, write the code.” – John Johnson`,
  `“Experience is the name everyone gives to their mistakes.” – Oscar Wilde`,
  `“In order to be irreplaceable, one must always be different” – Coco Chanel`,
  `“Java is to JavaScript what car is to Carpet.” – Chris Heilmann`,
  `“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon`,
  `“Knowledge is power.” – Francis Bacon`,
]

const { push, updateConfig } = useToasts()

const play = () => {
  if (props.config && Object.keys(props.config).length) {
    updateConfig(props.config)
  }

  push({
    ...props.options,
    message: randomElement(messages),
  })
}
</script>

<style>
.try-button {
  background-color: var(--c-brand);
  border: 4px solid var(--c-brand-light);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 600;
}
</style>
