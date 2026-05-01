const configZhCN = {
    title: "Weston Blog",
    description: "探索未曾设想的道路",
    keywords: "Working",
    author: "Weston Brown",
    background: "/img/0/top.avif",
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
        "友链": "/zh-CN/links/ || fas fa-link",
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
                    link: '/zh-CN/board/',
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
                        { text: '教程', link: '/zh-CN/categories/教程/', class: 'out' },
                        { text: '分享', link: '/zh-CN/categories/分享/', class: 'out' },
                        { text: '时光卷轴', link: '/zh-CN/archives/', class: 'out' },
                        { text: '查看全部', link: '/zh-CN/categories/', class: 'out' }
                    ]
                },
                {
                    group_title: '标签', 
                    footer_links: [ 
                        { text: 'Hexo', link: '/zh-CN/tags/Hexo', class: 'out' },
                        { text: 'CDN', link: '/zh-CN/tags/CDN', class: 'out' },
                        { text: 'Blog', link: '/zh-CN/tags/Blog', class: 'out' },
                        { text: '查看全部', link: '/zh-CN/tags/', class: 'out' }
                    ]
                },
                {
                    group_title: '项目',
                    footer_links: [ 
                        { text: '背诵辅助机', link: 'https://github.com/BOOMDEE/Recitation-Tutoring-Robot', class: 'out' },
                        { text: 'Astro-Butterfly', link:'https://github.com/Weston-Brown/Astro-Butterfly', class: 'out' }
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
        }
    },
    footer_text: {
        friend_link_title: '友链',
        refresh_link_btn: '换一批',
        view_more_links: '查看更多',
        runtime_prefix: '本站已苟活：',
        back_to_top: '返回顶部',
        icp_title: '萌ICP备20251308号',
        github_source_title: 'Github源码托管',
        cloudflare_cdn_title: 'Cloudflare CDN加速',
        astro_frame_title: 'Astro 静态站点框架',
        butterfly_theme_title: 'Butterfly 主题',
        tags_title: '标签',
        projects_title: '项目',
        time_units: { days: '天', hours: '时', minutes: '分', seconds: '秒' }
    },
    error_img: {
        flink: '/img/0/error-flink.svg'
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
    font: {
        font_family: "GuanKiapTsingKhai, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, sans-serif"
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
        "Links": "/en/links/ || fas fa-link",
        "Board": "/en/board/ || fas fa-user",
        "Language||fas fa-language": {
            "Chinese": "/zh-CN/ || fas fa-c",
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
                    desrc: 'Send an email to the administrator',
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
                        { text: 'Tutorial', link: '/en/categories/Tutorial/', class: 'out' },
                        { text: 'Review', link: '/en/categories/Review/', class: 'out' },
                        { text: 'All', link: '/en/archives/', class: 'out' }
                    ]
                },
                {
                    group_title: 'Tags', 
                    footer_links: [ 
                        { text: 'Blog', link: '/en/tags/Blog', class: 'out' },
                        { text: 'Hexo', link: '/en/tags/Hexo/', class: 'out' },
                        { text: 'CDN', link: '/en/tags/CDN/', class: 'out' },
                        { text: 'View All', link: '/en/tags/', class: 'out' }
                    ]
                },
                {
                    group_title: 'Projects', 
                    footer_links: [ 
                        { text: 'Recitation Assistant', link: 'https://github.com/BOOMDEE/Recitation-Tutoring-Robot', class: 'out' },
                        { text: 'Astro-Butterfly', link:'https://github.com/Weston-Brown/Astro-Butterfly', class: 'out' }
                    ]
                }
            ],

            footer_friend_links: {
                enable: true,
                number: 5,
                links: [
                    { name: 'echo\'s Blog', url: 'https://blog.cnm250.cn/' },
                    { name: 'Yeqing Blog', url: 'https://blog.yeqing.net/' },
                    { name: 'FreeBoy\'s Blog', url: 'https://blog.free2011.top' },
                    { name: 'AcoFork Blog', url: 'https://blog.2b2x.cn/' },
                    { name: 'IFREAD\'s Site', url: 'https://blogs.lijnf.top/' },
                    { name: 'Axinkai', url: 'https://axinkai.cn/' },
                    { name: 'Zhheo', url: 'https://blog.zhheo.com/' },
                    { name: 'Starsharbor', url: 'https://blog.starsharbor.com/' },
                    { name: 'Anheyu', url: 'https://blog.anheyu.com/' }
                ]
            }
        }
    },
    footer_text: {
        friend_link_title: 'Friend Links',
        refresh_link_btn: 'Refresh',
        view_more_links: 'View More',
        runtime_prefix: 'Site Runtime：',
        back_to_top: 'Back to Top',
        icp_title: 'Moe ICP Filing 20251308',
        github_source_title: 'Github Source Hosting',
        cloudflare_cdn_title: 'Cloudflare CDN Acceleration',
        astro_frame_title: 'Astro Static Site Framework',
        butterfly_theme_title: 'Butterfly Theme',
        tags_title: 'Tags',
        projects_title: 'Projects',
        time_units: { days: 'days', hours: 'h', minutes: 'min', seconds: 's' }
    },
    error_img: {
        flink: '/img/0/error-flink.svg' 
    }
};

export function getConfig(lang = 'zh-CN') {
    return lang === 'en' ? configEn : configZhCN;
}

export const background = "../public/img/0/top.avif";
export const bgImgUrl = "./top.avif";
export { configZhCN, configEn };

 export const commentConfig = {

  artalk: {

    server: 'https://artalk.yuyano.com/', // 你的反代

    site: 'Weston-Blog',                    // 后端里配置的站点名

  },

 }