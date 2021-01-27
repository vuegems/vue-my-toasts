module.exports = {
  props: {
    duration: {
      type: Number,
      required: false,
      default: 3000 // Default timing: 3 seconds
    }
  },

  data: () => ({
    start: null,
    elapsed: null,
    hovered: false
  }),

  computed: {
    /**
     * Return the elapsed timer percentage
     *
     * @returns { string }
     */
    percentageElapsed() {
      return ((this.elapsed / this.duration) * 100).toFixed(1)
    },
    /**
     * Return the remaining time as milliseconds
     *
     * @returns { number }
     */
    remaining() {
      return this.duration - this.elapsed
    }
  },

  /**
   * Attach the event listeners for hovering management
   * and start the timer and requestAnimationFrame loop.
   */
  mounted() {
    // Hover event
    this.$el.addEventListener('mouseover', () => {
      this.hovered = true
    })

    // Mouse out event
    this.$el.addEventListener('mouseout', () => {
      this.hovered = false
    })

    // Set start timestampp
    this.start = Date.now()
    // Initialize elapsed time
    this.elapsed = 0

    // Start requestAnimationFrame loop
    requestAnimationFrame(this.updateTimer)
  },

  /**
   * Remove event listeners for hovering management
   */
  beforeDestroy() {
    // Hover event
    this.$el.removeEventListener('mouseover', () => {
      this.hovered = true
    })

    // Mouse out event
    this.$el.removeEventListener('mouseout', () => {
      this.hovered = false
    })
  },

  methods: {
    /**
     * Update timer loop
     */
    updateTimer() {
      // Check if the toast is hovered
      if (!this.hovered) {
        // Update elapsed time
        this.elapsed = Date.now() - this.start

        // Check if elapsed time is longer than showing duration
        if (this.elapsed >= this.duration) {
          // Emit the `remove` event
          this.$emit('remove')
          return
        }
      } else {
        // Pause the timer by keeping the elapsed time the same by updating started time
        this.start = Date.now() - this.elapsed
      }

      // Call another aniationFrame
      requestAnimationFrame(this.updateTimer)
    }
  }
}
