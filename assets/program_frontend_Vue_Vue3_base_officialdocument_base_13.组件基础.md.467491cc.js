import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const m=JSON.parse('{"title":"组件基础","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/base/officialdocument/base/13.组件基础.md","filePath":"program/frontend/Vue/Vue3/base/officialdocument/base/13.组件基础.md","lastUpdated":1695205095000}'),p={name:"program/frontend/Vue/Vue3/base/officialdocument/base/13.组件基础.md"},e=l(`<h1 id="组件基础" tabindex="-1">组件基础 <a class="header-anchor" href="#组件基础" aria-label="Permalink to &quot;组件基础&quot;">​</a></h1><p>组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。</p><p>在实际应用中，组件常常被组织成层层嵌套的树状结构。</p><h2 id="定义一个组件" tabindex="-1">定义一个组件 <a class="header-anchor" href="#定义一个组件" aria-label="Permalink to &quot;定义一个组件&quot;">​</a></h2><p>定义一个 Vue 组件有两种方式：使用构建步骤和不适用构建步骤</p><p>使用构建步骤时，会将 Vue 组件定义在一个.vue 文件中，称为单文件组件 SFC。</p><p>每一个 *.vue 文件都由三种顶层语言块构成：<code>&lt;template&gt;、&lt;script&gt; 和 &lt;style&gt;</code>，以及一些其他的自定义块。</p><p>不适用构建步骤时，一个 Vue 组件以一个包含 Vue 特定选项的 JavaScript 对象来定义：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { count }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  template: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;button @click=&quot;count++&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">      You clicked me {{ count }} times.</span></span>
<span class="line"><span style="color:#9ECBFF;">    &lt;/button&gt;\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 也可以针对一个 DOM 内联模板：</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// template: &#39;#my-template-element&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { count }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  template: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">    &lt;button @click=&quot;count++&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">      You clicked me {{ count }} times.</span></span>
<span class="line"><span style="color:#032F62;">    &lt;/button&gt;\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 也可以针对一个 DOM 内联模板：</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// template: &#39;#my-template-element&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9),o=[e];function t(c,r,E,y,i,u){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{m as __pageData,_ as default};
