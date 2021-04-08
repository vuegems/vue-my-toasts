<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <span ref="toast" style="cursor: pointer" @click="playToast">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        pointer-events="none"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M37.0312 100.219C28.6875 101.062 21.5625 94.5 21.5625 86.1562V55.9688L19.2188 53.625C15.75 50.1563 13.7812 45.4688 13.7812 40.5C13.7812 31.4063 20.3437 23.7188 29.25 22.2188C49.9687 18.75 71.0625 18.75 91.7812 22.2188C100.688 23.7188 107.25 31.4063 107.25 40.5C107.25 45.375 105.28 50.1563 101.812 53.625L99.4678 55.9688V86.1562C99.4678 94.4991 92.25 100.969 83.9991 100.219C68.3438 98.7188 52.5937 98.7188 37.0312 100.219Z"
            fill="#F8D0AF"
          />
          <path
            d="M61.2506 19.6463C58.1466 19.6463 55.0425 19.7232 51.9375 19.8751C59.4375 20.2501 66.9375 21.0001 74.3438 22.2188C83.25 23.7188 89.8125 31.4063 89.8125 40.5001C89.8125 45.3751 87.8437 50.1563 84.375 53.6251L82.0312 55.9688V86.1563C82.0312 92.25 78.1875 97.3116 72.9375 99.375C76.6875 99.5625 80.5322 99.8438 84.2822 100.219C84.5391 100.245 84.7941 100.264 85.0481 100.276C85.1325 100.278 85.2169 100.278 85.3012 100.278C92.9944 100.278 99.4687 94.0575 99.4687 86.1563V55.9688L101.812 53.6251C105.281 50.1563 107.251 45.3751 107.251 40.5001C107.251 31.4063 100.688 23.7188 91.7822 22.2188C84.1106 20.9344 76.3894 20.1254 68.6541 19.7926C66.1866 19.6951 63.7191 19.6463 61.2506 19.6463Z"
            fill="#DFBB9D"
          />
          <path
            d="M38.5313 93.5625C33.5625 93.8438 28.9688 90.2813 28.5938 85.2197C28.5938 85.0322 28.5938 84.7509 28.5938 84.5634V56.9063L25.2188 53.4375C22.875 51.0938 21.2813 48.0938 20.9063 44.8125C20.0625 37.125 25.2188 30.375 32.625 29.1563C33 29.0625 33.375 29.0625 33.8438 28.9688C49.9688 27.5625 49.9688 27.5625 64.5 28.6875C65.25 28.7813 66.0009 28.875 66.75 29.0625C73.6866 30.1875 79.125 36.0938 79.125 43.125C79.125 46.875 77.6241 50.4375 75 53.1563L71.3438 56.8125V84.4688C71.3438 84.7509 71.3438 84.9375 71.3438 85.2197C70.9697 89.9072 66.8438 93.2822 62.1563 93.1884C59.5313 93.0938 56.8125 93.0938 54.1875 93.0938C49.0313 93.0938 43.7813 93.1875 38.5313 93.5625Z"
            fill="#FBE4D6"
          />
          <path
            d="M85.3125 103.125C84.75 103.125 84.1875 103.125 83.625 103.031C68.25 101.53 52.5937 101.53 37.3125 103.031C32.25 103.5 27.2812 101.812 23.7187 98.1562C20.5312 94.9687 18.75 90.6562 18.75 86.1562V57.0938L17.25 55.5938C13.2187 51.5625 10.9688 46.2188 10.9688 40.5C10.9688 30 18.4688 21.1875 28.7812 19.5C49.6875 16.0313 71.3428 16.0313 92.1563 19.5C102.469 21.1875 109.969 30.0938 109.969 40.5C109.969 46.2188 107.72 51.5625 103.688 55.5938L102.188 57.1875V86.25C102.188 95.5312 94.6875 103.125 85.3125 103.125ZM60.4688 96.2812C68.3438 96.2812 76.3125 96.6553 84.1875 97.5C84.5625 97.5 84.9375 97.5938 85.3125 97.5938C91.5 97.5938 96.5625 92.5322 96.5625 86.3438V56.1563C96.5625 55.4063 96.8438 54.6562 97.4063 54.1875L99.75 51.8438C102.749 48.8438 104.343 44.9063 104.343 40.6875C104.343 33 98.8125 26.4375 91.2178 25.2188C70.9678 21.8438 49.9678 21.8438 29.6241 25.2188C22.0303 26.5312 16.4991 33 16.4991 40.6875C16.4991 44.9063 18.0928 48.8438 21.0928 51.75L23.4366 54.0938C23.9991 54.6563 24.2803 55.3125 24.2803 56.0625L24.375 86.25C24.375 89.25 25.5937 92.1562 27.6562 94.2188C30.0938 96.5625 33.375 97.7812 36.75 97.4062C44.625 96.6562 52.5938 96.2812 60.4688 96.2812Z"
            fill="#454B54"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-4"
            y="0"
            width="128"
            height="128"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>

    <span
      ref="indication"
      style="font-size: 0.75rem; color: black; opacity: 0.5"
    >
      (press to toast)
    </span>
  </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { useToasts } from 'vue-my-toasts'
import { ref } from 'vue'

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

const toast = ref<SVGElement>()
const indication = ref<HTMLElement>()

const { variant: indicationVariant } = useMotion(indication, {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.6,
  },
  enter: {
    y: 0,
    opacity: 0.5,
    scale: 1,
  },
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0,
  },
})

const { variant } = useMotion(toast, {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.6,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 20,
    },
  },
  hovered: {
    scale: 1.2,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 10,
    },
  },
  tapped: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 12,
    },
  },
})

const { base, error, warning, success } = useToasts()

const positions = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-middle',
  'bottom-middle',
]

const playToast = () => {
  const position = randomElement(positions)

  const toasts = [
    () => base(randomElement(messages), {}),
    () => error(randomElement(messages), {}),
    () => warning(randomElement(messages), {}),
    () => success(randomElement(messages), {}),
  ]

  randomElement(toasts)()

  if (indicationVariant.value !== 'hidden') indicationVariant.value = 'hidden'
}
</script>
