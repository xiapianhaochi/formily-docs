import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'formily',
  favicon: '/assets/favicon.ico',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  description: '插件化的前端表单配置工具',
  exportStatic: {},
  dynamicImport: {},
  base: process.env.NODE_ENV === 'production' ? '/formily-docs' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/formily-docs/' : '/',
  navs: {
    'en-US': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/sweet-design/formily-docs',
      },
      {
        title: 'Docschina',
        path: 'https://docschina.org/',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/sweet-design/formily-docs',
      },
      {
        title: '印记中文',
        path: 'https://docschina.org/',
      },
    ],
  },
});
