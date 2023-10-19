import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19358895.js";const h=JSON.parse('{"title":"webpack 基础配置","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/webpack/chapter1/5.webpack基础配置.md","filePath":"program/frontend/webpack/chapter1/5.webpack基础配置.md","lastUpdated":1694391214000}'),l={name:"program/frontend/webpack/chapter1/5.webpack基础配置.md"},o=p(`<h1 id="webpack-基础配置" tabindex="-1">webpack 基础配置 <a class="header-anchor" href="#webpack-基础配置" aria-label="Permalink to &quot;webpack 基础配置&quot;">​</a></h1><h2 id="准备-webpack-配置文件" tabindex="-1">准备 Webpack 配置文件 <a class="header-anchor" href="#准备-webpack-配置文件" aria-label="Permalink to &quot;准备 Webpack 配置文件&quot;">​</a></h2><p>在项目根目录下新建文件： <code>webpack.config.js</code></p><blockquote><p>webpack 配置文件的位置一定是项目根目录，并且命名是固定的，就是 &#39;webpack.config.js&#39;</p></blockquote><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 加载器</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#24292E;">    output: {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 加载器</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范</p><blockquote><p>webpack 跑在 nodejs 上，所以配置文件采用的是 CommonJS 规范（node基础知识）</p></blockquote><h2 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-label="Permalink to &quot;修改配置文件&quot;">​</a></h2><p>配置文件</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Node.js 的核心模块，专门用来处理文件路径</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 相对路径和绝对路径都行</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: </span><span style="color:#9ECBFF;">&quot;./src/main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// path: 文件输出目录，必须是绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// path.resolve() 方法返回一个绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// __dirname 当前文件的文件夹绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// filename: 输出文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&quot;main.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 加载器</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        rules: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&quot;development&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Node.js 的核心模块，专门用来处理文件路径</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 相对路径和绝对路径都行</span></span>
<span class="line"><span style="color:#24292E;">    entry: </span><span style="color:#032F62;">&quot;./src/main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// path: 文件输出目录，必须是绝对路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// path.resolve() 方法返回一个绝对路径</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// __dirname 当前文件的文件夹绝对路径</span></span>
<span class="line"><span style="color:#24292E;">        path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// filename: 输出文件名</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&quot;main.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 加载器</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">        rules: [],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插件</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&quot;development&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>运行指令</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 写好配置文件之后，运行就比较简单了，下方代码执行后，webpack会在当前命令执行目录下找webpack.config.js 文件，读取里面的配置，按照配置去执行打包操作；如果命令携带了参数，就会按照携带的参数去执行，因为它的优先级比较高</span></span>
<span class="line"><span style="color:#e1e4e8;">npx webpack</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 写好配置文件之后，运行就比较简单了，下方代码执行后，webpack会在当前命令执行目录下找webpack.config.js 文件，读取里面的配置，按照配置去执行打包操作；如果命令携带了参数，就会按照携带的参数去执行，因为它的优先级比较高</span></span>
<span class="line"><span style="color:#24292e;">npx webpack</span></span></code></pre></div><blockquote><p>运行后查看是否打包成功，以及index.html能不能打印 编译成功会显示一个绿色的successful，编译失败会显示一个红色的error</p></blockquote><p>此时功能和之前一样，也不能处理样式资源</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 Webpack 的功能</p><p>我们后面会以两个模式来分别搭建 Webpack 的配置，先进行开发模式，再完成生产模式</p>`,17),e=[o];function c(t,r,E,y,i,d){return a(),n("div",null,e)}const b=s(l,[["render",c]]);export{h as __pageData,b as default};
