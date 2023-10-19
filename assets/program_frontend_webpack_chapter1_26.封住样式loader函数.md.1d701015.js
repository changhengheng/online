import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const u=JSON.parse('{"title":"封住样式 loader 函数","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/26.封住样式loader函数.md","filePath":"program/frontend/webpack/chapter1/26.封住样式loader函数.md","lastUpdated":1697461241000}'),p={name:"program/frontend/webpack/chapter1/26.封住样式loader函数.md"},o=l(`<h1 id="封住样式-loader-函数" tabindex="-1">封住样式 loader 函数 <a class="header-anchor" href="#封住样式-loader-函数" aria-label="Permalink to &quot;封住样式 loader 函数&quot;">​</a></h1><p>之前配置的 CSS 相关的配置项，有很多重复的，可以定义一个 loader 函数来复用。</p><ol><li><p>合并配置 <code>webpack.prod.js</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取处理样式的 Loaders</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">preProcessor</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        preProcessor,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注意这里的filter写法：filter接受一个函数作为参数，而Boolean是一个构造函数，且不传参时返回false，传参时除特殊情况都返回true</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 另，题外话：构造函数new调用时可以不写括号</span></span>
<span class="line"><span style="color:#E1E4E8;">    ].</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
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
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取处理样式的 Loaders</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">preProcessor</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">                postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        preProcessor,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注意这里的filter写法：filter接受一个函数作为参数，而Boolean是一个构造函数，且不传参时返回false，传参时除特殊情况都返回true</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 另，题外话：构造函数new调用时可以不写括号</span></span>
<span class="line"><span style="color:#24292E;">    ].</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(Boolean);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#24292E;">                use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;less-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">s</span><span style="color:#005CC5;">[ac]</span><span style="color:#032F62;">ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sass-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">styl</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;stylus-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
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
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div></li><li><p>运行指令</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm run build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm run build</span></span></code></pre></div></li></ol>`,3),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const D=s(p,[["render",t]]);export{u as __pageData,D as default};
