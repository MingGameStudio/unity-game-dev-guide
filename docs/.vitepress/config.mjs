import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const repository = process.env.GITHUB_REPOSITORY || 'MingGameStudio/unity-game-dev-guide'
const repoUrl = 'https://github.com/' + repository
const repoName = repository.split('/')[1]
const guideDirectory = fileURLToPath(new URL('../guide/', import.meta.url))
const chapters = readdirSync(guideDirectory)
  .filter(name => name.endsWith('.md') && name !== 'index.md')
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  .map(name => {
    const body = readFileSync(guideDirectory + name, 'utf8')
    const title = body.match(/^#\s+(.+)$/m)?.[1] || name.replace(/\.md$/, '')
    return { text: title, link: '/guide/' + name.replace(/\.md$/, '') }
  })

export default defineConfig({
  lang: 'zh-CN',
  title: 'Unity 游戏开发入门指南',
  description: '小明工作室 · Ming 编写与维护的一本持续更新的 Unity 游戏开发入门指南。',
  base: '/' + repoName + '/',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '小明工作室 · Unity 入门',
    nav: [
      { text: '开始阅读', link: '/guide/' },
      { text: '维护指南', link: '/maintenance' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      { text: '开始', items: [{ text: '阅读说明', link: '/guide/' }] },
      { text: '正文', items: chapters },
      { text: '参与与维护', items: [
        { text: '维护指南', link: '/maintenance' },
        { text: '关于本书', link: '/about' }
      ]}
    ],
    socialLinks: [{ icon: 'github', link: repoUrl }],
    editLink: { pattern: repoUrl + '/edit/main/docs/:path', text: '在 GitHub 上编辑本页' },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdated: { text: '最后更新', formatOptions: { dateStyle: 'medium' } },
    sidebarMenuLabel: '全书目录',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到正文',
    footer: { message: 'Ming 编写与维护 · 小明工作室', copyright: '© 2026 Ming Game Studio' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除搜索',
                backButtonTitle: '返回',
                noResultsText: '没有找到相关内容',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    }
  }
})

