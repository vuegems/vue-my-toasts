/**
 * Get a toast uuid, useful when no `id` is provided by the user.
 *
 * @returns {string}
 */
export default () => {
  return 'toast-' + Date.now() + '-' + Math.floor(Math.random() * 10)
}
