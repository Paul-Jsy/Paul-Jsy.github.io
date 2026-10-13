import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Paul 的技术笔记",
  description: "记录计算机系统、工程实践与个人项目。",
  base: "/",
  shouldPrefetch: false,
  bundler: viteBundler({
    viteOptions: {
      ssr: {
        noExternal: ["@vuepress/search-helper"],
      },
    },
  }),
  theme,
  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    ["meta", { name: "theme-color", content: "#176b87" }],
    ["meta", { name: "referrer", content: "strict-origin-when-cross-origin" }],
  ],
});
