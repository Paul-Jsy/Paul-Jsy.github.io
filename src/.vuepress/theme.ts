import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/zh.js";
import { zhSidebar } from "./sidebar/zh.js";

export default hopeTheme({
  hostname: "https://paul-jsy.github.io",
  author: {
    name: "Paul",
    url: "/about/",
  },
  logo: "/logo.svg",
  repo: "Paul-Jsy/Paul-Jsy.github.io",
  docsDir: "src",
  navbar: zhNavbar,
  sidebar: zhSidebar,
  footer: "持续学习，持续记录。",
  displayFooter: true,
  editLink: true,
  lastUpdated: true,
  contributors: true,
  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    name: "Paul",
    medias: {
      GitHub: "https://github.com/Paul-Jsy",
    },
    articleInfo: ["Date", "Category", "Tag", "ReadingTime"],
  },
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    math: {
      type: "katex",
    },
  },
  plugins: {
    blog: {
      excerpt: true,
    },
    copyCode: true,
    comment: process.env.GISCUS_CATEGORY_ID
      ? {
          provider: "Giscus",
          repo: "Paul-Jsy/Paul-Jsy.github.io",
          repoId: "R_kgDOLIZPfw",
          category: process.env.GISCUS_CATEGORY || "Announcements",
          categoryId: process.env.GISCUS_CATEGORY_ID,
          mapping: "pathname",
          inputPosition: "top",
          lazyLoading: true,
          reactionsEnabled: true,
        }
      : false,
    copyright: {
      canonical: "https://paul-jsy.github.io",
      license: "CC BY-NC-SA 4.0",
    },
    icon: {
      assets: "fontawesome-with-brands",
      offline: true,
    },
    photoSwipe: true,
    pwa: {
      showInstall: true,
      cacheHTML: true,
      cacheImage: true,
      update: "hint",
      favicon: "/logo.svg",
      manifest: {
        name: "Paul 的技术笔记",
        short_name: "Paul's Notes",
        description: "记录计算机系统、工程实践与个人项目。",
        lang: "zh-CN",
        display: "standalone",
        start_url: "/",
        scope: "/",
        theme_color: "#176b87",
        background_color: "#f7fafc",
        icons: [
          {
            src: "/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    },
    sitemap: true,
    slimsearch: {
      indexContent: true,
      suggestion: true,
    },
  },
});
