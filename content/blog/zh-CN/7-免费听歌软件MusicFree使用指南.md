---
title: 免费听歌软件MusicFree使用指南
date: 2025-12-21
updated: 2025-12-21
abbrlink: 7.html
tags:
  - 0基础
  - 0成本
  - 软件
categories: 教程
description: 音乐发烧友必备MusicFree！开源免费、音源丰富，多端版本适配不同设备，添加订阅源即可拓展音源，还支持歌单导入和坚果云云同步，自定义性拉满。
title_top_img: /img/7/7-0.webp
swiper_index: "7"
swiper_desc: 音乐发烧友必备MusicFree！开源免费、音源丰富，多端版本适配不同设备，添加订阅源即可拓展音源，还支持歌单导入和坚果云云同步，自定义性拉满。
cover: /img/7/7-0.webp
banner: /img/7/7-0.webp
swiper_cover: /img/7/7-0.webp
---

作为一个对音乐和音质有着极致追求的发烧友，我曾为了畅听喜欢的歌曲，专门开通了QQ音乐的年卡会员。可无奈的是，不少宝藏翻唱歌手只在网易云音乐发布作品，这让我不得不频繁在两大平台之间来回切换，体验感大打折扣。 直到今年，我彻底告别了会员续费的烦恼——因为我挖到了一款**开源免费、体积轻巧、音源丰富**的神仙听歌软件：MusicFree

## 一、下载软件

### 移动端

{% link Github安卓下载链接,maotoumao@MusicFree,https://github.com/maotoumao/MusicFree/releases %}

❓如何选择

| APK 文件名称                    | 适配架构      | 适合的手机类型                     | 补充说明                              |
| --------------------------- | --------- | --------------------------- | --------------------------------- |
| app-arm64-v8a-release.apk   | ARM64-v8a | 主流中高端安卓手机(2016 年后发布的绝大多数机型) | 目前安卓手机的主流架构，兼容性最好、性能最优，优先推荐下载     |
| app-armeabi-v7a-release.apk | ARMv7     | 老旧安卓手机(2016 年前发布的中低端机型)     | 仅适配 32 位 ARM 架构老手机，新机型无需选择        |
| app-universal-release.apk   | 通用架构      | 不确定自己手机架构、或想兼容所有机型          | 体积最大（30.2MB），适配性最广但安装包冗余，非特殊需求不推荐 |
| app-x86-release.apk         | x86       | 极少部分采用 x86 架构处理器的安卓设备       | 普通手机几乎用不到，仅适配 x86 架构设备            |
| app-x86_64-release.apk      | x86_64    | 采用 64 位 x86 架构的安卓设备         | 适配场景极少，普通手机无需考虑                   |

### 桌面端

{% link Github桌面端下载链接,maotoumao@MusicFreeDesktop,https://github.com/maotoumao/MusicFreeDesktop/releases/tag/v0.0.8 %}

| 安装包名称                                         | 适配系统 & 架构                  | 适合的设备                         | 补充说明                         |
| --------------------------------------------- | -------------------------- | ----------------------------- | ---------------------------- |
| MusicFree-0.0.8-darwin-arm64.dmg              | macOS + **ARM64 架构**       | 搭载 Apple芯片的 Mac 设备            | /                            |
| MusicFree-0.0.8-darwin-x64.dmg                | macOS + **x86_64 架构**      | 搭载 Intel 芯片的 Mac 设备           | /                            |
| MusicFree-0.0.8-linux-amd64.deb               | Linux + **x86_64 架构**      | 基于 Debian/Ubuntu 系的 Linux 发行版 | /                            |
| MusicFree-0.0.8-win32-x64-portable.zip        | Windows 10/11 + **x64 架构** | 64 位Windows电脑                 | **便携版**：解压后直接运行适合 U 盘携带或临时使用 |
| MusicFree-0.0.8-win32-x64-setup.exe           | Windows 10/11 + **x64 架构** | 64 位Windows电脑                 | **安装版**：通过向导安装，适合长期固定使用      |
| MusicFree-0.0.8-win32-x64-legacy-portable.zip | Windows 7/8 + **x64 架构**   | Windows 7/8                   | **便携版**：旧版 Windows 系统使用      |
| MusicFree-0.0.8-win32-x64-legacy-setup.exe    | Windows 7/8 + **x64 架构**   | Windows 7/8                   | **安装版**：旧系统专用，相比便携版更适合长期使用   |

{% note warning 提醒 %}
以下教程以**Windows**端为例，其他平台大同小异
{% endnote %}

## 二、配置音乐源

打开软件后，点击侧边栏的**插件管理**，再选择**订阅设置**；随后点击**添加**订阅源，名称可自定义填写，链接一栏输入 `https://musicfreepluginshub.2020818.xyz/plugins.json`，完成后点击**保存**并更新订阅。操作完成后，你会发现插件库中已经新增了大量的订阅源。

其他插件：
长青聚合音源
[https://13413.kstore.space/musicfree.json](https://13413.kstore.space/musicfree.json)
Gitee官方插件库
[https://gitee.com/maotoumao/MusicFreePlugins/raw/master/plugins.json](https://gitee.com/maotoumao/MusicFreePlugins/raw/master/plugins.json)
Bilibili音频：
[https://gitee.com/maotoumao/MusicFreePlugins/raw/v0.1/dist/bilibili/index.js](https://gitee.com/maotoumao/MusicFreePlugins/raw/v0.1/dist/bilibili/index.js)
元力聚合音源：
[https://13413.kstore.space/musicfree.json](https://13413.kstore.space/musicfree.json)

## 三、导入音乐歌单

这一步很简单，复制你歌单的链接，粘贴进对应的插件，导入即可。

## 四、云同步

打开**坚果云**并注册登录[官网直达](https://www.jianguoyun.com/d/signup)

点击**账号-安全选项-第三方应用管理**，创建应用密码

回到MusicFree

点击右上角**设置**，点击**备份与回复**，找到**Webdav**备份

填写下面信息：

- URL：`https://dav.jianguoyun.com/dav/`
- 账号：你注册坚果云的`邮箱`或`手机号`
- 密码：刚刚获取的`应用密码`

点击**备份歌单**，就做好云同步了

## 结语

MusicFree 还有超多实用功能等着你去发现！你可以根据自己的喜好来配置 —— 比如调调音质解码参数、设置歌词显示样式，甚至自定义界面主题。不管是优化播放体验，还是打造专属的视觉风格，都能轻松做到，可玩性特别高。