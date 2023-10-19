import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"创建 vue3 项目","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/0.起步/2.创建项目.md","filePath":"program/frontend/Vue/Vue3/0.起步/2.创建项目.md","lastUpdated":1694412824000}'),l={name:"program/frontend/Vue/Vue3/0.起步/2.创建项目.md"},p=n(`<h1 id="创建-vue3-项目" tabindex="-1">创建 vue3 项目 <a class="header-anchor" href="#创建-vue3-项目" aria-label="Permalink to &quot;创建 vue3 项目&quot;">​</a></h1><h1 id="_2-创建-vue3-项目" tabindex="-1">2. 创建 vue3 项目 <a class="header-anchor" href="#_2-创建-vue3-项目" aria-label="Permalink to &quot;2. 创建 vue3 项目&quot;">​</a></h1><h2 id="_1-使用-vue-cli-创建" tabindex="-1"><a href="https://24kcs.github.io/vue3_study/chapter3/02_%E5%88%9B%E5%BB%BAvue3%E9%A1%B9%E7%9B%AE.html#_1-%E4%BD%BF%E7%94%A8-vue-cli-%E5%88%9B%E5%BB%BA" target="_blank" rel="noreferrer">#</a>1) 使用 vue-cli 创建 <a class="header-anchor" href="#_1-使用-vue-cli-创建" aria-label="Permalink to &quot;[#](https://24kcs.github.io/vue3_study/chapter3/02_创建vue3项目.html#_1-使用-vue-cli-创建)1) 使用 vue-cli 创建&quot;">​</a></h2><p>文档: <a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create" target="_blank" rel="noreferrer">https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">## 安装或者升级</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vue/cli</span></span>
<span class="line"><span style="color:#6A737D;">## 保证 vue cli 版本在 4.5.0 以上</span></span>
<span class="line"><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--version</span></span>
<span class="line"><span style="color:#6A737D;">## 创建项目</span></span>
<span class="line"><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-project</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">## 安装或者升级</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vue/cli</span></span>
<span class="line"><span style="color:#6A737D;">## 保证 vue cli 版本在 4.5.0 以上</span></span>
<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--version</span></span>
<span class="line"><span style="color:#6A737D;">## 创建项目</span></span>
<span class="line"><span style="color:#6F42C1;">vue</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-project</span></span></code></pre></div><p>然后的步骤</p><ul><li>Please pick a preset - 选择 <strong><em>Manually select features</em></strong></li><li>Check the features needed for your project - 选择上 <strong><em>TypeScript</em></strong> ，特别注意点空格是选择，点回车是下一步</li><li>Choose a version of Vue.js that you want to start the project with - 选择 <strong><em>3.x (Preview)</em></strong></li><li>Use class-style component syntax - 直接回车</li><li>Use Babel alongside TypeScript - 直接回车</li><li>Pick a linter / formatter config - 直接回车</li><li>Use history mode for router? - 直接回车</li><li>Pick a linter / formatter config - 直接回车</li><li>Pick additional lint features - 直接回车</li><li>Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车</li><li>Save this as a preset for future projects? - 直接回车</li></ul><h2 id="_2-使用-vite-创建" tabindex="-1"><a href="https://24kcs.github.io/vue3_study/chapter3/02_%E5%88%9B%E5%BB%BAvue3%E9%A1%B9%E7%9B%AE.html#_2-%E4%BD%BF%E7%94%A8-vite-%E5%88%9B%E5%BB%BA" target="_blank" rel="noreferrer">#</a>2) 使用 vite 创建 <a class="header-anchor" href="#_2-使用-vite-创建" aria-label="Permalink to &quot;[#](https://24kcs.github.io/vue3_study/chapter3/02_创建vue3项目.html#_2-使用-vite-创建)2) 使用 vite 创建&quot;">​</a></h2><ul><li>文档: <a href="https://v3.cn.vuejs.org/guide/installation.html" target="_blank" rel="noreferrer">https://v3.cn.vuejs.org/guide/installation.html</a></li><li>vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，</li><li>它做到了<strong>本地快速开发启动</strong>, 在生产环境下基于 Rollup 打包。 <ul><li>快速的冷启动，不需要等待打包操作；</li><li>即时的热模块更新，替换性能和模块数量的解耦让更新飞起；</li><li>真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。</li></ul></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vite-app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">project-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">project-nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">project-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">project-nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div>`,10),o=[p];function t(r,c,i,y,u,E){return a(),e("div",null,o)}const v=s(l,[["render",t]]);export{d as __pageData,v as default};
