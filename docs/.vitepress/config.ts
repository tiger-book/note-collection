import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import sidebarNotes from './sidebarNotes'

console.log(process.env.PULISH_ENV, 'process.env.PULISH_ENV')

export default defineConfig({
  title: 'note-collection',
  description: '一个笔记收藏网站....',
  base: process.env.PULISH_ENV === 'production' ? '/' : '/note-collection/',
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  markdown: {
    lineNumbers: true,
  },
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    siteTitle: 'note-collection',
    logo: '/favicon.ico',
    lastUpdatedText: '最后更新时间',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-09-tiger',
    },
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },
    nav: nav(),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tiger-book/note-collection',
      },
    ],
    sidebar: {
      '/typora/': sidebarNotes(),
    },
  },
})

function nav() {
  return [
    {
      text: 'zhyboys笔记',
      link: '/typora/',
      activeMatch: '/typora/',
    },

    {
      text: '相关文档',
      items: [
        {
          text: 'vue',
          link: 'https://staging-cn.vuejs.org/',
        },
        {
          text: 'electron',
          link: 'https://www.electronjs.org/',
        },
        {
          text: 'vite',
          link: 'https://cn.vitejs.dev/',
        },
        {
          text: 'vite中文版(大佬翻译)',
          link: 'https://process1024.github.io/vitepress/',
        },
        {
          text: 'rollup',
          link: 'https://www.rollupjs.com/',
        },
        {
          text: 'electron-builder',
          link: 'https://www.electron.build/',
        },
        {
          text: 'vue-router',
          link: 'https://router.vuejs.org/zh/',
        },
        {
          text: 'pinia',
          link: 'https://pinia.vuejs.org/',
        },
        {
          text: 'vueuse',
          link: 'https://vueuse.org/',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: '友情连接/sky',
          link: 'https://zh-sky.gitee.io/electron-vue-template-doc/',
        },
      ],
    },
  ]
}
