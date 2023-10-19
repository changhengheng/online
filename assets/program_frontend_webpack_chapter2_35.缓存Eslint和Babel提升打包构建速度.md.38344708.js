import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"缓存 Eslint 和 Babel 提升打包构建速度","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/35.缓存Eslint和Babel提升打包构建速度.md","filePath":"program/frontend/webpack/chapter2/35.缓存Eslint和Babel提升打包构建速度.md","lastUpdated":1694391214000}'),p={name:"program/frontend/webpack/chapter2/35.缓存Eslint和Babel提升打包构建速度.md"},o=l(`<h1 id="缓存-eslint-和-babel-提升打包构建速度" tabindex="-1">缓存 Eslint 和 Babel 提升打包构建速度 <a class="header-anchor" href="#缓存-eslint-和-babel-提升打包构建速度" aria-label="Permalink to &quot;缓存 Eslint 和 Babel 提升打包构建速度&quot;">​</a></h1><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><p>每次打包时 js 文件都要经过 Eslint 检查和 Babel 编译，速度比较慢。</p><p>我们可以缓存之前的 Eslint 检查和 Babel 编译结果，这样第二次打包时只会针对重新修改的文件进行 Eslint 检查和 Babel 编译，之前打包过的文件会使用缓存，处理速度就会更快了。</p><blockquote><p>开发时，js 文件占比是最大的，如果每次打包都要通过 Eslint 检查和 Babel 编译，webpack 处理速度就会比较慢。而 webpack 处理样式和 html 是比较快的。同理，实际进行项目优化时，基本上都是对处理 js 文件做优化——这个道理适用于大多数的优化配置。 缓存优化的是第一次打包之后的打包速度，第一次没有缓存，仍然需要整体打包</p></blockquote><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p>对 Eslint 检查 和 Babel 编译结果进行缓存。</p><h2 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ESLintWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;static/js/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// clean: true, // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除 node_modules 代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">                    include: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#E1E4E8;">                    loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启 babel 编译缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">                        cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ESLintWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            context: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            exclude: </span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">            cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启Eslint缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheLocation: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                __dirname,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 新的 html 文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的 js 等资源</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 开发服务器</span></span>
<span class="line"><span style="color:#E1E4E8;">    devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        host: </span><span style="color:#9ECBFF;">&quot;localhost&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启动服务器域名</span></span>
<span class="line"><span style="color:#E1E4E8;">        port: </span><span style="color:#9ECBFF;">&quot;3000&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 启动服务器端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">        open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">        hot: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启 HMR 功能</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;development&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    devtool: </span><span style="color:#9ECBFF;">&quot;cheap-module-source-map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ESLintWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;html-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开发模式没有输出，不需要指定输出目录</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;static/js/main.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将 js 文件输出到 static/js 目录中</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// clean: true, // 开发模式没有输出，不需要清空输出结果</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [{</span></span>
<span class="line"><span style="color:#24292E;">            oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除 node_modules 代码不编译</span></span>
<span class="line"><span style="color:#24292E;">                    include: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#24292E;">                    loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    options: {</span></span>
<span class="line"><span style="color:#24292E;">                        cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启 babel 编译缓存</span></span>
<span class="line"><span style="color:#24292E;">                        cacheCompression: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        }, ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ESLintWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#24292E;">            context: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            exclude: </span><span style="color:#032F62;">&quot;node_modules&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#24292E;">            cache: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启Eslint缓存</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#24292E;">            cacheLocation: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                __dirname,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#24292E;">            ),</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 新的 html 文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的 js 等资源</span></span>
<span class="line"><span style="color:#24292E;">            template: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../public/index.html&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开发服务器</span></span>
<span class="line"><span style="color:#24292E;">    devServer: {</span></span>
<span class="line"><span style="color:#24292E;">        host: </span><span style="color:#032F62;">&quot;localhost&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 启动服务器域名</span></span>
<span class="line"><span style="color:#24292E;">        port: </span><span style="color:#032F62;">&quot;3000&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 启动服务器端口号</span></span>
<span class="line"><span style="color:#24292E;">        open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">        hot: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启 HMR 功能</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;development&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    devtool: </span><span style="color:#032F62;">&quot;cheap-module-source-map&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>关闭缓存的压缩，生成缓存文件如果进行压缩，速度就比较慢，因为压缩需要时间；为了极致的速度，缓存文件就不需要压缩，因为最终代码上线时根本用不上缓存文件，它的体积大或者小占用的是电脑的内存</p></blockquote>`,10),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
