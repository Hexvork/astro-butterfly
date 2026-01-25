---
title: CloudflarePages优选指南【20260125亲测有效】
date: 2026-01-25
updated: 2026-01-25
abbrlink: 8.html
tags:
  - CDN
  - Cloudflare
categories: 教程
description: 分享Cloudflare国内提速野路子，先注册华为云账号并将Pages自定义域名添加至其DNS解析。分两方案：一是全网默认CNAME到Pages域名、中国大陆解析CNAME至优选域名；二是按电信/移动/联通分别添加优质A/AAAA记录，全网默认仍解析到Pages域名，最后将Cloudflare的NS地址替换为华为云的，且需注意该操作违反Cloudflare规定有风险。
title_top_img: /img/8/8-0.avif
swiper_index: "8"
swiper_desc: 分享Cloudflare国内提速野路子，先注册华为云账号并将Pages自定义域名添加至其DNS解析。分两方案：一是全网默认CNAME到Pages域名、中国大陆解析CNAME至优选域名；二是按电信/移动/联通分别添加优质A/AAAA记录，全网默认仍解析到Pages域名，最后将Cloudflare的NS地址替换为华为云的，且需注意该操作违反Cloudflare规定有风险。
cover: /img/8/8-0.avif
banner: /img/8/8-0.avif
swiper_cover: /img/8/8-0.avif
---
Cloudflare是知名的免费CDN服务商，节点遍布全球（环大陆区域），国际访问速度表现优异，不过国内使用体验却不尽如人意。虽说升级企业套餐能改善这一问题，但想必普通博主都不会选择。今天就给大家分享一个实用**野路子**，教大家提升Cloudflare的国内访问速度。

<div style="background-color: #fff9e8; border-left: 4px solid #ff0000; padding: 12px 16px; border-radius: 4px; display: flex; align-items: center; gap: 8px; margin: 16px 0;">
  <div style="width: 20px; height: 20px; background-color: #ff0000; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">!</div>
  <span style="font-size: 14px; color: #595959; line-height: 20px; margin: 0; padding: 0; display: inline-block;">Cloudflare明令禁止用户在其平台进行任何形式的“优选”操作。若违反该规定，不仅可能面临法律诉讼，Cloudflare还将采取包括终止账户、向相关执法部门举报在内的一切必要措施。请自行权衡是否开展此类操作，本人对相关行为概不承担任何责任。</span>
</div>

<div style="background-color: #fff9e8; border-left: 4px solid #ffb800; padding: 12px 16px; border-radius: 4px; display: flex; align-items: center; gap: 8px; margin: 16px 0;">
  <div style="width: 20px; height: 20px; background-color: #ffb800; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">!</div>
  <span style="font-size: 14px; color: #595959; line-height: 20px; margin: 0; padding: 0; display: inline-block;">首先，你得有个Pages项目并绑定自己的域名，且已经托管到Cloudflare上了，本文章<b>假设</b>Cloudflare给你Pages项目分配的域名是<code style="background: #f0f0f0; padding: 2px 4px; border-radius: 2px; font-size: 13px;">w.pages.dev</code>，你自己绑定的域名是<code style="background: #f0f0f0; padding: 2px 4px; border-radius: 2px; font-size: 13px;">cf.com</code>，请自行替换成你自己实际的地址</span>
</div>

## 准备工作

### 1.注册华为云国际账号
<a href="https://console-intl.huaweicloud.com/dns" 
   style="text-decoration: none; display: block; max-width: 400px;">
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; background: #f5f5f5; cursor: pointer; transition: background 0.2s;">
    <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <img src="/img/0/link.svg"  
           style="width: 100%; height: 100%; object-fit: contain; display: block;">
    </div>
    <div style="flex: 1; min-width: 0;">
      <div style="font-size: 15px; font-weight: 500; color: #1f2937; margin: 0;">华为云官网</div>
      <div style="font-size: 12px; color: #6b7280; margin: 2px 0 0 0;">Huawei</div>
    </div>
    <div style="width: 20px; height: 20px; color: #9ca3af; flex-shrink: 0;">→</div>
  </div>
</a>
有条件的帆船注册国际账号，**无需实名**，没条件的注册国内账号，老老实实实名

### 2.添加**自定义域**至**云解析服务 DNS**

点击前往[云解析服务 DNS](https://console-intl.huaweicloud.com/dns)，后点击`公网域名`  

点击右上角`创建公网域名`  

填入需要优选的 **Pages 自定义域名**，也就是`cf.com`，然后点击`确定`  

## 方案一：直接**CNAME**已优选过的域名

在我的挑选下，只有一个CNAME域名符合我的要求：`cf.468123.xyz`

`cf.468123.xyz`支持IPV4和IPV6，境内和境外速度都不错 

登录华为云，点击`cf.com`的`管理解析`  

进入`管理解析`后点击`添加记录集` 

新添加一个`CNAME 记录`，线路类型为`全网默认`，记录值为**Pages 项目分配的域名**`w.pages.dev`。  

再添加一个`CNAME 记录`，线路类型为`地域解析` > `中国大陆`，记录值为**优选域名**`cf.468123.xyz`。  

最后在Cloudflare上添加下列华为云的NS地址

```TXT
ns1.huaweicloud-dns.com.  
ns1.huaweicloud-dns.cn.  
ns1.huaweicloud-dns.net.  
ns1.huaweicloud-dns.org.
```

大功告成

## 方案二：自己一一添加Cloudflare质量好的IP

登录华为云，点击`cf.com`的`管理解析`  

进入`管理解析`后点击`添加记录集` 

新添加一个`CNAME 记录`，线路类型为`全网默认`，记录值为**Pages 项目分配的域名**`w.pages.dev`。  

再添加一个`A 记录`，线路类型为`运营商线路解析` > `电信`，记录值请复制以下**所有**IP

```TXT
172.64.41.182
108.162.198.136
172.64.40.177
108.162.198.178
162.159.44.33
162.159.39.58
162.159.44.190
172.64.40.191
172.64.41.178
172.64.229.249
172.64.40.192
162.159.45.54
162.159.38.122
162.159.44.94
108.162.198.144
162.159.38.66
172.64.40.54
172.64.229.133
172.64.229.221
172.64.41.177
172.64.41.155
172.64.229.208
162.159.38.45
104.18.39.178
162.159.45.125
162.159.38.180
172.64.41.169
108.162.198.101
172.64.40.196
162.159.44.11
172.64.229.75
162.159.45.71
162.159.44.60
```

再添加一个`A 记录`，线路类型为`运营商线路解析` > `移动`，记录值请复制以下**所有**IP

```TXT
104.19.43.4
104.19.60.41
104.19.54.7
104.19.37.29
172.64.147.55
104.19.48.43
104.19.35.36
104.19.49.27
104.19.59.28
104.18.38.216
104.19.52.9
104.19.46.12
104.19.54.14
104.19.34.26
104.19.45.43
104.19.52.46
104.19.61.16
104.19.53.35
104.19.34.7
104.19.50.4
104.19.37.8
104.19.35.23
104.19.46.13
104.19.60.2
104.19.57.37
104.19.42.19
104.19.35.45
104.19.46.4
104.19.61.25
104.19.45.22
104.19.37.22
104.19.57.17
104.18.40.34
104.19.57.50
```

再添加一个`A 记录`，线路类型为`运营商线路解析` > `联通`，记录值请复制以下**所有**IP

```TXT
104.16.153.163
104.17.190.51
104.18.250.6
172.67.72.55
104.17.171.110
104.17.16.46
104.19.60.110
104.18.195.135
104.17.72.133
104.16.199.103
104.17.222.171
104.17.34.177
104.16.220.135
104.16.48.214
162.159.140.194
104.16.197.196
104.17.47.37
104.18.164.154
104.18.168.59
104.18.117.165
104.18.181.245
104.18.123.231
104.17.73.204
104.19.216.17
104.17.38.156
```

再添加一个`AAAA 记录`，线路类型为`运营商线路解析` > `电信`，记录值请复制以下**所有**IP

```TXT
2606:4700:ff00::294d
2803:f800:50::6ca:2c0ee
2a06:98c1:50::ac40:20f2
2606:4700:52::6fda:3223
2803:f800:50::6ca:2c0ef
2606:4700:440d::4763:1ed6
2606:4700:50::adf5:3af2
2a06:98c1:50::ac40:20f1
2803:f800:50::6ca:2c095
2606:4700:56::66d8:6718
2606:4700:440e::476b:550
2606:4700:4700::43e7:7825
2803:f800:50::6ca:2c0f2
2803:f800:50::6ca:2c093
2a06:98c1:50::ac40:20eb
2606:4700:440a::1cb6:6b92
2606:4700:4405::7180:63d4
2a06:98c1:50::ac40:2095
2a06:98c1:50::ac40:20ef
2606:4700:ff00::1d3c
2606:4700:ff00::a3f1
2606:4700:50::adf5:3a95
2606:4700:ff00::f0a2
2803:f800:50::6ca:2c0eb
2606:4700:50::adf5:3af1
2a06:98c1:50::ac40:2093
2606:4700:4700::5540:c18
2606:4700:50::adf5:3a93
2606:4700:ff00::5e4b
```

再添加一个`AAAA 记录`，线路类型为`运营商线路解析` > `移动`，记录值请复制以下**所有**IP

```TXT
2606:4700:83b0::a989:1c8f
2606:4700:5a::781b:9982
2606:4700:440d::3165:2694
2606:4700:83b9::9a7c:fe60
2606:4700:440d::5c47:8edc
2606:4700:5a::1702:6a46
2606:4700:83b5::4ed7:866a
2606:4700:83b1::b71f:219f
2606:4700:5a::f7f3:506d
2606:4700:5a::7320:fa86
2606:4700:52::27a1:1237
2606:4700:440f::b4eb:6595
2606:4700:300a::6505:7ee9
2606:4700:5a::d1ea:baed
```

再添加一个`AAAA 记录`，线路类型为`运营商线路解析` > `联通`，记录值请复制以下**所有**IP

```TXT
2606:4700:5a::1702:6a46
2606:4700:5a::781b:9982
2606:4700:440f::da92:7100
2606:4700:310c::2f41:2cc6
2606:4700:83b5::4ed7:866a
2606:4700:83b0::a989:1c8f
2606:4700:440a::683d:281d
2606:4700:52::27a1:1237
2606:4700:440d::5c47:8edc
2606:4700:5a::face:bf67
```

最后在Cloudflare上添加下列华为云的NS地址

```TXT
ns1.huaweicloud-dns.com.  
ns1.huaweicloud-dns.cn.  
ns1.huaweicloud-dns.net.  
ns1.huaweicloud-dns.org.
```

大功告成，希望对你有帮助

🆘找IP眼睛都要花了