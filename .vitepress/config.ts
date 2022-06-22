import { defineConfig } from 'vitepress'
import {
  font,
  github,
  ogImage,
  ogUrl,
  twitter,
  thinkActiveDescription,
  thinkActiveName,
} from './meta'
import { teamMembers } from './contributors'

export default defineConfig({
  lang: 'en-US',
  title: thinkActiveName,
  description: thinkActiveDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: `${teamMembers.map(c => c.name).join(', ')} and ${thinkActiveName} contributors` }],
    ['meta', { name: 'keywords', content: 'sensor, imu, data collection, data annotation, ios, android, bluetooth, machine learning, artificial intelligence' }],
    ['meta', { property: 'og:title', content: thinkActiveName }],
    ['meta', { property: 'og:description', content: thinkActiveDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: thinkActiveName }],
    ['meta', { name: 'twitter:description', content: thinkActiveDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    toc: {
      level: [2]
    },
  },
  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: github + '/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    algolia: {
      appId: 'FQ2FOZFRJB',
      apiKey: '2cdfc08f83ca02afe15ed8d5fb4e8925',
      indexName: 'thinkactive',
    },

    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'github', link: github },
    ],

    footer: {
      message: 'Made with ❤️',
      copyright: 'Copyright © 2022 Think Active Labs',
    },

    nav: [
      { text: 'ClassKit', link: 'https://thinkactivekit.com/' },
      { text: 'Documentation', link: '/guide/' },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'What\'s Covered',
              link: '/guide/',
            },
            {
              text: 'Why ThinkActive',
              link: '/guide/why',
            },
            {
              text: 'Features',
              link: '/guide/features',
            },
          ],
        },
        {
          text: 'ThinkActive Cloud',
          items: [
            {
              text: 'Coming Soon...',
              link: '/docs/thinkactive-cloud/',
            },
          ],
        },
        {
          text: 'ThinkActive Sync App',
          items: [
            {
              text: 'Release Notes',
              link: '/docs/thinkactive-sync-app/release-notes',
            },
          ],
        },
        {
          text: 'ThinkActive Device Manager',
          items: [
            {
              text: 'Coming Soon...',
              link: '/docs/thinkactive-device-manager/',
            },
          ],
        },
        {
          text: 'Developing for ActiveBand',
          items: [
            {
              text: 'Coming Soon...',
              link: '/docs/developing-for-activeband/',
            },
          ],
        },
        {
          text: 'Using ActiveBand',
          items: [
            {
              text: 'Device States',
              link: '/docs/using-activeband/device-states',
            },
            {
              text: 'Sync Issues',
              link: '/docs/using-activeband/sync-issues',
            },
          ],
        },
      ],
    },
  },
})
