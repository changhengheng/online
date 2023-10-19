import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const _=JSON.parse('{"title":"setup 测试","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Vue/Vue3/1.组合API/1.setup测试.md","filePath":"program/frontend/Vue/Vue3/1.组合API/1.setup测试.md","lastUpdated":1694412824000}'),l={name:"program/frontend/Vue/Vue3/1.组合API/1.setup测试.md"},e=p(`<h1 id="setup-测试" tabindex="-1">setup 测试 <a class="header-anchor" href="#setup-测试" aria-label="Permalink to &quot;setup 测试&quot;">​</a></h1><p>新的 option（配置项）</p><ul><li>所有的组合 API 函数都在此使用</li><li>只在程序初始化时执行一次</li><li>setup 函数如果返回对象, 对象中的属性或方法在模板中可以直接使用</li><li>setup 函数可以直接作为配置项使用，不需要引入</li></ul><p>测试代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 暴露出来的num可以直接在模板中使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;{{num}}&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;App&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 初始化的时候setup执行了一次</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.log (</span><span style="color:#9ECBFF;">&quot;hhh&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    const num = 10</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 把num通过setup暴露给模板使用</span></span>
<span class="line"><span style="color:#E1E4E8;">      num</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 暴露出来的num可以直接在模板中使用</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;{{num}}&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;App&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 初始化的时候setup执行了一次</span></span>
<span class="line"><span style="color:#24292E;">    console.log (</span><span style="color:#032F62;">&quot;hhh&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    const num = 10</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 把num通过setup暴露给模板使用</span></span>
<span class="line"><span style="color:#24292E;">      num</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span></code></pre></div>`,5),o=[e];function t(c,r,E,i,y,u){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{_ as __pageData,m as default};
