import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "ChatGPT 中文调教指南",
  description: "这是我的第一个 VuePress 站点",
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
