<template>
  <button class="try-button" @click="play">Try</button>
</template>

<script setup="props" lang="ts">
import { defineProps } from 'vue-demi'
import { useToasts } from 'vue-my-toasts'

const props = defineProps({
  options: {
    type: Object as PropType<VueMyToastsPayload>,
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

const { push } = useToasts()

const play = () => {
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
