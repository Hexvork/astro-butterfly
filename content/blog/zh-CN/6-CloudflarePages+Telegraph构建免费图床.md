---
title: CloudflarePages+Telegraph构建免费图床
date: 2025-12-07
updated: 2025-12-07
abbrlink: 6.html
tags:
  - 0基础
  - 0成本
  - 图床
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

{% link CloudFlare-ImgBed Github仓库,MarSeventh@CloudFlare-ImgBed,https://github.com/MarSeventh/CloudFlare-ImgBed %}

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