import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const q=JSON.parse('{"title":"单入口","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter2/41.单入口优化代码运行性能.md","filePath":"program/frontend/webpack/chapter2/41.单入口优化代码运行性能.md","lastUpdated":1694563493000}'),p={name:"program/frontend/webpack/chapter2/41.单入口优化代码运行性能.md"},o=l(`<h1 id="单入口" tabindex="-1">单入口 <a class="header-anchor" href="#单入口" aria-label="Permalink to &quot;单入口&quot;">​</a></h1><p>开发时我们可能是单页面应用（SPA），只有一个入口（单入口）。那么我们需要这样配置：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 单入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 多入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   main: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   app: &quot;./src/app.js&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;./dist&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [name]是webpack命名规则，使用chunk的name作为输出的文件名。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 什么是chunk？打包的资源就是chunk，输出出去叫bundle。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// chunk的name是啥呢？ 比如： entry中xxx: &quot;./src/xxx.js&quot;, name就是xxx。注意是前面的xxx，和文件名无关。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;js/[name].js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: </span><span style="color:#9ECBFF;">&quot;./public/index.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 代码分割配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: </span><span style="color:#9ECBFF;">&quot;all&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 对所有模块都进行分割</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 以下是默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// minSize: 20000, // 分割代码最小的大小</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// minChunks: 1, // 至少被引用的次数，满足条件才会代码分割</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// maxInitialRequests: 30, // 入口js文件最大并行请求数量</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// cacheGroups: { // 组，哪些模块要打包到一个组</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//   defaultVendors: { // 组名</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     test: /[\\\\/]node_modules[\\\\/]/, // 需要打包到一起的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     priority: -10, // 权重（越大越高）</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//   default: { // 其他没有写的配置会使用上面的默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     minChunks: 2, // 这里的minChunks权重更大</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     priority: -20,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//     reuseExistingChunk: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;html-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 单入口</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 多入口</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   main: &quot;./src/main.js&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   app: &quot;./src/app.js&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;./dist&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [name]是webpack命名规则，使用chunk的name作为输出的文件名。</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 什么是chunk？打包的资源就是chunk，输出出去叫bundle。</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// chunk的name是啥呢？ 比如： entry中xxx: &quot;./src/xxx.js&quot;, name就是xxx。注意是前面的xxx，和文件名无关。</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 为什么需要这样命名呢？如果还是之前写法main.js，那么打包生成两个js文件都会叫做main.js会发生覆盖。(实际上会直接报错的)</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;js/[name].js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            template: </span><span style="color:#032F62;">&quot;./public/index.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;production&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    optimization: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 代码分割配置</span></span>
<span class="line"><span style="color:#24292E;">        splitChunks: {</span></span>
<span class="line"><span style="color:#24292E;">            chunks: </span><span style="color:#032F62;">&quot;all&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 对所有模块都进行分割</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 以下是默认值</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// minSize: 20000, // 分割代码最小的大小</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// minChunks: 1, // 至少被引用的次数，满足条件才会代码分割</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// maxInitialRequests: 30, // 入口js文件最大并行请求数量</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// cacheGroups: { // 组，哪些模块要打包到一个组</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//   defaultVendors: { // 组名</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     test: /[\\\\/]node_modules[\\\\/]/, // 需要打包到一起的模块</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     priority: -10, // 权重（越大越高）</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//   default: { // 其他没有写的配置会使用上面的默认值</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     minChunks: 2, // 这里的minChunks权重更大</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     priority: -20,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//     reuseExistingChunk: true,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span></code></pre></div><blockquote><p>上面，单入口的代码分割只配置了 <code>chunks:&#39;all&#39;</code>，其他的配置均使用默认值。这样做的结果是：</p><ol><li>如果使用了 <code>node_modules</code> 代码，会将其打包为一个单独的文件</li><li>如果使用了import动态导入语法，会将其打包为一个单独的文件</li></ol></blockquote><h2 id="eslint-配置" tabindex="-1">eslint 配置 <a class="header-anchor" href="#eslint-配置" aria-label="Permalink to &quot;eslint 配置&quot;">​</a></h2><blockquote><p>ESlint不支持import动态导入语法，可以在其配置文件中对plugins配置项进行配置，让它支持该语法：<code>plugins:[&quot;import&quot;]</code></p></blockquote><pre><code>- 下载包

    \`\`\`text
    npm i eslint-plugin-import -D
    \`\`\`

- 配置

    \`\`\`javascript
    // .eslintrc.js
    module.exports = {
        // 继承 Eslint 规则
        extends: [&quot;eslint:recommended&quot;],
        env: {
            node: true, // 启用node中全局变量
            browser: true, // 启用浏览器中全局变量
        },
        plugins: [&quot;import&quot;], // 解决动态导入import语法报错问题 --&gt; 实际使用eslint-plugin-import的规则解决的
        parserOptions: {
            ecmaVersion: 6,
            sourceType: &quot;module&quot;,
        },
        rules: {
            &quot;no-var&quot;: 2, // 不能使用 var 定义变量
        },
    };
    \`\`\`
</code></pre><h2 id="更新配置" tabindex="-1">更新配置 <a class="header-anchor" href="#更新配置" aria-label="Permalink to &quot;更新配置&quot;">​</a></h2><p>最终我们会使用单入口+代码分割+动态导入方式来进行配置。更新之前的配置文件。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// webpack.prod.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">os</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;os&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ESLintWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;html-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CssMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;terser-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ImageMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;image-minimizer-webpack-plugin&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">threads</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> os.</span><span style="color:#B392F0;">cpus</span><span style="color:#E1E4E8;">().</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取处理样式的Loaders</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    ].</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(Boolean);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
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
<span class="line"><span style="color:#E1E4E8;">            oneOf: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">less</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;less-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">s</span><span style="color:#79B8FF;">[ac]</span><span style="color:#DBEDFF;">ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;sass-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">styl</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: </span><span style="color:#B392F0;">getStyleLoaders</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;stylus-loader&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jpe</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    type: </span><span style="color:#9ECBFF;">&quot;asset&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        dataUrlCondition: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            maxSize: </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#6A737D;">// [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#E1E4E8;">                        filename: </span><span style="color:#9ECBFF;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    type: </span><span style="color:#9ECBFF;">&quot;asset/resource&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        filename: </span><span style="color:#9ECBFF;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#E1E4E8;">                    include: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#E1E4E8;">                    use: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&quot;thread-loader&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            loader: </span><span style="color:#9ECBFF;">&quot;babel-loader&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                cacheDirectory: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">                                cacheCompression: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">                                plugins: [</span><span style="color:#9ECBFF;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#E1E4E8;">                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ESLintWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            context: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">            exclude: </span><span style="color:#9ECBFF;">&quot;node_modules&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">            cache: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            cacheLocation: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">                __dirname,</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            ),</span></span>
<span class="line"><span style="color:#E1E4E8;">            threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="color:#E1E4E8;">            template: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../public/index.html&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 提取css成单独文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtractPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&quot;static/css/main.css&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        minimizer: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CssMinimizerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                parallel: threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#E1E4E8;">            }),</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ImageMinimizerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                minimizer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                            [</span><span style="color:#9ECBFF;">&quot;gifsicle&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                interlaced: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            [</span><span style="color:#9ECBFF;">&quot;jpegtran&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                progressive: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            [</span><span style="color:#9ECBFF;">&quot;optipng&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                optimizationLevel: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"><span style="color:#E1E4E8;">                            }],</span></span>
<span class="line"><span style="color:#E1E4E8;">                            [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                </span><span style="color:#9ECBFF;">&quot;svgo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        </span><span style="color:#9ECBFF;">&quot;preset-default&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        </span><span style="color:#9ECBFF;">&quot;prefixIds&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                            name: </span><span style="color:#9ECBFF;">&quot;sortAttrs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                            params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                                                xmlnsOrder: </span><span style="color:#9ECBFF;">&quot;alphabetical&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                                            },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                                },</span></span>
<span class="line"><span style="color:#E1E4E8;">                            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                    },</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 代码分割配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: </span><span style="color:#9ECBFF;">&quot;all&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 对所有模块都进行分割</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 其他内容用默认配置即可</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;production&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    devtool: </span><span style="color:#9ECBFF;">&quot;source-map&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// webpack.prod.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">os</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;os&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ESLintWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;eslint-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;html-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtractPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;mini-css-extract-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CssMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;css-minimizer-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;terser-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ImageMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;image-minimizer-webpack-plugin&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// cpu核数</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">threads</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> os.</span><span style="color:#6F42C1;">cpus</span><span style="color:#24292E;">().</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取处理样式的Loaders</span></span>
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
<span class="line"><span style="color:#24292E;">    ].</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(Boolean);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
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
<span class="line"><span style="color:#24292E;">            oneOf: [{</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 用来匹配 .css 结尾的文件</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// use 数组里面 Loader 执行顺序是从右到左</span></span>
<span class="line"><span style="color:#24292E;">                    use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">less</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;less-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">s</span><span style="color:#005CC5;">[ac]</span><span style="color:#032F62;">ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;sass-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">styl</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    use: </span><span style="color:#6F42C1;">getStyleLoaders</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;stylus-loader&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jpe</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    type: </span><span style="color:#032F62;">&quot;asset&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    parser: {</span></span>
<span class="line"><span style="color:#24292E;">                        dataUrlCondition: {</span></span>
<span class="line"><span style="color:#24292E;">                            maxSize: </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 小于10kb的图片会被base64处理</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                    generator: {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// 将图片文件输出到 static/imgs 目录中</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// 将图片文件命名 [hash:8][ext][query]</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// [hash:8]: hash值取8位</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// [ext]: 使用之前的文件扩展名</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6A737D;">// [query]: 添加之前的query参数</span></span>
<span class="line"><span style="color:#24292E;">                        filename: </span><span style="color:#032F62;">&quot;static/imgs/[hash:8][ext][query]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(ttf</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">woff2</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    type: </span><span style="color:#032F62;">&quot;asset/resource&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    generator: {</span></span>
<span class="line"><span style="color:#24292E;">                        filename: </span><span style="color:#032F62;">&quot;static/media/[hash:8][ext][query]&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// exclude: /node_modules/, // 排除node_modules代码不编译</span></span>
<span class="line"><span style="color:#24292E;">                    include: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">), </span><span style="color:#6A737D;">// 也可以用包含</span></span>
<span class="line"><span style="color:#24292E;">                    use: [{</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&quot;thread-loader&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                workers: threads, </span><span style="color:#6A737D;">// 数量</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            loader: </span><span style="color:#032F62;">&quot;babel-loader&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            options: {</span></span>
<span class="line"><span style="color:#24292E;">                                cacheDirectory: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启babel编译缓存</span></span>
<span class="line"><span style="color:#24292E;">                                cacheCompression: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 缓存文件不要压缩</span></span>
<span class="line"><span style="color:#24292E;">                                plugins: [</span><span style="color:#032F62;">&quot;@babel/plugin-transform-runtime&quot;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 减少代码体积</span></span>
<span class="line"><span style="color:#24292E;">                            },</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">        }, ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ESLintWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 指定检查文件的根目录</span></span>
<span class="line"><span style="color:#24292E;">            context: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">            exclude: </span><span style="color:#032F62;">&quot;node_modules&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"><span style="color:#24292E;">            cache: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启缓存</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 缓存目录</span></span>
<span class="line"><span style="color:#24292E;">            cacheLocation: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">                __dirname,</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&quot;../node_modules/.cache/.eslintcache&quot;</span></span>
<span class="line"><span style="color:#24292E;">            ),</span></span>
<span class="line"><span style="color:#24292E;">            threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 以 public/index.html 为模板创建文件</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源</span></span>
<span class="line"><span style="color:#24292E;">            template: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../public/index.html&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 提取css成单独文件</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtractPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 定义输出文件名和目录</span></span>
<span class="line"><span style="color:#24292E;">            filename: </span><span style="color:#032F62;">&quot;static/css/main.css&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// css压缩</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// new CssMinimizerPlugin(),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    optimization: {</span></span>
<span class="line"><span style="color:#24292E;">        minimizer: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// css压缩也可以写到optimization.minimizer里面，效果一样的</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CssMinimizerPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                parallel: threads, </span><span style="color:#6A737D;">// 开启多进程</span></span>
<span class="line"><span style="color:#24292E;">            }),</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ImageMinimizerPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                minimizer: {</span></span>
<span class="line"><span style="color:#24292E;">                    implementation: ImageMinimizerPlugin.imageminGenerate,</span></span>
<span class="line"><span style="color:#24292E;">                    options: {</span></span>
<span class="line"><span style="color:#24292E;">                        plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                            [</span><span style="color:#032F62;">&quot;gifsicle&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                                interlaced: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">                            }],</span></span>
<span class="line"><span style="color:#24292E;">                            [</span><span style="color:#032F62;">&quot;jpegtran&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                                progressive: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">                            }],</span></span>
<span class="line"><span style="color:#24292E;">                            [</span><span style="color:#032F62;">&quot;optipng&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                                optimizationLevel: </span><span style="color:#005CC5;">5</span></span>
<span class="line"><span style="color:#24292E;">                            }],</span></span>
<span class="line"><span style="color:#24292E;">                            [</span></span>
<span class="line"><span style="color:#24292E;">                                </span><span style="color:#032F62;">&quot;svgo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                {</span></span>
<span class="line"><span style="color:#24292E;">                                    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;preset-default&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        </span><span style="color:#032F62;">&quot;prefixIds&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                        {</span></span>
<span class="line"><span style="color:#24292E;">                                            name: </span><span style="color:#032F62;">&quot;sortAttrs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                            params: {</span></span>
<span class="line"><span style="color:#24292E;">                                                xmlnsOrder: </span><span style="color:#032F62;">&quot;alphabetical&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                                            },</span></span>
<span class="line"><span style="color:#24292E;">                                        },</span></span>
<span class="line"><span style="color:#24292E;">                                    ],</span></span>
<span class="line"><span style="color:#24292E;">                                },</span></span>
<span class="line"><span style="color:#24292E;">                            ],</span></span>
<span class="line"><span style="color:#24292E;">                        ],</span></span>
<span class="line"><span style="color:#24292E;">                    },</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            }),</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 代码分割配置</span></span>
<span class="line"><span style="color:#24292E;">        splitChunks: {</span></span>
<span class="line"><span style="color:#24292E;">            chunks: </span><span style="color:#032F62;">&quot;all&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 对所有模块都进行分割</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 其他内容用默认配置即可</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   host: &quot;localhost&quot;, // 启动服务器域名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   port: &quot;3000&quot;, // 启动服务器端口号</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   open: true, // 是否自动打开浏览器</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;production&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    devtool: </span><span style="color:#032F62;">&quot;source-map&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,10),e=[o];function c(t,r,E,y,i,u){return n(),a("div",null,e)}const D=s(p,[["render",c]]);export{q as __pageData,D as default};
