import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"CodeSplit统一命名","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/43.CodeSplit统一命名.md","filePath":"program/frontend/webpack/chapter2/43.CodeSplit统一命名.md","lastUpdated":1694563493000}'),p={name:"program/frontend/webpack/chapter2/43.CodeSplit统一命名.md"},o=l(`<h1 id="codesplit统一命名" tabindex="-1">CodeSplit统一命名 <a class="header-anchor" href="#codesplit统一命名" aria-label="Permalink to &quot;CodeSplit统一命名&quot;">​</a></h1><p>很多地方进行输出文件的命名，比如：入口文件的命名output.filename、动态加载或node_modules的被打包成的chunk的命名output.chunkFilename、图片loader的命名规则、字体等资源loader的命名规则、打包样式的命名规则等等，可以制定一个统一的命名规范</p><ol><li><p>配置</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 单入口文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../dist&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 生产模式需要输出</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;static/js/[name].js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 多入口文件打包输出资源命名方式</span></span>
<span class="line"><span style="color:#E1E4E8;">        chunkFilename: </span><span style="color:#9ECBFF;">&quot;static/js/[name].chunk.js&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// chunk（包括动态导入输出资源、使用到的node_modules的代码等等）命名方式，这里的name取的就是webpack魔法命名的值，添加chunk后缀区分chunk文件和主文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        assetModuleFilename: </span><span style="color:#9ECBFF;">&quot;static/media/[name].[hash][ext]&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 统一对其他资源进行处理：图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span style="color:#E1E4E8;">        clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">            oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   filename: &quot;static/imgs/[hash:8][ext][query]&quot;, // 这里不用再重新各自定义，直接定义在output.assetModuleFilename里，进行复用</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">//   filename: &quot;static/media/[hash:8][ext][query]&quot;, // 这里不用再重新各自定义，直接定义在output.assetModuleFilename里，进行复用</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 提取css成单独文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&quot;static/css/[name].css&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 多入口打包可能会形成多个css，这里统一对css进行命名</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunkFilename: </span><span style="color:#9ECBFF;">&quot;static/css/[name].chunk.css&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 动态导入js的css会形成chunk，对这些css的chunk进行统一命名</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 单入口文件</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../dist&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 生产模式需要输出</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;static/js/[name].js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 多入口文件打包输出资源命名方式</span></span>
<span class="line"><span style="color:#24292E;">        chunkFilename: </span><span style="color:#032F62;">&quot;static/js/[name].chunk.js&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// chunk（包括动态导入输出资源、使用到的node_modules的代码等等）命名方式，这里的name取的就是webpack魔法命名的值，添加chunk后缀区分chunk文件和主文件</span></span>
<span class="line"><span style="color:#24292E;">        assetModuleFilename: </span><span style="color:#032F62;">&quot;static/media/[name].[hash][ext]&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 统一对其他资源进行处理：图片、字体等资源命名方式（注意用hash）</span></span>
<span class="line"><span style="color:#24292E;">        clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [{</span></span>
<span class="line"><span style="color:#24292E;">            oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpe</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    type: </span><span style="color:#032F62;">&quot;asset&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    parser: {</span></span>
<span class="line"><span style="color:#24292E;">                        dataUrlCondition: {</span></span>
<span class="line"><span style="color:#24292E;">                            maxSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// generator: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   // 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   // 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   // [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   // [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   // [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   filename: &quot;static/imgs/[hash:8][ext][query]&quot;, // 这里不用再重新各自定义，直接定义在output.assetModuleFilename里，进行复用</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(ttf</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">woff2</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    type: </span><span style="color:#032F62;">&quot;asset/resource&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// generator: {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">//   filename: &quot;static/media/[hash:8][ext][query]&quot;, // 这里不用再重新各自定义，直接定义在output.assetModuleFilename里，进行复用</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        }, ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 提取css成单独文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#24292E;">            filename: </span><span style="color:#032F62;">&quot;static/css/[name].css&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 多入口打包可能会形成多个css，这里统一对css进行命名</span></span>
<span class="line"><span style="color:#24292E;">            chunkFilename: </span><span style="color:#032F62;">&quot;static/css/[name].chunk.css&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 动态导入js的css会形成chunk，对这些css的chunk进行统一命名</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>运行指令</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx webpack</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx webpack</span></span></code></pre></div></li><li><p>观察打包输出 js 文件名称。</p></li></ol><blockquote><p>开发和生产都可以做</p></blockquote>`,4),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{D as __pageData,d as default};
