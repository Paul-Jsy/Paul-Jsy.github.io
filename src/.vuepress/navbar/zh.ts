import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "首页", icon: "house", link: "/" },
  {
    text: "教程专区",
    icon: "book-open",
    children: [
      { text: "教程总览", link: "/tutorials/" },
      { text: "计算机组成原理实验", link: "/tutorials/computer-organization/" },
    ],
  },
  { text: "文章", icon: "pen-to-square", link: "/article/" },
  { text: "项目", icon: "code", link: "/projects/" },
  { text: "笔记", icon: "note-sticky", link: "/notes/" },
  { text: "关于", icon: "user", link: "/about/" },
]);
