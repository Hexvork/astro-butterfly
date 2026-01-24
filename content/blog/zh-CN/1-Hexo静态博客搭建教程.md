---
title: Hexo静态博客搭建教程
date: 2025-09-30
updated: 2025-09-30
abbrlink: 1.html
top: true
tags: ["Hexo","Blog"]
banner: /img/1/1-0.avif
cover: /img/1/1-0.avif
categories: 教程
description: 该教程介绍Hexo静态博客搭建步骤：需安装Git、Node.js、VS Code，创建hexo文件夹并通过Git命令安装Hexo。可美化主题，创建GitHub仓库，配置SSH密钥，修改配置文件后推送代码至GitHub，用GitHub Pages部署，日后修改需执行特定命令。
swiper_index: "1"
swiper_desc: 该教程介绍Hexo静态博客搭建步骤：需安装Git、Node.js、VS Code，创建hexo文件夹并通过Git命令安装Hexo。可美化主题，创建GitHub仓库，配置SSH密钥，修改配置文件后推送代码至GitHub，用GitHub Pages部署，日后修改需执行特定命令。
swiper_cover: /img/1/1-0.avif
---
## 所需工具

### 1.Git（用于同步博客、部署hexo等）
官网：[点这里进入](https://git-scm.com/)

### 2.Node.js
官网：[点这里进入](https://nodejs.org/zh-cn/)

### 3.VS code（用于编写markdown，也可用其他）
下载链接：[点这里进入](https://code.visualstudio.com/download)

### 以上应用的网盘下载链接
[点这里](https://share.feijipan.com/s/uiXXFg63)

*安装时无脑下一步
_________

## 图文演示
## 一、安装hexo

### 1.创建文件夹

在任意地点创建文件夹并命名为”hexo”(双引号不输入)

### 2.用Git安装hexo

在“Hexo”文件夹里右键选择”Open Git Bash here”

在打开的命令行中依次输入下列代码：

```gui
npm install hexo-cli -g

hexo init blog

cd blog

npm install

hexo s
```

如果出现“INFO Hexo is running at http://localhost:4000” . Press Ctrl+C to stop.”即表示本地运行成功

在浏览器里输入[http://localhost:4000/](http://localhost:4000) 来查看你的博客

*”hexo s”全称是”hexo server”

### 二、美化博客

打开hexo的主题中心 [这里进入](https://hexo.io/themes/)

![1024](/img/1/1-1.avif)

找到你喜欢的主题，点击进入跳转到Github，在描述栏中查看主题的代码，

在hexo/blog目录右键选择”Open Git Bash here”，

在弹出的命令行中把代码粘贴并回车运行

代码运行完成后，在hexo/blog目录找到”_config.yml”

用VS Code打开，找到theme，在冒号后面的主题名称改成hexo\blog\themes中你安装的主题文件夹的名称

上述代码运行完成后，在hexo/blog目录右键选择”Open Git Bash here”

在打开的命令行中依次输入：

```txt
hexo g
hexo clean
hexo s
```

再在浏览器中输入 [http://localhost:4000/](http://localhost:4000/)

来查看你的博客的主题有没有修改完成

## 三、创建Github仓库

### 1.登录Github：[官网](https://github.com)

*Github有时国内连不上，可以用Watt Toolkit来加速

### 2.创建新仓库

把仓库名称改为”你的用户名.github.io”

接着无脑下一步

直到出现下面的页面

![Github创建新仓库页面](/img/1/1-2.avif)

## 四、用git给自己一个身份标识并获取ssh密钥

![Github用户名](/img/1/1-3.avif)

在hexo/blog目录右键选择”Open Git Bash here”

依次输入以下代码：

```txt
git config --global user.name "你Github的用户名"

git config --global user.email "你用于GitHub注册的邮箱"

ssh-keygen -t rsa -C "你用于GitHub注册的邮箱"

cat ~/.ssh/id_rsa.pub
```

出现好几行看似乱码的密钥即表示成功

## 五、把Git的ssh密钥复制到GitHub中

![Github的ssh密钥复制页面](/img/1/1-4.avif)

## 六、把本地代码推送到GitHub上

在hexo/blog目录找到”_config.yml”

找到末尾

把最后几行代码改成这样

```yml
deploy:
  type: 'git'
  repository: 仓库的ssh链接
  branch: main
```

在hexo/blog目录右键选择”Open Git Bash here”

在打开的命令行中依次输入：

```txt
hexo g
hexo d
```

等待代码运行完成

## 七、把本地代码推送静态网站部署平台上

你可以用Cloudflare Pages、EdgeOne Pages、Github Pages

这里用Github Pages为例

![第一步](/img/1/1-5.avif)

![第二步](/img/1/1-6.avif)

![第三步](/img/1/1-7.avif)

![第四步](/img/1/1-8.avif)

![第五步](/img/1/1-9.avif)

![第六步](/img/1/1-10.avif)

## 八、日后修改网站

每次修改了网站要在hexo/blog目录右键选择”Open Git Bash here”

在打开的命令行中依次输入：


```txt
hexo g
hexo clean
hexo d
```

现在你已经有你的网站了，快去试试吧

如果你想要把你的域名绑定到你的博客，可以以下图进行操作

![绑定域名](/img/1/1-11.avif)

如果你没有域名但想拥有你的专属域名，可以看一下我下一篇文章

尽请期待