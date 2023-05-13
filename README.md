## vitepress-demo

## 介绍

VitePress 是 [VuePress](https://vuepress.vuejs.org/) 小兄弟, 基于 [Vite](https://github.com/vitejs/vite)构建。

官网地址：https://vitepress.vuejs.org/

## 用法

待补充

### 全局组件

> vuepress中`docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件

vitepress中呢

在 theme 中注册全局组件

如果要在文档中的多个页面中使用组件，则可以在主题中全局注册它们（或作为默认 VitePress 主题扩展的一部分）

在 `.vitepress/theme/index.js` 中，`enhanceApp` 函数接收 Vue `app` 实例

```js
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
```

然后就可以在 markdown 文件里使用组件

```md
# Vue Click Away

<VueClickAwayExample />
```

> 确保自定义组件的名称包含连字符或使用 PascalCase（大驼峰拼写）。否则，它将被视为内联元素并包裹在 `<p>` 标签中，这将会导致 HTML 渲染紊乱，因为 HTML 标准规定， `<p>` 标签中不允许放置任何块级元素。



## 进阶

### 自定义首页

vitepress 也是支持直接在 md 中写 vue 的，所以可以通过 vue 组件的形式，来自定义一套样式。

```
---
layout: home
---
<home />
<script setup>
import home from './components/home.vue'
</script>
```

### 自定义页面

通过添加 `.vitepress/theme/index.js` 或 `.vitepress/theme/index.ts` 文件（“主题入口文件”）来启用自定义主题。

```
import MyLayout from './layout.vue'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  // NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    console.log(app, '>>>>>')
  },
  setup() {
    // this function will be executed inside VitePressApp's
    // setup hook. all composition APIs are available here.
  },
}
```

默认主题 `<Layout/>` 组件有一些插槽，可用于在页面的某些位置注入内容。

```
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

console.log(frontmatter.value)
</script>

<template>
  <Layout>
    <template #doc-before>
      文档前面添加内容
      {{frontmatter}}
    </template>
    <template #doc-after>
      文档后面添加内容
      {{frontmatter}}
    </template>
  </Layout>
</template>

<style>
.page-info {
  font-size: 13px;
  color: #7f7f7f;
  margin-right: 10px;
}
</style>
```

### 环境变量

- 安装`cross-env` 来设置运行环境变量

  ```
  yarn add -D cross-env @types/node
  ```

- 修改`package.json`文件，`script`添加`"vercel:pulish": "cross-env PULISH_ENV=production vitepress build docs"`



### 引入`element-plus`

- 安装

  ```
   yarn add element-plus
   yarn add @element-plus/icons-vue
  ```

- 在`.vitepress/theme/index.ts`中注册

  > 这里是全部注册 可以按需引入减少打包体积

  ```js
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  
  export default {
    ...DefaultTheme,
    Layout: MyLayout,
    // NotFound: () => 'custom 404',
    enhanceApp({ app, router, siteData }) {
      // 注册element-plus
      app.use(ElementPlus)
      // 注册所有图标
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
    },
  }
  ```

- 使用

  ```md
  ---
  prev: '自定义上下页链接'
  tags: [1, 2]
  date: 2022-01-09
  author: tiger
  ---
  
  # 测试 vue 组件
  
  <script setup>
  import CustomComponent from '../components/CustomComponent.vue'
  import { ElButton } from 'element-plus'
  import { Delete } from '@element-plus/icons-vue'
  </script>
  
  This is a .md using a custom component
  
  <CustomComponent />
  
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="danger" :icon="Delete" circle />
  ```

  > 按需引入 需要借助一些插件，所以需要添加一个`vite.config.ts`配置文件，在`docs/vite.config.ts`，和script中指定的运行根目录有关`vitepress dev docs`
  >
  > 后续就按`element-plus`官网来，但是我这里只尝试了**手动导入**方式，安装了`unplugin-element-plus`插件，但是结果样式还是没有引入进来
  
- 参考

  - https://github.com/vuejs/vitepress/issues/282

### 引入`pdf`展示

- 方法一: iframe
- 方法二: 使用`pdfjs`之类的插件（TODO）

## 注意

要在内联代码片段或纯文本中展示 mustaches 或特定的 Vue 语法，你需要使用 `v-pre` 自定义容器包装一个段落

```
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

不然就是被当作可以执行的 vue 语法了

## 打包

文档多了打包速度肉眼可见的慢的。。

```
✓ building client + server bundles...
✓ rendering pages...
build complete in 77.26s.
```

## 部署

https://vitepress.vuejs.org/guide/deploying

### 部署到 GitHub Pages

1. 配置`docs/.vitepress/config.js`中的`base`，如果您计划将站点部署到 https://foo.github.io/bar/ ，那么应该将 base 设置为`/bar/`。它应该始终以斜杠开始和结束。

2. 创建`.github/workflows/deploy.yml`文件，内容如下

   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - master

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: yarn
         - run: yarn install --frozen-lockfile

         - name: Build
           run: yarn docs:build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
   ```

   > 注意分支名**master** 如果你要提交到**main**记得修改上面，核心就是在推送到对应分支时触发部署。

3. 提交到`master`分支

4. 在对应 GitHub 仓库的 setting 中的 pages 选择`gh-pages`分支作为 GitHub Pages source，保存后就会自动部署了

### 部署到 Vercel

> 如果是单独部署到 vercel，记得把 config 中的 base 设置为/即可。
>
> 但是我们这里既要部署到 github pages 又需要部署到 vercel，所以需要添加一个环境变量来区别下，具体看下面 3 配置

1. 登录https://vercel.com/，没有账号的用github账号就可以注册一个
2. 新建一个`project` https://vercel.com/new 选择你的仓库如果搜索不到，点击下面的调整 github app permissons 调整一下权限就可以了。
3. 配置
   1. 在`package.json`中添加`"vercel:pulish": "cross-env PULISH_ENV=production vitepress build docs"`
   2. 修改`.vitepress/config.ts`中的`base`为` base: process.env.PULISH_ENV === 'production' ? '/' : '/vitepress-demo/',`
   3. 登录上 vercel
      1. 在 vercel 对应项目中的`Settings`下的`General>Build&Development Settings`中修改下`Build Command`为 `npm run vercel:pulish`
      2. `Settings`下的`Environment Variables`添加`PULISH_ENV `等于`production`

### 打包错误

- [vitepress] No language registration for http

```
/ building client + server bundles...[vitepress] No language registration for http
file: E:/code/myProject/vitepress/docs/http-protocol/05/01.md
✖ building client + server bundles...
build error:
 Error: No language registration for http
    at getGrammar (E:\code\myProject\vitepress\node_modules\shiki\dist\index.js:2213:13)
```

> shiki 定位发现是这个的问题
>
> ```http
>  http://www.chrono.com/18-2
> ```

打包时会以为这是一个 http 语言的代码块

- [vitepress] One or more pages contain dead links.

```
(!) Found dead link ./01/index in file E:/code/myProject/vitepress/docs/http-protocol/README.md
If it is intended, you can use:
<a href="./01/index" target="_blank" rel="noreferrer">./01/index</a>
\ building client + server bundles...[vitepress] One or more pages contain dead links.
✖ building client + server bundles...
```

这个 md 文件中的地址是个相对路径，生成的地址在项目中不存在

- Error: One or more pages contain dead links.

```
(!) Found dead link ./lib/Less in file E:/code/myProject/vitepress/docs/typora/00summary/02 前端项目流程.md
If it is intended, you can use:
<a href="./lib/Less" target="_blank" rel="noreferrer">./lib/Less</a>
```

md 文档中的`[打开文件夹](./lib/JS)`无法解析

- Error [ERR_MODULE_NOT_FOUND]: Cannot find module

```
'E:\code\myProject\vitepress\docs\.vitepress\.temp\typora_12VueCode_31 添加全局$router 属性.md.js'
imported from E:\code\myProject\vitepress\node_modules\vitepress\dist\node\serve-1b26f7f9.js
```

感觉是文档标题中有`$`导致的，删除后就没事了

- 文件名好像不能有`+`号，不然打包后会提示找不到` Error [ERR_MODULE_NOT_FOUND]: Cannot find module 'E:\code\myProject\vitepress-demo\docs\.vitepress\.temp\advanced-core-knowledage-front-end_javascript-yu-yan-jin-jie_008-yi-bu-bu-ke-pa-si-ji-ying-bei+shi-jian-na-xia-xia.md.js'`

## vitepress 版本问题

当前版本`"vitepress": "^1.0.0-alpha.13"` `sidebar`必须含有`items`属性

## 补充

- 大佬翻译的中文地址 https://process1024.github.io/vitepress/
- vite 侧边导航自动生成 https://free_pan.gitee.io/freepan-blog/articles/06-%E6%9D%82%E9%A1%B9%E4%B8%8E%E6%84%9F%E8%A7%A6/%E6%9D%82%E9%A1%B9%E4%B8%8E%E6%84%9F%E8%A7%A6/vitepress%E4%BD%BF%E7%94%A8.html#%E4%BE%A7%E8%BE%B9%E5%AF%BC%E8%88%AA
