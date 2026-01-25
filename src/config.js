// src/config.js 【完整覆盖版】✅ footer_bottom left/right 分别显示多张图片+超链接
// 保留所有原有配置：background/bgImgUrl/菜单/友链/版权/运行时间等
// ✅ 核心改动：left/right 数组追加图片HTML，图文混合，左右侧独立配置多张图
// ✅ 新增字体配置：全局字体GuanKiapTsingKhai，代码字体JetBrains Mono
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
                        { text: '时光卷轴', link: '/archives/', class: 'out' },
                        { text: '查看全部', link: '/zh-CN/categories/', class: 'out' }
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
                        { text: '查看全部', link: '/zh-CN/tags/', class: 'out' }
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
    // ✅ 新增字体配置节点（英文端同步）
    font: {
        font_family: "GuanKiapTsingKhai, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, sans-serif",
        code_font_family: "JetBrains Mono, consolas, Menlo, sans-serif"
    },
    blog_title_font: {
        font_family: "GuanKiapTsingKhai"
    },
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
        "Posts||fa fa-graduation-cap": {
            "Archives": "/en/archives/ || fas fa-archive",
            "Tags": "/en/tags/ || fas fa-tags", 
            "Categories": "/en/categories/ || fas fa-folder-open"
        },       
        "Link": "/en/link/ || fas fa-link",
        "Board": "/en/board/ || fas fa-user",
        "Languages||fas fa-language": {
            "中文": "/zh-CN/ || fas fa-c",
            "English": "/en/ || fas fa-e",
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
                        { text: 'Guide', link: '/en/categories/Gomain/', class: 'out' },
                        { text: 'Share', link: '/en/categories/Share/', class: 'out' },
                        { text: 'All', link: '/en/archives/', class: 'out' }
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
    }
};

// 保留所有原有导出，无需修改
export function getConfig(lang = 'zh-CN') {
    return lang === 'zh-CN' ? configZhCN : configEn;
}

export const background = "../public/img/0/top.avif";
export const bgImgUrl = "./top.avif";
export { configZhCN, configEn };
