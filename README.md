# vue-preset
cloud-stage preset for vue cli 3 

https://github.com/wulie88/vue-preset

---

# 活动中心方案

命名：活动云(cloud-stage)

## 概述

提供在线编辑和发布活动的云平台

主要功能：

1. 活动页面及模块的管理
2. 在线部署发布
3. 可修改内容

**从技术上看，达到视图复用。** 业务不能通用，视图可以通用。

## 设计

与原来无大变化，更适用于视觉上统一的活动

## 使用

在线编辑：

项目->页面->模块+排列

![](https://tva1.sinaimg.cn/large/006tNbRwgy1ga44d3gqdrj30vw0qmtgm.jpg)

![](https://tva1.sinaimg.cn/large/006tNbRwgy1gafsd3i696j30tm0obwhm.jpg)

开发提供模块：

模块=数据源+视图(基于组件)+事件+统计

![](https://tva1.sinaimg.cn/large/006tNbRwgy1ga44ddrgk2j30sx0lkdpn.jpg)

`新增`数据源说明：

数据源分为提供者（服务器）和消费者（模块）

## 开发

1. 构建模块:

使用命令`暂未实现，可参照示例模块构建`: 

```
cloud-stage init module-name
```

跳过创建项目

创建的目录如下:

```
- components
- modules
  - banner-base
    - preview.jpg
    - config.json
    - index.vue
  - banner-manual
    - preview.jpg
    - config.json
    - index.vue
  - banner-automatic
    - preview.jpg
    - config.json
    - index.vue
- pages
```

模块配置项：

- 标识：英文名，目录名称
- 名称：中文名
- 预览图：`preview.jpg`，推荐横图

通过`index.vue`提取的配置型：

- 输入参数: props
- 可配置数据: data
- 预处理: created
- 事件: methods

`模块与页面的界限`：模块只承担视图的功能，完成数据的显示及事件反馈，准备、处理数据的逻辑在页面中。

2. 编写页面`pages`

与正常一样，完成数据逻辑的处理

3. 提交

`git`提交，通过`gitlab-runner`触发后台模块更新

## 部署

在线发布：

项目=>打包=>cdn

## 开发

### 数据字典

产品表

- templateName
- name
- identifier
- initDatas


## 参考

阿里云凤蝶

https://www.yunfengdie.com/

开源的 pipeline

参考阅读：

https://github.com/CntChen/cntchen.github.io/issues/15
