import{_ as e,o as t,c as a,Q as o}from"./chunks/framework.419948d5.js";const b=JSON.parse('{"title":"处理js资源","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/16.处理js资源.md","filePath":"program/frontend/webpack/chapter1/16.处理js资源.md","lastUpdated":1694391214000}'),s={name:"program/frontend/webpack/chapter1/16.处理js资源.md"},r=o('<h1 id="处理js资源" tabindex="-1">处理js资源 <a class="header-anchor" href="#处理js资源" aria-label="Permalink to &quot;处理js资源&quot;">​</a></h1><p>有人可能会问，js 资源 Webpack 不能已经处理了吗，为什么我们还要处理呢？</p><p>原因是 Webpack 对 js 处理是有限的，只能编译 js 中 ES 模块化语法，不能编译其他语法，导致 js 不能在 IE 等浏览器运行，所以我们希望做一些兼容性处理。</p><p>其次开发中，团队对代码格式是有严格要求的，我们不能由肉眼去检测代码格式，需要使用专业的工具来检测。</p><ul><li>针对 js 兼容性处理，我们使用 Babel 来完成</li><li>针对代码格式，我们使用 Eslint 来完成</li></ul><blockquote><p>代码的健壮性</p></blockquote><p>我们先完成 Eslint，检测代码格式无误后，再由 Babel 做代码兼容性处理</p><blockquote><p>两个原因：1. 语法检查；2. 代码规范</p></blockquote>',8),p=[r];function c(_,n,l,i,d,h){return t(),a("div",null,p)}const m=e(s,[["render",c]]);export{b as __pageData,m as default};
