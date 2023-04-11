import { defineUserConfig, defaultTheme } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AIBaseTool ChatGPT 中文使用指南",
  description: "这里是由 AIBaseTool 开发的 ChatGPT 中文使用指南",
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: "官网",
        link: "https://aibasetool.com/",
      },
    ],
    // Public 文件路径
    // // URL
    // logo: "https://vuejs.org/images/logo.png",
  }),
  // bundler: viteBundler({
  //   viteOptions: {},
  //   vuePluginOptions: {},
  // }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
});
