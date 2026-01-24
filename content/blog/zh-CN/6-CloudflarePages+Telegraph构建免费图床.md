---
title: CloudflarePages+Telegraph构建免费图床
date: 2025-12-07
updated: 2025-12-07
abbrlink: 6.html
tags: ["ImgBed"]
categories: 教程
description: 本文详解Cloudflare Pages+Telegraph构建图床步骤：Fork仓库、Cloudflare部署、KV/D1数据库配置、Telegraph绑定，附注意事项，实现稳定免费自主可控图床。
swiper_index: "6"
swiper_desc: 本文详解Cloudflare Pages+Telegraph构建图床步骤：Fork仓库、Cloudflare部署、KV/D1数据库配置、Telegraph绑定，附注意事项，实现稳定免费自主可控图床。
cover: /img/6/6-0.webp
banner: /img/6/6-0.webp
swiper_cover: /img/6/6-0.webp
---
你是否想要一个**稳定、免费、自主可控**的图床？你可能在想，哪有这么好的事，但现在可以通过CloudflarePages+Telegraph构建这个理想的图床

## 一、fork仓库

打开官方仓库，点击star&fock

<style>
.tip-box-warning {
  background-color: #fff9e8;
  border-left: 4px solid #ffb800;
  padding: 12px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
}

.tip-icon-warning {
  width: 20px;
  height: 20px;
  background-color: #ffb800;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
}

.tip-text-warning {
  font-size: 14px;
  color: #595959;
  line-height: 20px; /* 关键：行高和图标高度完全一致 */
  margin: 0;
  padding: 0;
  display: inline-block;
}
</style>

<div class="tip-box-warning">
  <div class="tip-icon-warning">!</div>
  <span class="tip-text-warning">使用前请确保已安装最新版本的依赖包</span>
</div>





<style>
/* 链接卡片 - 背景色调整为更深的灰色 */
.md-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #e6e6e699;
  cursor: pointer;
  transition: background 0.2s;
}

<style>
.md-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #e6e6e699; 
  cursor: pointer;
  transition: background 0.2s;
}

.md-link-card:hover {
  background: #7c7676ce;
}

.md-link-avatar {
  width: 40px;
  height: 10px;
  border-radius: 6px;
  background: #e6e6e699; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.md-link-avatar svg {
  width: 20px;
  height: 20px;
  fill: #6b7280;
}

/* 文本内容 */
.md-link-content {
  flex: 1;
  min-width: 0;
}

.md-link-title {
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 2px;
}

.md-link-subtitle {
  font-size: 12px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 箭头 */
.md-link-arrow {
  width: 20px;
  height: 20px;
  color: #9ca3af;
  flex-shrink: 0;
}
</style>

<div class="md-link-section">
  <div class="divider"></div>
  <div class="md-link-card">
    <div class="md-link-avatar">
      <svg viewBox="0 0 24 24">
        <path d="M607.934444 417.856853c-6.179746-6.1777-12.766768-11.746532-19.554358-16.910135l-0.01228 0.011256c-6.986111-6.719028-16.47216-10.857279-26.930349-10.857279-21.464871 0-38.864146 17.400299-38.864146 38.864146 0 9.497305 3.411703 18.196431 9.071609 24.947182l-0.001023 0c0.001023 0.001023 0.00307 0.00307 0.005117 0.004093 2.718925 3.242857 5.953595 6.03853 9.585309 8.251941 3.664459 3.021823 7.261381 5.997598 10.624988 9.361205l3.203972 3.204995c40.279379 40.229237 28.254507 109.539812-12.024871 149.820214L371.157763 796.383956c-40.278355 40.229237-105.761766 40.229237-146.042167 0l-3.229554-3.231601c-40.281425-40.278355-40.281425-105.809861 0-145.991002l75.93546-75.909877c9.742898-7.733125 15.997346-19.668968 15.997346-33.072233 0-23.312962-18.898419-42.211381-42.211381-42.211381-8.797363 0-16.963347 2.693342-23.725354 7.297197-0.021489-0.045025-0.044002-0.088004-0.066515-0.134053l-0.809435 0.757247c-2.989077 2.148943-5.691629 4.669346-8.025791 7.510044l-78.913281 73.841775c-74.178443 74.229608-74.178443 195.632609 0 269.758863l3.203972 3.202948c74.178443 74.127278 195.529255 74.127278 269.707698 0l171.829484-171.880649c74.076112-74.17435 80.357166-191.184297 6.282077-265.311575L607.934444 417.856853z" />
        <path d="M855.61957 165.804257l-3.203972-3.203972c-74.17742-74.178443-195.528232-74.178443-269.706675 0L410.87944 334.479911c-74.178443 74.178443-78.263481 181.296089-4.085038 255.522628l3.152806 3.104711c3.368724 3.367701 6.865361 6.54302 10.434653 9.588379 2.583848 2.885723 5.618974 5.355985 8.992815 7.309476 0.025583 0.020466 0.052189 0.041956 0.077771 0.062422l0.011256-0.010233c5.377474 3.092431 11.608386 4.870938 18.257829 4.870938 20.263509 0 36.68962-16.428158 36.68962-36.68962 0-5.719258-1.309832-11.132548-3.645017-15.95846l0 0c-4.850471-10.891048-13.930267-17.521049-20.210297-23.802102l-3.15383-3.102664c-40.278355-40.278355-24.982998-98.79612 15.295358-139.074476l171.930791-171.830507c40.179095-40.280402 105.685018-40.280402 145.965419 0l3.206018 3.152806c40.279379 40.281425 40.279379 105.838513 0 146.06775l-75.686796 75.737962c-10.296507 7.628748-16.97358 19.865443-16.97358 33.662681 0 23.12365 18.745946 41.87062 41.87062 41.87062 8.048303 0 15.563464-2.275833 21.944801-6.211469 0.048095 0.081864 0.093121 0.157589 0.141216 0.240477l1.173732-1.083681c3.616364-2.421142 6.828522-5.393847 9.529027-8.792247l79.766718-73.603345C929.798013 361.334535 929.798013 239.981676 855.61957 165.804257z" />
    </svg>
    </div>
    <div class="md-link-content">
    <div class="md-link-title">Github安卓下载链接</div>
    <div class="md-link-subtitle">maotoumao@MusicFree</div>
  </div>
  <div class="md-link-arrow">→</div>
</div>


{% link CloudFlare-ImgBed Github仓库,MarSeventh@CloudFlare-ImgBed,https://github.com/MarSeventh/CloudFlare-ImgBed %}

<style>
/* 链接卡片 - 背景色调整为更深的灰色 */
.md-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #e6e6e699;
  cursor: pointer;
  transition: background 0.2s;
}

/* 悬浮效果同步加深 */
.md-link-card:hover {
  background: #7c7676ce;
  /* 悬浮时文字自动变白，提升可读性 */
  .md-link-title, .md-link-subtitle, .md-link-arrow {
    color: #ffffff;
  }
}

/* 头像 - 改为图片容器 */
.md-link-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #e6e6e699;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  /* 保证图片不超出容器 */
}

/* 自定义头像图片样式 */
.md-avatar-img {
  width: 80%;
  height: 80%;
  /* 图片自适应容器，不变形 */
  object-fit: center;
}

/* 文本内容 */
.md-link-content {
  flex: 1;
  min-width: 0;
}

.md-link-title {
  font-size: 15px;
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 2px;
  /* 悬浮时文字颜色过渡更自然 */
  transition: color 0.2s;
}

.md-link-subtitle {
  font-size: 12px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;
}

/* 箭头 */
.md-link-arrow {
  width: 20px;
  height: 20px;
  color: #9ca3af;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}
</style>

<div class="md-link-section">
  <div class="divider"></div>
  <div class="md-link-card">
    <div class="md-link-avatar">
      <!-- 替换这里的图片链接为你自己的图片地址 -->
      <img class="md-avatar-img" src="/img/0/link.svg">
      <!-- 如果图片加载失败，会显示备用文字，也可以留空 -->
    </div>
    <div class="md-link-content">
      <div class="md-link-title">Github安卓下载链接</div>
      <div class="md-link-subtitle">maotoumao@MusicFree</div>
    </div>
    <div class="md-link-arrow">→</div>
  </div>
</div>



为避免有小废物不会操作，这里附上图

![fock仓库](/img/6/6-1.webp)

## 二、通过Cloudflare部署图床

1.注册账号

2.展开左侧侧边栏的`计算和AI`

3.点击`Workers 和 Pages` 

4.点击右上角的`构建应用程序`

5.在最下方 Looking to deploy Pages? 点击`Get started`

6.在 "导入现有 Git 存储库" 处点击 `开始使用`

7.绑定你的Github

8.⚠配置项目设置

| 配置项    | 值                         |
| ------ | ------------------------- |
| 项目名称   | `cloudflare-imgbed`（或自定义） |
| 生产分支   | `main`                    |
| 构建命令   | `npm install`             |
| 构建输出目录 | `/`                       |

9.点击 "保存并部署"

10.绑定自己的域名

## 三、配置数据库

可选数据库为 `KV` 数据库和 `D1` 数据库

### 1. KV 数据库配置
#### 创建 KV 命名空间

1.在 Cloudflare Dashboard 中选择 "存储和数据库"
2.点击 "Workers KV"
3.点击 "创建实例"
4.输入命名空间名称：`img_url`（建议使用此名称）
5.点击 "创建"

#### 绑定 KV 到项目

1.返回您的 Pages 项目
2.选择 "设置" → "绑定"
3.点击 "添加" → "KV 命名空间"
4.填写绑定信息：
    - **变量名称**：`img_url`（必须是这个名称）
    - **KV 命名空间**：选择刚创建的命名空间
5.点击 "保存"

{% note warning 注意事项 %}
绑定 KV 时，变量名称必须为 `img_url`
{% endnote %}

### D1 数据库配置

#### 创建 D1 数据库

1.在 Cloudflare Dashboard 中选择 "存储和数据库"
2.点击 "D1 SQL 数据库"
3.点击 "创建数据库"
4.输入数据库名称：`img_d1`（建议使用此名称）
5.点击 "创建"

#### 初始化 D1 数据库

1.创建完成后，点击进入数据库详情页
2.选择 "控制台" 选项卡
3.在 SQL 输入框中逐段粘贴并执行初始化语句

```sql
-- CloudFlare ImgBed D1 Database Initialization Script
-- 这个脚本用于初始化D1数据库

-- 删除已存在的表（如果需要重新初始化）
-- 注意：在生产环境中使用时请谨慎
-- DROP TABLE IF EXISTS files;
-- DROP TABLE IF EXISTS settings;
-- DROP TABLE IF EXISTS index_operations;
-- DROP TABLE IF EXISTS index_metadata;
-- DROP TABLE IF EXISTS other_data;

-- 执行主要的数据库架构创建
-- 这里会包含 schema.sql 的内容

-- 1. 文件表 - 存储文件元数据
CREATE TABLE IF NOT EXISTS files (
    id TEXT PRIMARY KEY,
    value TEXT,
    metadata TEXT NOT NULL,
    file_name TEXT,
    file_type TEXT,
    file_size TEXT,
    upload_ip TEXT,
    upload_address TEXT,
    list_type TEXT,
    timestamp INTEGER,
    label TEXT,
    directory TEXT,
    channel TEXT,
    channel_name TEXT,
    tg_file_id TEXT,
    tg_chat_id TEXT,
    tg_bot_token TEXT,
    is_chunked BOOLEAN DEFAULT FALSE,
    tags TEXT, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. 系统配置表
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    category TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. 索引操作表
CREATE TABLE IF NOT EXISTS index_operations (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    timestamp INTEGER NOT NULL,
    data TEXT NOT NULL,
    processed BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. 索引元数据表
CREATE TABLE IF NOT EXISTS index_metadata (
    key TEXT PRIMARY KEY,
    last_updated INTEGER,
    total_count INTEGER DEFAULT 0,
    last_operation_id TEXT,
    chunk_count INTEGER DEFAULT 0,
    chunk_size INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. 其他数据表
CREATE TABLE IF NOT EXISTS other_data (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    type TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_files_timestamp ON files(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_files_directory ON files(directory);
CREATE INDEX IF NOT EXISTS idx_files_channel ON files(channel);
CREATE INDEX IF NOT EXISTS idx_files_file_type ON files(file_type);
CREATE INDEX IF NOT EXISTS idx_files_upload_ip ON files(upload_ip);
CREATE INDEX IF NOT EXISTS idx_files_created_at ON files(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_files_tags ON files(tags);

CREATE INDEX IF NOT EXISTS idx_settings_category ON settings(category);

CREATE INDEX IF NOT EXISTS idx_index_operations_timestamp ON index_operations(timestamp);
CREATE INDEX IF NOT EXISTS idx_index_operations_processed ON index_operations(processed);
CREATE INDEX IF NOT EXISTS idx_index_operations_type ON index_operations(type);

CREATE INDEX IF NOT EXISTS idx_other_data_type ON other_data(type);

-- 创建触发器
CREATE TRIGGER IF NOT EXISTS update_files_updated_at 
    AFTER UPDATE ON files
    BEGIN
        UPDATE files SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;

CREATE TRIGGER IF NOT EXISTS update_settings_updated_at 
    AFTER UPDATE ON settings
    BEGIN
        UPDATE settings SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;

CREATE TRIGGER IF NOT EXISTS update_index_metadata_updated_at 
    AFTER UPDATE ON index_metadata
    BEGIN
        UPDATE index_metadata SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;

CREATE TRIGGER IF NOT EXISTS update_other_data_updated_at 
    AFTER UPDATE ON other_data
    BEGIN
        UPDATE other_data SET updated_at = CURRENT_TIMESTAMP WHERE key = NEW.key;
    END;

-- 插入初始的索引元数据
INSERT OR REPLACE INTO index_metadata (key, last_updated, total_count, last_operation_id)
VALUES ('main_index', 0, 0, NULL);

-- 初始化完成
```

#### 绑定 D1 到项目

1.返回Pages项目
2.选择 "设置" → "绑定"
3.点击 "添加" → "D1 数据库"
4.填写绑定信息：
    - **变量名称**：`img_d1`（必须是这个名称）
    - **D1 数据库**：选择刚创建的数据库
5.点击 "保存"

{% note warning 注意事项 %}
绑定 D1 时，变量名称必须为 `img_d1`
{% endnote %}

重新部署项目

## 四、配置Telegraph

### 1.获取 `TG_BOT_TOKEN`

- 在 Telegram 中搜索 [@BotFather](https://t.me/BotFather)
- 发送 `/newbot` 命令
- 按提示输入 Bot 名称和用户名
- 获得 Bot Token

### 2.获取`TG_CHAT_ID`

- 创建一个新的 Telegram 频道
- 将创建的 Bot 添加为频道管理员
- 给予 Bot 消息管理的权限
- 在频道中发送一条消息
- 向 [@VersaToolsBot](https://t.me/VersaToolsBot) 转发这条消息
- 获得`TG_CHAT_ID`

{% note warning 注意事项 %}
1.频道 ID 前面有 `-` 号时需要保留
2.Bot 必须具有频道管理员权限
{% endnote %}

## 五、Telegraph绑定进Pages

1.访问https://你的域名/dashboard

2.点击`系统设置`

3.点击`上传设置`

4.填入配置

![填配置](/img/6/6-2.webp)
## 结语

CloudFlare-ImgBed项目为我们提供了一个理想的图床，它还有许多强大的功能，例如上传图片加密码、管理员用户名密码、图片审核，请各位自行探索

### 参考

{% link CloudFlare-ImgBed Github仓库,MarSeventh@CloudFlare-ImgBed,https://github.com/MarSeventh/CloudFlare-ImgBed %}

{% link CloudFlare-ImgBed 官方文档,安心存取，轻松分享,https://cfbed.sanyue.de/ %}