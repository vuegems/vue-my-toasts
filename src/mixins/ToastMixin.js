module.exports = {
  props: {
    /**
     * The id of the toast
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The type of the toast
     * Accepts: "base", "warning", "error", "success"
     */
    type: {
      type: String,
      required: false,
      default: "base",
      validator: x => ["base", "warning", "error", "success"].includes(x)
    },
    /**
     * The current position from the parent plugin options
     */
    position: {
      type: String,
      required: false,
      default: "bottom-right"
    },
    /**
     * The message to show on the toast
     */
    message: {
      type: String,
      required: true
    }
  }
};
