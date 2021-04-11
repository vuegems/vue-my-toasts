// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'vue-my-toasts',
  description: '🍞 Provide your component and let us toast the rest',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Yaël GUILLOUX' }],
    ['meta', { property: 'og:title', content: 'vue-my-toasts' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '🍞 Provide your component and let us toast the rest',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://my-toasts.vuegems.org/logo.svg',
      },
    ],
    ['meta', { name: 'twitter:creator', content: '@yaeeelglx' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://my-toasts.vuegems.org/logo.svg',
      },
    ],
  ],
  themeConfig: {
    repo: 'vuegems/my-toasts',
    sidebar: [
      {
        text: 'Getting Started',
        children: [
          {
            text: 'Introduction',
            link: '/introduction',
          },
          {
            text: 'Installation',
            link: '/installation',
          },
          {
            text: 'Demo',
            link: '/demo',
          },
        ],
      },
      {
        text: 'Usage',
        children: [
          {
            text: 'Configuration',
            link: '/usage/configuration',
          },
          {
            text: 'Toast Instance',
            link: '/usage/toast-instance',
          },
          {
            text: 'Options API',
            link: '/usage/options-api',
          },
          {
            text: 'Composition API',
            link: '/usage/composition-api',
          },
        ],
      },
      {
        text: 'Create your toast',
        children: [
          {
            text: 'Guide',
            link: '/create/guide',
          },
          {
            text: 'Defaults',
            link: '/create/defaults',
          },
        ],
      },
    ],
  },
}
