module.exports = {
  props: {
    duration: {
      type: Number,
      required: false,
      default: 3000
    }
  },

  data: () => ({}),

  mounted() {
    setTimeout(() => {
      this.$emit("remove");
    }, this.duration);
  }
};
