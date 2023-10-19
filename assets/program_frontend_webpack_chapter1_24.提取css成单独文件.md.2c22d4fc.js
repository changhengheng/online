import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const F=JSON.parse('{"title":"提取 css 成单独文件","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/24.提取css成单独文件.md","filePath":"program/frontend/webpack/chapter1/24.提取css成单独文件.md","lastUpdated":1694391214000}'),p={name:"program/frontend/webpack/chapter1/24.提取css成单独文件.md"},o=l(`<h1 id="提取-css-成单独文件" tabindex="-1">提取 css 成单独文件 <a class="header-anchor" href="#提取-css-成单独文件" aria-label="Permalink to &quot;提取 css 成单独文件&quot;">​</a></h1><p>Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式</p><p>这样对于网站来说，会出现闪屏现象，用户体验不好</p><p>我们应该是单独的 Css 文件，通过 link 标签加载性能才好</p><blockquote><p>通过link标签加载css样式不会造成闪屏现象 之前配置的html插件会自动引入打包生成的资源（这里引入css使用link标签），包括之前的js和现在的样式</p></blockquote><ol><li><p>下载插件</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i mini-css-extract-plugin -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i mini-css-extract-plugin -D</span></span></code></pre></div></li><li><p>配置 <code>webpack.prod.js</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 引入插件</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">],</span><span style="color:#6A737D;">//这里不能再用style-loader，因为它会动态生成style标签并插入模板文件，而这里我们需要MiniCssExtractPlugin.loader来提取css形成单独的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 提取 css 成单独文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 引入插件</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#24292E;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">],</span><span style="color:#6A737D;">//这里不能再用style-loader，因为它会动态生成style标签并插入模板文件，而这里我们需要MiniCssExtractPlugin.loader来提取css形成单独的文件</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;less-loader&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">s</span><span style="color:#005CC5;">[ac]</span><span style="color:#032F62;">ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;sass-loader&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">styl</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [MiniCssExtractPlugin.loader, </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;stylus-loader&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 提取 css 成单独文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#24292E;">            filename: </span><span style="color:#032F62;">&quot;static/css/main.css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;production&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div></li><li><p>运行指令</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm run build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm run build</span></span></code></pre></div></li></ol>`,6),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const C=s(p,[["render",t]]);export{F as __pageData,C as default};
