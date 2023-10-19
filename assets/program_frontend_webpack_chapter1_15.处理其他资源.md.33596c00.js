import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19358895.js";const F=JSON.parse('{"title":"处理其他资源","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/15.处理其他资源.md","filePath":"program/frontend/webpack/chapter1/15.处理其他资源.md","lastUpdated":1694391214000}'),l={name:"program/frontend/webpack/chapter1/15.处理其他资源.md"},o=p(`<h1 id="处理其他资源" tabindex="-1">处理其他资源 <a class="header-anchor" href="#处理其他资源" aria-label="Permalink to &quot;处理其他资源&quot;">​</a></h1><p>开发中可能还存在一些其他资源，如音视频、excel等，我们也一起处理了</p><blockquote><p>让webpack原封不动地输出即可</p></blockquote><h2 id="_1-配置" tabindex="-1">1. 配置 <a class="header-anchor" href="#_1-配置" aria-label="Permalink to &quot;1. 配置&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">        clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动将上次打包目录资源清空</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?|</span><span style="color:#DBEDFF;">mp4</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">mp3</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">avi)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;development&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;static/js/main.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#24292E;">        clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 自动将上次打包目录资源清空</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(ttf</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">woff2</span><span style="color:#D73A49;">?|</span><span style="color:#032F62;">mp4</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">mp3</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">avi)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&quot;asset/resource&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                generator: {</span></span>
<span class="line"><span style="color:#24292E;">                    filename: </span><span style="color:#032F62;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [],</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;development&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>就是在处理字体图标资源基础上增加其他文件类型，统一处理即可</p><h2 id="_2-运行指令" tabindex="-1">2. 运行指令 <a class="header-anchor" href="#_2-运行指令" aria-label="Permalink to &quot;2. 运行指令&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx webpack</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx webpack</span></span></code></pre></div><p>打开 index.html 页面查看效果</p>`,9),e=[o];function t(c,r,E,y,i,u){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{F as __pageData,h as default};
