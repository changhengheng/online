import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.19358895.js";const _=JSON.parse('{"title":"构造函数","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/JavaScript/构造函数.md","filePath":"program/frontend/JavaScript/构造函数.md","lastUpdated":1694688801000}'),l={name:"program/frontend/JavaScript/构造函数.md"},o=p(`<h1 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h1><p>花里胡哨的写法：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getStyleLoader</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">pre</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          plugins: [</span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    pre,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ].</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean); </span><span style="color:#6A737D;">// 这个Boolean是Boolean构造函数，省略了括号调用和new操作符，还返回的是布尔值</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getStyleLoader</span><span style="color:#24292E;">(</span><span style="color:#E36209;">pre</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      options: {</span></span>
<span class="line"><span style="color:#24292E;">        postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">          plugins: [</span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    pre,</span></span>
<span class="line"><span style="color:#24292E;">  ].</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(Boolean); </span><span style="color:#6A737D;">// 这个Boolean是Boolean构造函数，省略了括号调用和new操作符，还返回的是布尔值</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,i,y,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{_ as __pageData,h as default};
