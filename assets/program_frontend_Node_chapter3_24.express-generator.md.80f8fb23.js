import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"express-generator","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/24.express-generator.md","filePath":"program/frontend/Node/chapter3/24.express-generator.md","lastUpdated":1697287289000}'),e={name:"program/frontend/Node/chapter3/24.express-generator.md"},l=p(`<h1 id="express-generator" tabindex="-1">express-generator <a class="header-anchor" href="#express-generator" aria-label="Permalink to &quot;express-generator&quot;">​</a></h1><p><a href="https://express.nodejs.cn/en/starter/generator.html" target="_blank" rel="noreferrer">https://express.nodejs.cn/en/starter/generator.html</a></p><p>express-generator 是 express 官方提供的一个用来快速创建一个express应用骨架的工具。</p><p>全局安装这个包会暴露一个 <code>express</code> 命令</p><p>使用 <code>express -e xxx</code>：在xxx文件夹下创建一个支持ejs模板引擎的项目架子</p><p>处理404的两种方式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// generator创建的骨架app.js的处理方式</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">next</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">createError</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 方式二</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;*&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// generator创建的骨架app.js的处理方式</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">, </span><span style="color:#E36209;">next</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">next</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">createError</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">404</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 方式二</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;*&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-label="Permalink to &quot;官方文档&quot;">​</a></h2><p>使用应用生成器工具 <code>express-generator</code> 快速创建应用骨架。</p><p>你可以使用 <code>npx</code> 命令（在 Node.js 8.2.0 中可用）运行应用生成器。</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ npx express-generator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ npx express-generator</span></span></code></pre></div><p>对于较早的 Node 版本，将应用生成器安装为全局 npm 包，然后启动它：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ npm install -g express-generator</span></span>
<span class="line"><span style="color:#E1E4E8;">$ express</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ npm install -g express-generator</span></span>
<span class="line"><span style="color:#24292E;">$ express</span></span></code></pre></div><p>显示带有 <code>-h</code> 选项的命令选项：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ express -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">  Usage: express [options] [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">  Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">    -h, --help          output usage information</span></span>
<span class="line"><span style="color:#79B8FF;">        --version       output the version number</span></span>
<span class="line"><span style="color:#79B8FF;">    -e, --ejs           add ejs engine support</span></span>
<span class="line"><span style="color:#79B8FF;">        --hbs           add handlebars engine support</span></span>
<span class="line"><span style="color:#79B8FF;">        --pug           add pug engine support</span></span>
<span class="line"><span style="color:#79B8FF;">    -H, --hogan         add hogan.js engine support</span></span>
<span class="line"><span style="color:#79B8FF;">        --no-view       generate without view engine</span></span>
<span class="line"><span style="color:#79B8FF;">    -v, --view &lt;engine&gt; add view &lt;engine&gt; support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)</span></span>
<span class="line"><span style="color:#79B8FF;">    -c, --css &lt;engine&gt;  add stylesheet &lt;engine&gt; support (less|stylus|compass|sass) (defaults to plain css)</span></span>
<span class="line"><span style="color:#79B8FF;">        --git           add .gitignore</span></span>
<span class="line"><span style="color:#79B8FF;">    -f, --force         force on non-empty directory</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ express -h</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">  Usage: express [options] [dir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">  Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">    -h, --help          output usage information</span></span>
<span class="line"><span style="color:#005CC5;">        --version       output the version number</span></span>
<span class="line"><span style="color:#005CC5;">    -e, --ejs           add ejs engine support</span></span>
<span class="line"><span style="color:#005CC5;">        --hbs           add handlebars engine support</span></span>
<span class="line"><span style="color:#005CC5;">        --pug           add pug engine support</span></span>
<span class="line"><span style="color:#005CC5;">    -H, --hogan         add hogan.js engine support</span></span>
<span class="line"><span style="color:#005CC5;">        --no-view       generate without view engine</span></span>
<span class="line"><span style="color:#005CC5;">    -v, --view &lt;engine&gt; add view &lt;engine&gt; support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)</span></span>
<span class="line"><span style="color:#005CC5;">    -c, --css &lt;engine&gt;  add stylesheet &lt;engine&gt; support (less|stylus|compass|sass) (defaults to plain css)</span></span>
<span class="line"><span style="color:#005CC5;">        --git           add .gitignore</span></span>
<span class="line"><span style="color:#005CC5;">    -f, --force         force on non-empty directory</span></span></code></pre></div><p>例如，以下创建一个名为 myapp 的 Express 应用。 该应用将在当前工作目录中名为 myapp 的文件夹中创建，并且视图引擎将设置为 <a href="https://pug.nodejs.cn/" target="_blank" rel="noreferrer">Pug</a>：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ express --view=pug myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/package.json</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/app.js</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/public</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/public/javascripts</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/public/images</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/routes</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/routes/index.js</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/routes/users.js</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/public/stylesheets</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/public/stylesheets/style.css</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/views</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/views/index.pug</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/views/layout.pug</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/views/error.pug</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/bin</span></span>
<span class="line"><span style="color:#79B8FF;">   create : myapp/bin/www</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ express --view=pug myapp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">   create : myapp</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/package.json</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/app.js</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/public</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/public/javascripts</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/public/images</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/routes</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/routes/index.js</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/routes/users.js</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/public/stylesheets</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/public/stylesheets/style.css</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/views</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/views/index.pug</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/views/layout.pug</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/views/error.pug</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/bin</span></span>
<span class="line"><span style="color:#005CC5;">   create : myapp/bin/www</span></span></code></pre></div><p>然后安装依赖：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ cd myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">$ npm install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ cd myapp</span></span>
<span class="line"><span style="color:#24292E;">$ npm install</span></span></code></pre></div><p>在 MacOS 或 Linux 上，使用以下命令运行应用：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$ DEBUG=myapp:</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> npm start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$ DEBUG=myapp:</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> npm start</span></span></code></pre></div><p>在 Windows 命令提示符上，使用以下命令：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&gt; set DEBUG=myapp:</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> &amp; </span><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&gt; set DEBUG=myapp:</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> &amp; </span><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><p>在 Windows PowerShell 上，使用以下命令：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">PS&gt; $env:DEBUG=&#39;myapp:*&#39;; npm start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">PS&gt; $env:DEBUG=&#39;myapp:*&#39;; npm start</span></span></code></pre></div><p>然后在浏览器中加载 <code>http://localhost:3000/</code> 以访问该应用。</p><p>生成的应用具有以下目录结构：</p><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#79B8FF;">├── app.js</span></span>
<span class="line"><span style="color:#79B8FF;">├── bin</span></span>
<span class="line"><span style="color:#79B8FF;">│   └── www</span></span>
<span class="line"><span style="color:#79B8FF;">├── package.json</span></span>
<span class="line"><span style="color:#79B8FF;">├── public</span></span>
<span class="line"><span style="color:#79B8FF;">│   ├── images</span></span>
<span class="line"><span style="color:#79B8FF;">│   ├── javascripts</span></span>
<span class="line"><span style="color:#79B8FF;">│   └── stylesheets</span></span>
<span class="line"><span style="color:#79B8FF;">│       └── style.css</span></span>
<span class="line"><span style="color:#79B8FF;">├── routes</span></span>
<span class="line"><span style="color:#79B8FF;">│   ├── index.js</span></span>
<span class="line"><span style="color:#79B8FF;">│   └── users.js</span></span>
<span class="line"><span style="color:#79B8FF;">└── views</span></span>
<span class="line"><span style="color:#79B8FF;">    ├── error.pug</span></span>
<span class="line"><span style="color:#79B8FF;">    ├── index.pug</span></span>
<span class="line"><span style="color:#79B8FF;">    └── layout.pug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">7 directories, 9 files</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#005CC5;">├── app.js</span></span>
<span class="line"><span style="color:#005CC5;">├── bin</span></span>
<span class="line"><span style="color:#005CC5;">│   └── www</span></span>
<span class="line"><span style="color:#005CC5;">├── package.json</span></span>
<span class="line"><span style="color:#005CC5;">├── public</span></span>
<span class="line"><span style="color:#005CC5;">│   ├── images</span></span>
<span class="line"><span style="color:#005CC5;">│   ├── javascripts</span></span>
<span class="line"><span style="color:#005CC5;">│   └── stylesheets</span></span>
<span class="line"><span style="color:#005CC5;">│       └── style.css</span></span>
<span class="line"><span style="color:#005CC5;">├── routes</span></span>
<span class="line"><span style="color:#005CC5;">│   ├── index.js</span></span>
<span class="line"><span style="color:#005CC5;">│   └── users.js</span></span>
<span class="line"><span style="color:#005CC5;">└── views</span></span>
<span class="line"><span style="color:#005CC5;">    ├── error.pug</span></span>
<span class="line"><span style="color:#005CC5;">    ├── index.pug</span></span>
<span class="line"><span style="color:#005CC5;">    └── layout.pug</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">7 directories, 9 files</span></span></code></pre></div>`,28),o=[l];function c(t,r,i,y,d,g){return a(),n("div",null,o)}const C=s(e,[["render",c]]);export{h as __pageData,C as default};
