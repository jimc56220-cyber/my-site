import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '王同学',
  description: '学习日志与项目作品集',
  base: '/my-site/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习日志', link: '/logs/' },
      { text: '项目作品', link: '/projects/' }
    ],

    sidebar: {
      '/logs/': [
        {
          text: '学习日志',
          items: [
            { text: '日志首页', link: '/logs/' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目作品',
          items: [
            { text: '项目首页', link: '/projects/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的GitHub用户名' }
    ]
  }
})