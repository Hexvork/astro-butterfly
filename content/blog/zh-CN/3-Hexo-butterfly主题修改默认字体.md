---
title: Hexo-butterfly主题修改默认字体
date: 2025-11-14
updated: 2025-11-14
abbrlink: 3.html
tags: ["Hexo", "Fonts","Butterfly"]
banner: /img/3/3-0.avif
cover: /img/3/3-0.avif
categories: 教程
description: 该教程介绍0基础0成本修改Hexo-butterfly主题默认字体的两种方法：CDN引入霞鹜文楷（全局）和JetBrains Mono（代码），或本地部署霞鹜文楷，均需修改配置文件，注意链接/路径有效性与首次加载速度。
swiper_index: "3"
swiper_desc: 该教程介绍0基础0成本修改Hexo-butterfly主题默认字体的两种方法：CDN引入霞鹜文楷（全局）和JetBrains Mono（代码），或本地部署霞鹜文楷，均需修改配置文件，注意链接/路径有效性与首次加载速度。
swiper_cover: /img/3/3-0.avif
---
本教程以下列字体为例：
- 全局字体：LXGW WenKai (霞鹜文楷)
- 代码字体：JetBrains Mono
### 一、CDN引入字体资源

1.打开_config.butterfly.yml文件，找到inject部分，添加以下代码：

```yml
inject:
  head:
    - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css">
    - <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/jetbrains-mono">
```

2.在同一个配置文件中，找到font部分，修改为：

```yml
font:
  global_font_size: 16px
  code_font_size: 14px
  font_family: '"LXGW WenKai Screen", sans-serif'
  code_font_family: '"JetBrains Mono", monospace'
```

{% note warning 注意事项 %}
1.如遇字体显示异常，请检查 CDN 链接是否有效
2.首次应用较慢很正常
{% endnote %}

## 二、本地应用字体

{% link LXGW WenKai(霞鹜文楷)Github仓库,github,https://github.com/lxgw/LxgwWenKai %}

1.下载LXGWWenKai-Regular.ttf，放到 themes\butterfly\source\fonts

2.在fonts里面创建**font.css**文件，里面改成这样

```css
@font-face {
  font-family: 'LXGW WenKai Screen';
  font-display: swap;
  src: url('/fonts/LXGWWenKai-Regular.ttf') format("truetype");  
}
```

2.打开_config.butterfly.yml文件，找到inject部分，添加以下代码：

```yml
inject:
  head:
    - <link rel="stylesheet" href="fonts/font.css">
```

2.在同一个配置文件中，找到font部分，修改为：

```yml
font:
  global_font_size: 16px
  code_font_size: 14px
  font_family: '"LXGW WenKai Screen", sans-serif'
  code_font_family: '"LXGW WenKai Screen", sans-serif'
```

{% note warning 注意事项 %}
1.如遇字体显示异常，请检查路径是否正确
2.首次应用较慢很正常
3.速度应该没CDN快
~~站长目前还不会本地修改代码字体 JetBrains Mono~~
{% endnote %}