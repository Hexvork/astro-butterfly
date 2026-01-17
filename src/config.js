// src/config.js 完整覆盖版
// 新增 background 配置项：https://www.yuyano.com/img/0/top.webp
// 保留所有原有配置逻辑，适配 Astro ESM 导出规范

const configZhCN = {
    title: "Weston Blog",
    description: "探索未曾设想的道路",
    keywords: "Working",
    author: "Weston Brown",
    // ✅ 新增背景图配置（全局可用）
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
        "归档": "/zh-CN/archives/ || fas fa-archive",
        "分类": "/zh-CN/categories/ || fas fa-folder-open",
        "友链": "/zh-CN/links/ || fas fa-link",
        "留言板": "/zh-CN/board/ || fas fa-user",
        "语言||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e"
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
                url: '../public/img/0/footer.gif'
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
            left: [
                { text: '萌ICP备20251308号', desrc: '萌ICP备20251308号', link: 'https://icp.gov.moe/?keyword=20251308' }
            ],
            right: [
                { text: 'CDN加速', desrc: '本站通过Cloudflare提供CDN服务', link: 'https://Cloudflare-cn.com/' },
                { text: '静态框架', desrc: '本站使用 Hexo 架构搭建而成', link: 'https://hexo.io/zh-cn/' },
                { text: '主题名称', desrc: '本站基于liushen主题修改', link: 'https://github.com/willow-god/hexo-theme-liushen/' }
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
    // ✅ 新增背景图配置（英文版本同步添加）
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
        "Friends & Personal Collection": "/en/links/ || fas fa-link",
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
                url: '../public/img/0/footer.gif'
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
            left: [
                { text: 'Meng ICP Bei 20251308', desrc: 'Meng ICP Bei 20251308', link: 'https://icp.gov.moe/?keyword=20251308' }
            ],
            right: [
                { text: 'CDN Acceleration', desrc: 'This site is accelerated by Cloudflare CDN', link: 'https://Cloudflare-cn.com/' },
                { text: 'Static Framework', desrc: 'This site is built with Hexo', link: 'https://hexo.io/' },
                { text: 'Theme Name', desrc: 'This site is modified based on liushen theme', link: 'https://github.com/willow-god/hexo-theme-liushen/' }
            ],
            runtime: {
                enable: true,
                time: '2025/9/30 12:30:0'
            }
        }
    }
};

// ✅ 核心：实现主题需要的 getConfig 函数
// 该函数作用：根据当前语言返回对应配置，是sidebar.astro调用的核心方法
export function getConfig(lang = 'zh-CN') {
    return lang === 'zh-CN' ? configZhCN : configEn;
}

export const background = "../public/img/0/top.avif";

// 在你的 config.js 最底部，export上面新增这一行即可
export const bgImgUrl = "../public/img/0/top.avif";


// ✅ 同时导出两个配置对象+函数（ESM规范，适配Astro/Vite）
export { configZhCN, configEn };
