<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  name: "DemoToast",

  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped></style>
