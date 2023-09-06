/*
 * @Author: 智慧之泉 113066630@qq.com
 * @Date: 2023-09-06 14:17:10
 * @LastEditors: 智慧之泉 113066630@qq.com
 * @LastEditTime: 2023-09-06 16:27:44
 * @FilePath: \myBlog\docs\.vitepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import nav from "./nav";
export default {
  // site-level options
  title: "VitePress",
  description: "Just playing around.",

  themeConfig: {
    // theme-level options
    nav,
  },
  lastUpdated: true,
};
