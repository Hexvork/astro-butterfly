---
title: Hexo-butterfly主题增加友链界面
date: 2025-11-16
updated: 2025-11-16
abbrlink: 4.html
tags:
  - Hexo
  - 0基础
  - 0成本
  - butterfly
categories: 教程
description: Hexo-butterfly主题添加友链界面：创建link/index.md页面与_data/link.yml数据文件，配置导航栏菜单，执行hexo三联命令即可完成部署。
cover: /img/4/4-0.avif
banner: /img/4/4-0.avif
---
我原本用的是 Stellar 博客主题，后来听朋友推荐换成了 Butterfly 主题，却卡在了友链界面的部署上。经过多次踩坑试错，终于成功搭建出满意的友链页面，于是整理出这份手把手教程，希望能帮到同样是小白的朋友们。
### 一、创建页面文件

在`blog/source/link`中创建文件`index.md`

打开文件，把文件头改成这样

```markdown
---
title: 友链展示
date: 2025-11-16
type: "link"
---
```
### 二、创建数据文件

在`blog/_data`中创建文件`link.yml`

打开文件，改成这样

```yml
- class_name: 友情链接
  class_desc: 这里的每个站点，都耐人寻味……
  flink_style: flexcard
  link_list:
    - name: 雨砚Blog
      link: https://www.yuyano.com
      avatar: https://www.yuyano.com/img/0/favicon.webp
      descr: 一个技术博客丫
```

name：网站名称
link：网站链接
avatar：网站邮箱
descr：网站介绍

每加一个友情链接就多加一个`name` `link` `avatar` `descr`

### 三、在导航栏显示友链

打开`blog/themes/butterfly`中的`_config.yml`

menu栏增加一行

```yml
友链展示: /link/ || fas fa-link
```

最后送上hexo三联

```txt
hexo cl
hexo g
hexo d
```

不出意外，友链界面应该正常显示了

## 总结

建站本就是一场充满探索的 DIY 之旅，每一次踩坑后的解决，都是属于自己的进步。快去刷新博客，验收专属于你的友链展示区吧！