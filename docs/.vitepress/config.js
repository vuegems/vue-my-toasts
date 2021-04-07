// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: '@vuegems/my-toasts',
  description: '🍞 Provide your component and let us toast the rest',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css',
      },
    ],
    ['meta', { name: 'author', content: 'Yaël GUILLOUX' }],
    ['meta', { property: 'og:title', content: '@vuegems/my-toasts' }],
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
            text: 'Quick Start',
            link: '/quick-start',
          },
          {
            text: 'Roadmap',
            link: '/roadmap',
          },
          {
            text: 'Demo',
            link: '/demo',
          },
        ],
      },
    ],
  },
}
