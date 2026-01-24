import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'cn_blog' | 'en_blog'>;

export async function getBlogEntry(lang: string): Promise<BlogEntry[]> {
    const blogEntries = await (async () => {
        switch(lang) {
            case 'zh-CN':
                return await getCollection('cn_blog');
            case 'en':
                return await getCollection('en_blog');
            default:
                return await getCollection('cn_blog');
        }
    })();
    (blogEntries as BlogEntry[]).sort((a: BlogEntry, b: BlogEntry) => new Date(b.data.updated).getTime() - new Date(a.data.updated).getTime());
    return blogEntries;
}

export async function getCategoryList(lang: string):Promise<{ name: string; path: string; count: number }[]> {
    const categoryMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry(lang);
    blogEntries.forEach(entry => {
        const category = entry.data.categories;
        if (category) {
            if (!categoryMap[category]) {
                categoryMap[category] = { name: category, path: `/categories/${category}`, count: 0 };
            }
            categoryMap[category].count += 1;
        }
    });
    return Object.values(categoryMap);
}

// ✅ 优化：完美适配多标签（数组）场景，解决统计/路径问题
export async function gettagsList(lang: string):Promise<{ name: string; path: string; count: number }[]> {
    const tagMap: { [key: string]: { name: string; path: string; count: number } } = {};
    const blogEntries = await getBlogEntry(lang);
    
    blogEntries.forEach(entry => {
        const tags = entry.data.tags;
        // 1. 跳过无标签的文章
        if (!tags) return;

        // 2. 统一转为数组（兼容：单标签字符串 → 数组，多标签数组 → 原数组）
        const tagList: string[] = Array.isArray(tags) ? tags : [tags];
        
        // 3. 遍历多标签，逐个统计
        tagList.forEach(tag => {
            // 过滤空标签/空白标签（如 ""、"  "）
            const cleanTag = tag?.trim();
            if (!cleanTag) return;

            // 4. 处理标签路径：编码特殊字符（中文/空格/符号），避免404
            const encodedTag = encodeURIComponent(cleanTag);
            const tagPath = `/tags/${encodedTag}`;

            // 5. 初始化/更新标签统计
            if (!tagMap[cleanTag]) {
                tagMap[cleanTag] = { 
                    name: cleanTag,  // 显示用原始标签名（友好）
                    path: tagPath,   // 路由用编码后的路径（规范）
                    count: 0 
                };
            }
            tagMap[cleanTag].count += 1;
        });
    });

    // 6. 返回排序后的标签列表（按文章数降序，体验更好）
    return Object.values(tagMap).sort((a, b) => b.count - a.count);
}

export async function getArchiveLength(lang: string):Promise<number> {
    const blogEntries = await getBlogEntry(lang);
    return blogEntries.length;
}
