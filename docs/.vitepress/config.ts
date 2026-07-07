import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王同学',
  description: '学习日志与项目作品集',
  base: '/my-site/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习日志', link: '/journal/' },
      { text: '项目作品', link: '/projects/' }
    ],

    sidebar: {
      '/journal/': [
        {
          text: '学习日志',
          items: [
            { text: '日志首页', link: '/journal/' },
            { text: '数据结构学习', link: '/journal/2026-03-31' },
            { text: 'Nacos、Feign 和 Gateway', link: '/journal/2026-03-29' },
            { text: '邮件异步与工具类理解', link: '/journal/2026-03-27' },
            { text: '原生 HTML 页面功能实现', link: '/journal/2026-03-26' },
            { text: '基础补充', link: '/journal/2026-03-22' },
            { text: '重建项目', link: '/journal/2026-03-21' },
            { text: 'Web 请求生命周期', link: '/journal/2026-03-18' },
            { text: 'JWT 与 HashMap', link: '/journal/2026-03-17' },
            { text: '第一次搭建 VitePress 网站', link: '/journal/2026-03-16' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目作品',
          items: [
            { text: '项目首页', link: '/projects/' },
            { text: 'JYA Consulting 企业官网', link: '/projects/jya_consulting' },
            { text: 'Quantification 企业官网', link: '/projects/quantification' },
            { text: '二手车交易平台', link: '/projects/used-car' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jimc56220-cyber' }
    ]
  }
})
