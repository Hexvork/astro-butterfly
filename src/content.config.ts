import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ✅ 核心修改：补充 tags 字段（兼容单标签字符串/多标签数组）
const BlogPostSchema = z.object({
  title: z.string(),
  sticky: z.number().default(0),
  cover: z.string().optional(),
  categories: z.string(),
  // 新增 tags 字段：支持单标签（字符串）或多标签（字符串数组），标记为可选
  tags: z.union([
    z.string(), // 单标签（如 tags: "前端"）
    z.array(z.string()) // 多标签（如 tags: ["前端", "Astro"]）
  ]).optional(), 
  abbrlink: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updated: z.coerce.date(),
});

const BoardSchema = z.object({
  title: z.string(),
});

const cn_blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./content/blog/zh-CN" }),
  schema: BlogPostSchema,
});

const en_blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./content/blog/en" }),
  schema: BlogPostSchema,
});

const board = defineCollection({
  loader: glob({ pattern: '*.md', base: "./content/board" }),
  schema: BoardSchema,
});

export const collections = { cn_blog, en_blog, board };
