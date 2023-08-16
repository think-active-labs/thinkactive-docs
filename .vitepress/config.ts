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
    ['script', { id: 'mcjs', }, '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c2b25b727beb0a433849f3c6a/6eafd525779ac9d7a6520d61b.js");']
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

    search: {
      provider: 'local'
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
      { text: 'ClassKit', link: 'https://classkit.thinkactive.io/' },
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
              text: 'Organisations',
              link: '/docs/thinkactive-cloud/organisations'
            },
            {
              text: 'Deployments',
              link: '/docs/thinkactive-cloud/deployments',
            },
            {
              text: 'Devices',
              link: '/docs/thinkactive-cloud/devices',
            },
          ],
        },
        {
          text: 'ThinkActive Sync App',
          items: [
            {
              text: 'Getting Started',
              link: '/docs/thinkactive-sync-app/getting-started',
            },
            {
              text: 'Sync Issues',
              link: '/docs/thinkactive-sync-app/sync-issues',
            },
            {
              text: 'Release Notes',
              link: '/docs/thinkactive-sync-app/release-notes',
            },
          ],
        },
        {
          text: 'Using ActiveBand',
          items: [
            {
              text: 'InfiniTime Device States',
              link: '/docs/using-activeband/infinitime-device-states',
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
        }
      ],
    },
  },
})
