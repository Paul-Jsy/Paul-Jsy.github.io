# Paul 的技术笔记

这是 [paul-jsy.github.io](https://paul-jsy.github.io) 的源码仓库，使用 VuePress 2 与 VuePress Theme Hope 构建。

## 本地开发

需要 Node.js 22.18 或更高的 22.x 版本。

```bash
npm ci
npm run docs:dev
```

生产构建：

```bash
npm run docs:build
```

站点内容位于 `src/`：

- `src/tutorials/`：系列教程
- `src/articles/`：独立文章
- `src/projects/`：项目记录
- `src/notes/`：学习笔记
- `src/about/`：个人介绍

推送到 `main` 或 `master` 后，GitHub Actions 会自动构建站点，并把渲染结果发布到 `gh-pages` 分支。

## 启用评论

文章评论使用 Giscus，未配置时不会在页面显示。首次启用需要：

1. 在仓库 Settings → General → Features 中开启 Discussions。
2. 在 [giscus.app](https://giscus.app/zh-CN) 为本仓库安装 Giscus，并选择一个 Discussion 分类。
3. 在仓库 Settings → Secrets and variables → Actions → Variables 中添加：
   - `GISCUS_CATEGORY`：所选分类名称，例如 `Announcements`。
   - `GISCUS_CATEGORY_ID`：Giscus 页面生成的分类 ID。

重新运行部署工作流后，评论区会自动出现在普通文章下；首页、教程和关于页不显示评论。
