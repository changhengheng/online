import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const F=JSON.parse('{"title":"多进程打包提升打包构建速度","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/36.多进程打包提升打包构建速度.md","filePath":"program/frontend/webpack/chapter2/36.多进程打包提升打包构建速度.md","lastUpdated":1694391214000}'),p={name:"program/frontend/webpack/chapter2/36.多进程打包提升打包构建速度.md"},o=l(`<h1 id="多进程打包提升打包构建速度" tabindex="-1">多进程打包提升打包构建速度 <a class="header-anchor" href="#多进程打包提升打包构建速度" aria-label="Permalink to &quot;多进程打包提升打包构建速度&quot;">​</a></h1><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><p>当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码。这个速度是比较慢的。</p><p>我们想要继续提升打包速度，其实就是要提升 js 的打包速度，因为其他文件都比较少。</p><p>而<strong>对 js 文件处理主要就是 eslint 、babel、Terser 三个工具</strong>，所以我们要提升它们的运行速度。</p><p>我们可以开启多进程同时处理 js 文件，这样速度就比之前的单进程打包更快了。</p><blockquote><p>Terser 你可能没听过，但是我们一直在用。之前说过，webpack会自动压缩js代码，就是Terser在做。只要是配置了生产模式，Terser就会自动激活。</p></blockquote><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p>多进程打包：开启电脑的多个进程同时干一件事，速度更快。</p><p><strong>需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。</strong></p><h2 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h2><p>我们启动进程的数量就是我们 CPU 的核数。</p><ol><li><p>如何获取 CPU 的核数，因为每个电脑都不一样。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">os</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">threads</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// nodejs核心模块，直接使用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">os</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;os&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">threads</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.</span><span style="color:#6F42C1;">cpus</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span></code></pre></div><blockquote><p>启动CPU的数量就是CPU的核数，超过核数的事它是做不了的，所以需要获取CPU核数</p></blockquote></li><li><p>下载包</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i thread-loader -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i thread-loader -D</span></span></code></pre></div></li><li><p>使用</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">os</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CssMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 这个插件不需要下载，因为webpack已经内置了，所以我们直接引入去用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">threads</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">                    include: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                works: threads, </span><span style="color:#6A737D;">// 进程数量</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">                                cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 开启Terser多线程，也可以放到optimization.minimizer里面</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new TerserPlugin({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//     parallel: threads // 开启多进程和设置进程数量</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimizer: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CssMinimizerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 压缩js</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                parallel: threads </span><span style="color:#6A737D;">// 开启多进程和设置进程数量</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">os</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;os&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CssMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 这个插件不需要下载，因为webpack已经内置了，所以我们直接引入去用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;terser-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">threads</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.</span><span style="color:#6F42C1;">cpus</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#24292E;">                    include: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#24292E;">                    use: [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&quot;thread-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                works: threads, </span><span style="color:#6A737D;">// 进程数量</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#24292E;">                                cacheCompression: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 开启Terser多线程，也可以放到optimization.minimizer里面</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new TerserPlugin({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//     parallel: threads // 开启多进程和设置进程数量</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    optimization: {</span></span>
<span class="line"><span style="color:#24292E;">        minimize: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        minimizer: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CssMinimizerPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 压缩js</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                parallel: threads </span><span style="color:#6A737D;">// 开启多进程和设置进程数量</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>thread-loader 要放在我们要处理的loader的前面，此时，就不能使用loader配置项了，要使用use 压缩css和压缩js可以放到optimization.minimizer里，也可以放到插件里，webpack5一般放optimization.minimizer里 我们目前打包的内容都很少，所以因为启动进程开销原因，使用多进程打包实际上会显著的让我们打包时间变得很长。</p></blockquote></li></ol><blockquote><p>开发模式同理</p></blockquote>`,14),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{F as __pageData,h as default};
