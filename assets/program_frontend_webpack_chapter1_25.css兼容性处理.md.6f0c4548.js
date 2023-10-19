import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"css 兼容性处理","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/25.css兼容性处理.md","filePath":"program/frontend/webpack/chapter1/25.css兼容性处理.md","lastUpdated":1694391214000}'),p={name:"program/frontend/webpack/chapter1/25.css兼容性处理.md"},o=l(`<h1 id="css-兼容性处理" tabindex="-1">css 兼容性处理 <a class="header-anchor" href="#css-兼容性处理" aria-label="Permalink to &quot;css 兼容性处理&quot;">​</a></h1><p>css 也有兼容性问题，处理 css 兼容性问题使用 postcss-loader，postcss-loader 依赖于 postcss，postcss 需要使用智能预设 postcss-preset-env 解决兼容性问题</p><ol><li><p>下载包</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i postcss-loader postcss postcss-preset-env -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i postcss-loader postcss postcss-preset-env -D</span></span></code></pre></div></li><li><p>配置 <code>webpack.prod.js</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../dist&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 生产模式需要输出</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">        clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;css-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        loader: </span><span style="color:#9ECBFF;">&quot;postcss-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                        options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#9ECBFF;">&quot;postcss-preset-env&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#E1E4E8;">                                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
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
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../dist&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 生产模式需要输出</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;static/js/main.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#24292E;">        clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#24292E;">                use: [</span></span>
<span class="line"><span style="color:#24292E;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        options: {</span></span>
<span class="line"><span style="color:#24292E;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                                plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [</span></span>
<span class="line"><span style="color:#24292E;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        options: {</span></span>
<span class="line"><span style="color:#24292E;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                                plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;less-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">s</span><span style="color:#005CC5;">[ac]</span><span style="color:#032F62;">ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [</span></span>
<span class="line"><span style="color:#24292E;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        options: {</span></span>
<span class="line"><span style="color:#24292E;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                                plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;sass-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">styl</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                use: [</span></span>
<span class="line"><span style="color:#24292E;">                    MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;css-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        loader: </span><span style="color:#032F62;">&quot;postcss-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                        options: {</span></span>
<span class="line"><span style="color:#24292E;">                            postcssOptions: {</span></span>
<span class="line"><span style="color:#24292E;">                                plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#032F62;">&quot;postcss-preset-env&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 能解决大多数样式兼容性问题</span></span>
<span class="line"><span style="color:#24292E;">                                ],</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#032F62;">&quot;stylus-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
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
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>postcss-loader 需要配到css-loader的后面，less-loader、sass-loader、stylus-loader的前面（跟执行顺序有关，loader的执行顺序是从右往左，从下往上） loader如果只是简单使用，直接写名字就可以；如果需要写配置项，就需要写成对象形式</p></blockquote></li><li><p>控制兼容性 我们可以在 <code>package.json</code> 文件中添加 <code>browserslist</code> 来控制样式的兼容性做到什么程度。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 其他省略</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;browserslist&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;ie&gt;= 8&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 兼容到IE8</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 其他省略</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;browserslist&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;ie&gt;= 8&quot;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 兼容到IE8</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>想要知道更多的 <code>browserslist</code> 配置，查看 <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">browserslist文档</a></p><p>以上为了测试兼容性所以设置兼容浏览器 ie8 以上。</p><p>实际开发中我们一般不考虑旧版本浏览器了，所以我们可以这样设置：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">// 其他省略</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;browserslist&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;last 2 version&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&gt; 1%&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;not dead&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">// 其他省略</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;browserslist&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;last 2 version&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&gt; 1%&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;not dead&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>last 2 version：兼容所有浏览器的最近两个版本</p><blockquote><p>1%：覆盖99%的热门浏览器。冷门的就不要了 not dead：还存活的浏览器 这三个配置项取的是交集</p></blockquote></blockquote></li></ol>`,3),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const q=s(p,[["render",c]]);export{d as __pageData,q as default};
