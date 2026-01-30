import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://astro.imkn.top',
  integrations: [sitemap(), expressiveCode()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@waline/client/style";`
        }
      }
    },
    resolve: {
      alias: { '/img': '/public/img' }
    },
    assetsInclude: ['**/*.avif', '**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg'],
    // ========== 修正后的 Artalk 代理配置（核心！极简有效） ==========
    server: {
      proxy: {
        // 匹配所有 /artalk-api 开头的请求，转发到 Artalk 服务端
        '/artalk-api': {
          target: 'https://artalk.yuyano.com',
          changeOrigin: true, // 仅保留这个核心参数即可
          rewrite: (path) => path.replace(/^\/artalk-api/, '') // 替换 pathRewrite 为 rewrite（Vite 标准写法）
        }
      }
    }
  },
  markdown: { image: false }
});
