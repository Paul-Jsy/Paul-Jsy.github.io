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
