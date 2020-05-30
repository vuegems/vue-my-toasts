<template>
  <div
    class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full my-2 mx-4 flex lg:inline-flex cursor-pointer"
    role="alert"
    @click="$emit('remove')"
  >
    <!-- Badge -->
    <span
      class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
      >{{ badge }}</span
    >

    <!-- Text -->
    <span class="font-semibold mr-2 text-left flex-auto">{{ message }}</span>

    <!-- Icon -->
    <svg
      class="fill-current opacity-75 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "DemoToast",

  props: {
    id: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      required: false,
      default: "New"
    }
  }
};
</script>

<style scoped></style>
