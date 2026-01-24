// src/config.js 【完整覆盖版】✅ footer_bottom left/right 分别显示多张图片+超链接
// 保留所有原有配置：background/bgImgUrl/菜单/友链/版权/运行时间等
// ✅ 核心改动：left/right 数组追加图片HTML，图文混合，左右侧独立配置多张图
const configZhCN = {
    title: "Weston Blog",
    description: "探索未曾设想的道路",
    keywords: "Working",
    author: "Weston Brown",
    background: "../public/img/0/top.avif",
    copy: {
        enable: true,
        copyright: {
            enable: false,
            limit_count: 50
        }
    },
    language: "zh-CN",
    source_dir: "source",
    public_dir: "public",
    tag_dir: "tags",
    archive_dir: "archives",
    category_dir: "categories",
    subtitle: {
        enable: true,
        effect: true,
        typed_option: null,
        source: false,
        sub: [
            "初看前路近可至，细思百事竞待忙",
            "认知，信条，教导"
        ]
    },
    menu: {
        "整理||fa fa-graduation-cap": {
            "时光卷轴": "/zh-CN/archives/ || fas fa-archive",
            "文章标签": "/zh-CN/tags/ || fas fa-tags", 
            "文章分类": "/zh-CN/categories/ || fas fa-folder-open"
        },       
        "友链": "/zh-CN/link/ || fas fa-link",
        "留言板": "/zh-CN/board/ || fas fa-user",
        "语言||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e",
        }
    },
    aside: {
        card_announcement: {
            content: "开放友链添加，欢迎互换"
        }
    },
    date_format: "YYYY-MM-DD",
    per_page: 10,
    disable_top_img: false,
    footer_better: {
        enable: true,
        priority: 5,
        enable_page: 'all',
        layout: {
            type: 'id',
            name: 'footer',
            index: 1
        },
        footer_icons: {
            enable: true,
            left: [
                {
                    icon: 'fa-brands fa-github',
                    link: 'https://github.com/Weston-Brown',
                    desrc: '我的 GitHub 主页',
                    class: 'out'
                },
                {
                    icon: 'fa-solid fa-envelope',
                    link: 'mailto:i@yuyano.com',
                    desrc: '发送邮件至管理员邮箱',
                    class: 'out'
                }
            ],
            footer_logo: {
                enable: true,
                url: '/img/0/footer.gif'
            },
            right: [
                {
                    icon: 'fa-solid fa-comment',
                    link: '/comment/',
                    desrc: '留言板',
                    class: 'out'
                }
            ]
        },
        footer_group: {
            enable: true,
            footer_group_link: [
                {
                    group_title: '文章整理',
                    footer_links: [
                        { text: '博客', link: '/categories/测评/', class: 'out' },
                        { text: '域名', link: '/categories/域名/', class: 'out' },
                        { text: '分享', link: '/categories/分享/', class: 'out' },
                        { text: '时光卷轴', link: '/posts/', class: 'out' },
                        { text: '查看全部', link: '/categories/', class: 'out' }
                    ]
                },
                {
                    group_title: '文章标签',
                    footer_links: [
                        { text: '0基础', link: '/tags/0基础', class: 'out' },
                        { text: '0成本', link: '/tags/0成本', class: 'out' },
                        { text: 'Blog', link: '/tags/Blog', class: 'out' },
                        { text: 'Hexo', link: '/tags/Hexo', class: 'out' },
                        { text: 'CDN', link: '/tags/CDN', class: 'out' },
                        { text: '查看全部', link: '/tags/', class: 'out' }
                    ]
                },
                {
                    group_title: '自建工具',
                    footer_links: [
                        { text: '背诵辅助机', link: 'https://github.com/BOOMDEE/Recitation-Tutoring-Robot', class: 'out' }
                    ]
                }
            ],
            footer_friend_links: {
                enable: true,
                number: 5,
                links: [
                    { name: 'echo没啥用的博客', url: 'https://blog.cnm250.cn/' },
                    { name: '夜轻Blog', url: 'https://blog.yeqing.net/' },
                    { name: '自由の博客', url: 'https://blog.free2011.top' },
                    { name: 'AcoFork Blog', url: 'https://blog.2b2x.cn/' },
                    { name: 'IFREAD\'s Site', url: 'https://blogs.lijnf.top/' },
                    { name: '刺猬心语', url: 'https://axinkai.cn/' },
                    { name: '张洪Heo', url: 'https://blog.zhheo.com/' },
                    { name: '❖星港◎Star☆', url: 'https://blog.starsharbor.com/' },
                    { name: '安知鱼', url: 'https://blog.anheyu.com/' }
                ]
            }
        },
        footer_bottom: {
            copyright: {
                enable: true,
                author: 'Weston Brown',
                link: 'https://astro.imkn.top/about-me',
                since: 2025
            },
            // ✅ 左侧：原有ICP文字 + 追加2张图片（可继续加）
            left: [
                { 
                    type: "img", // 标记为图片类型
                    link: "https://icp.gov.moe/?keyword=20251308",
                    imgUrl: "/img/0/Footer-icp-Moeicp.svg",
                    alt: "萌ICP备案",
                    title: "萌ICP备案",
                    style: "width:60px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://Github.com",
                    imgUrl: "/img/0/Footer-Source-Github.svg",
                    alt: "Github",
                    title: "Github",
                    style: "width:60px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://Cloudflare-cn.com/",
                    imgUrl: "/img/0/Footer-CDN-Cloudflare.svg",
                    alt: "Cloudflare",
                    title: "Cloudflare",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                }
            ],
            // ✅ 右侧：新增Vercel图标
            right: [
                { 
                    type: "img",
                    link: "https://astro.build",
                    imgUrl: "/img/0/Footer-Frame-Astro.svg",
                    alt: "Astro",
                    title: "Astro",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://butterfly.js.org",
                    imgUrl: "/img/0/Footer-Theme-Butterfly.svg",
                    alt: "Butterfly",
                    title: "Butterfly",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://vercel.com",
                    imgUrl: "/img/0/Footer-Deploy-Vercel.svg",
                    alt: "Vercel",
                    title: "Vercel",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                }
            ],
            runtime: {
                enable: true,
                time: '2025/9/30 12:30:0'
            }
        }
    }
};

const configEn = {
    title: "Weston Blog",
    description: "Exploring uncharted paths",
    keywords: "Working",
    author: "Weston Brown",
    background: "../public/img/0/top.avif",
    copy: {
        enable: true,
        copyright: {
            enable: false,
            limit_count: 50
        }
    },
    language: "en",
    source_dir: "source",
    public_dir: "public",
    tag_dir: "tags",
    archive_dir: "archives",
    category_dir: "categories",
    subtitle: {
        enable: true,
        effect: true,
        typed_option: null,
        source: false,
        sub: [
            "Will there is a will, there is a way",
            "Courage and Honor !"
        ]
    },
    menu: {
        "Archives": "/en/archives/ || fas fa-archive",
        "Categories": "/en/categories/ || fas fa-folder-open",
        "Friends & Personal Collection": "/en/link/ || fas fa-link",
        "Board": "/en/board/ || fas fa-user",
        "Language||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e"
        }
    },
    aside: {
        card_announcement: {
            content: "Open for adding friend links, welcome to exchange"
        }
    },
    date_format: "YYYY-MM-DD",
    per_page: 10,
    disable_top_img: true,
    footer_better: {
        enable: true,
        priority: 5,
        enable_page: 'all',
        layout: {
            type: 'id',
            name: 'footer',
            index: 1
        },
        footer_icons: {
            enable: true,
            left: [
                {
                    icon: 'fa-brands fa-github',
                    link: 'https://github.com/Weston-Brown',
                    desrc: 'My GitHub Profile',
                    class: 'out'
                },
                {
                    icon: 'fa-solid fa-envelope',
                    link: 'mailto:i@yuyano.com',
                    desrc: 'Send an email to admin',
                    class: 'out'
                }
            ],
            footer_logo: {
                enable: true,
                url: '/img/0/footer.gif'
            }
        },
        footer_group: {
            enable: true,
            footer_group_link: [
                {
                    group_title: 'Article Organization',
                    footer_links: [
                        { text: 'Blog', link: '/categories/测评/', class: 'out' },
                        { text: 'Domain', link: '/categories/域名/', class: 'out' },
                        { text: 'Sharing', link: '/categories/分享/', class: 'out' },
                        { text: 'Time Scroll', link: '/posts/', class: 'out' }
                    ]
                }
            ],
            footer_friend_links: {
                enable: true,
                number: 5,
                links: [
                    { name: 'echo\'s Useless Blog', url: 'https://blog.cnm250.cn/' },
                    { name: 'Yeqing Blog', url: 'https://blog.yeqing.net/' },
                    { name: 'Free Blog', url: 'https://blog.free2011.top' },
                    { name: 'AcoFork Blog', url: 'https://blog.2b2x.cn/' },
                    { name: 'IFREAD\'s Site', url: 'https://blogs.lijnf.top/' }
                ]
            }
        },
        footer_bottom: {
            copyright: {
                enable: true,
                author: 'Weston Brown',
                link: 'https://astro.imkn.top/about-me',
                since: 2025
            },
            // ✅ 英文左侧：原有文字 + 按需加图片（示例加1张）
            left: [
                { 
                    type: "img", // 标记为图片类型
                    link: "https://icp.gov.moe/?keyword=20251308",
                    imgUrl: "/img/0/Footer-icp-Moeicp.svg",
                    alt: "萌ICP备案",
                    title: "萌ICP备案",
                    style: "width:60px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://Github.com",
                    imgUrl: "/img/0/Footer-Source-Github.svg",
                    alt: "Github",
                    title: "Github",
                    style: "width:60px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://Cloudflare-cn.com/",
                    imgUrl: "/img/0/Footer-CDN-Cloudflare.svg",
                    alt: "Cloudflare",
                    title: "Cloudflare",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                }
            ],
            // ✅ 英文右侧：同步新增Vercel图标
            right: [
                { 
                    type: "img",
                    link: "https://astro.build",
                    imgUrl: "/img/0/Footer-Frame-Astro.svg",
                    alt: "Astro",
                    title: "Astro",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://butterfly.js.org",
                    imgUrl: "/img/0/Footer-Theme-Butterfly.svg",
                    alt: "Butterfly",
                    title: "Butterfly",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                },
                { 
                    type: "img",
                    link: "https://vercel.com",
                    imgUrl: "/img/0/Footer-Deploy-Vercel.svg",
                    alt: "Vercel",
                    title: "Vercel",
                    style: "width:50px;height:auto;margin:0 8px;vertical-align:middle;"
                }
            ],
            runtime: {
                enable: true,
                time: '2025/9/30 12:30:0'
            }
        }
    }
};

// 保留所有原有导出，无需修改
export function getConfig(lang = 'zh-CN') {
    return lang === 'zh-CN' ? configZhCN : configEn;
}

export const background = "../public/img/0/top.avif";
export const bgImgUrl = "./top.avif";
export { configZhCN, configEn };
