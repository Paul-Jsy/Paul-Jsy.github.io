import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/tutorials/computer-organization/": [
    {
      text: "课程导览",
      icon: "compass",
      children: ["", "overview.md"],
    },
    {
      text: "基础与衔接",
      icon: "layer-group",
      prefix: "foundations/",
      collapsible: true,
      children: ["platform.md", "vivado.md", "rtl-verilog.md"],
    },
    {
      text: "ALU 实验",
      icon: "calculator",
      prefix: "alu/",
      collapsible: true,
      children: ["design.md", "solution.md"],
    },
    {
      text: "寄存器与主存",
      icon: "memory",
      prefix: "memory/",
      collapsible: true,
      children: ["register.md", "ram.md", "register-solution.md"],
    },
  ],
  "/tutorials/": "structure",
  "/articles/": "structure",
  "/projects/": "structure",
  "/notes/": "structure",
  "/": false,
});
