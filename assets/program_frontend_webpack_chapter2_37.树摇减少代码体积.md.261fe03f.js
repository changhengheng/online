import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.419948d5.js";const u=JSON.parse('{"title":"树摇（Tree Shaking）减少代码体积","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/37.树摇减少代码体积.md","filePath":"program/frontend/webpack/chapter2/37.树摇减少代码体积.md","lastUpdated":1694563493000}'),r={name:"program/frontend/webpack/chapter2/37.树摇减少代码体积.md"},c=o('<h1 id="树摇-tree-shaking-减少代码体积" tabindex="-1">树摇（Tree Shaking）减少代码体积 <a class="header-anchor" href="#树摇-tree-shaking-减少代码体积" aria-label="Permalink to &quot;树摇（Tree Shaking）减少代码体积&quot;">​</a></h1><h3 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h3><p>开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。</p><p>如果没有特殊处理的话我们打包时会引入整个库，但是实际上可能我们可能只用上极小部分的功能。</p><p>这样将整个库都打包进来，体积就太大了。</p><blockquote><p>我们希望是打包时只打包我们用到的代码，这样体积就少很多</p></blockquote><h3 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h3><p><code>Tree Shaking</code> 是一个术语，通常用于描述移除 JavaScript 中的没有使用上的代码。</p><p><strong>注意：它依赖 <code>ES Module</code>。</strong></p><blockquote><p>如果是CommonJS就没办法做树摇了</p></blockquote><h3 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h3><p>Webpack 已经默认开启了这个功能，无需其他配置。</p><blockquote><p>开发、生产都可用，生产环境下默认启动，开发环境下需要做配置</p></blockquote>',13),n=[c];function p(_,i,d,h,s,l){return a(),t("div",null,n)}const b=e(r,[["render",p]]);export{u as __pageData,b as default};
