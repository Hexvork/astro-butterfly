import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
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
    // ========== 新增：Astro5.x 图片404修复核心配置 (无sharp版本) ==========
    resolve: {
      alias: {
        '/img': '/public/img' // 强制映射 /img 路径到 public/img 真实目录 ✅核心修复
      }
    },
    // 禁用astro对静态图片的资产拦截，让vite原生处理public目录图片
    assetsInclude: ['**/*.avif', '**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg'],
  },
  // ========== 新增：关闭MD文件图片自动处理，彻底根治图片找不到 ==========
  markdown: {
    image: false // 关键：禁用astro对md文章内图片的解析拦截，完美解决核心问题
  }
});
