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
     * The index of the toast in the current queue
     */
    index: {
      type: Number,
      required: true
    },
    /**
     * The type of the toast
     * Accepts: "base", "warning", "error", "success"
     */
    type: {
      type: String,
      required: false,
      default: 'base',
      validator: (x) => ['base', 'warning', 'error', 'success'].includes(x)
    },
    /**
     * The current position from the parent plugin options
     * Accepts: "bottom-right", "bottom-left", "top-right", "top-left", "top-middle", "bottom-middle"
     */
    position: {
      type: String,
      required: false,
      default: 'bottom-right',
      validator: (x) =>
        [
          'bottom-right',
          'bottom-left',
          'top-right',
          'top-left',
          'top-middle',
          'bottom-middle'
        ].includes(x)
    },
    /**
     * The message to show on the toast
     */
    message: {
      type: String,
      required: true
    }
  }
}
