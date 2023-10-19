import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"Babel","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/38.减少babel生成文件的体积.md","filePath":"program/frontend/webpack/chapter2/38.减少babel生成文件的体积.md","lastUpdated":1694563493000}'),p={name:"program/frontend/webpack/chapter2/38.减少babel生成文件的体积.md"},o=l(`<h1 id="babel" tabindex="-1">Babel <a class="header-anchor" href="#babel" aria-label="Permalink to &quot;Babel&quot;">​</a></h1><h2 id="为什么" tabindex="-1">为什么 <a class="header-anchor" href="#为什么" aria-label="Permalink to &quot;为什么&quot;">​</a></h2><p>Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！</p><p>Babel 对一些公共方法使用了非常小的辅助代码，比如 <code>_extend</code>。默认情况下会被添加到每一个需要它的文件中。如果有10个文件，10个文件都用上了它，这个辅助代码就会被定义10次。整个体积就会变得更大。</p><p>你可以将这些辅助代码作为一个独立模块，谁用谁引入，来避免重复引入，让打包体积变小。</p><h2 id="是什么" tabindex="-1">是什么 <a class="header-anchor" href="#是什么" aria-label="Permalink to &quot;是什么&quot;">​</a></h2><p><code>@babel/plugin-transform-runtime</code>: 禁用了 Babel 自动对每个文件的辅助代码 runtime 注入，而是引入 <code>@babel/plugin-transform-runtime</code> （babel自己定义的辅助代码）并且使所有辅助代码从这里引用，体积就会更小。</p><h2 id="怎么用" tabindex="-1">怎么用 <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用&quot;">​</a></h2><ol><li>下载包</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i @babel/plugin-transform-runtime -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i @babel/plugin-transform-runtime -D</span></span></code></pre></div><ol start="2"><li>配置</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        oneOf: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">            include: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#E1E4E8;">            use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              {</span></span>
<span class="line"><span style="color:#E1E4E8;">                loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                  cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">                  cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">                  plugins: [</span><span style="color:#9ECBFF;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ESLintWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      context: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      exclude: </span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">      cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheLocation: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        __dirname,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ),</span></span>
<span class="line"><span style="color:#E1E4E8;">      threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CssMinimizerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        parallel: threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: </span><span style="color:#9ECBFF;">&quot;source-map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        oneOf: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#24292E;">            include: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#24292E;">            use: [</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                loader: </span><span style="color:#032F62;">&quot;thread-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">                options: {</span></span>
<span class="line"><span style="color:#24292E;">                  workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              {</span></span>
<span class="line"><span style="color:#24292E;">                loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                options: {</span></span>
<span class="line"><span style="color:#24292E;">                  cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#24292E;">                  cacheCompression: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#24292E;">                  plugins: [</span><span style="color:#032F62;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ESLintWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#24292E;">      context: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      exclude: </span><span style="color:#032F62;">&quot;node_modules&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#24292E;">      cache: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启缓存</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#24292E;">      cacheLocation: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        __dirname,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#24292E;">      ),</span></span>
<span class="line"><span style="color:#24292E;">      threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  optimization: {</span></span>
<span class="line"><span style="color:#24292E;">    minimizer: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CssMinimizerPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        parallel: threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// devServer: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&quot;production&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  devtool: </span><span style="color:#032F62;">&quot;source-map&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>开发模式和生产模式都可以配置</p></blockquote>`,13),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{h as __pageData,F as default};
