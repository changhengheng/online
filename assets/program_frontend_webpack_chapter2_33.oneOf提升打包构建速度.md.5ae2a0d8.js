import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.19358895.js";const h=JSON.parse('{"title":"oneOf提升打包构建速度","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/33.oneOf提升打包构建速度.md","filePath":"program/frontend/webpack/chapter2/33.oneOf提升打包构建速度.md","lastUpdated":1694391214000}'),p={name:"program/frontend/webpack/chapter2/33.oneOf提升打包构建速度.md"},o=l(`<h1 id="oneof提升打包构建速度" tabindex="-1">oneOf提升打包构建速度 <a class="header-anchor" href="#oneof提升打包构建速度" aria-label="Permalink to &quot;oneOf提升打包构建速度&quot;">​</a></h1><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><p>打包时每个文件都会经过所有 loader 处理，虽然因为 <code>test</code> 正则原因实际没有处理上，但是都要过一遍。比较慢。</p><blockquote><p>默认情况下，webpack处理某一类型的文件时，会遍历按照loader定义的顺序逐个尝试使用每一个loader进行处理，这样效率比较低；我们希望的情况是，找到能够正确处理某一类型的文件的loader时，停止遍历，oneOf就是用来做这个事的；</p></blockquote><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p>顾名思义就是只能匹配上一个 loader, 剩下的就不匹配了。</p><h2 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span><span style="color:#9ECBFF;">&quot;style-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#24292E;">            use: [</span><span style="color:#032F62;">&quot;style-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>把所有的loader的配置项，放到oneOf配置项中即可；开发环境和生产环境都可用；</p></blockquote><p>生产模式也是如此配置。</p>`,10),e=[o];function c(t,r,E,i,y,d){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{h as __pageData,_ as default};
