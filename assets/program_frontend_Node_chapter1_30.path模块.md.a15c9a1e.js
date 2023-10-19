import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"path 模块","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/30.path模块.md","filePath":"program/frontend/Node/chapter1/30.path模块.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter1/30.path模块.md"},o=p(`<h1 id="path-模块" tabindex="-1">path 模块 <a class="header-anchor" href="#path-模块" aria-label="Permalink to &quot;path 模块&quot;">​</a></h1><blockquote><p>文件路径问题：fs模块相关方法，比如写入文件、流式写入等等，需要提供文件路径。如果使用相对路径，该路径是相对于执行node命令所处的路径。而执行命令的路径每次使用时无法保持统一，所以在文件操作中，相对路径是不可靠的，为了解决这个问题，则需要将相对路径改为绝对路径。此时使用path模块会非常方便，因为它可以动态获取绝对路径，当绝对路径也发生变化时（比如项目上线），不用手动更新。</p></blockquote><blockquote><p>系统中的每个文件都有一个路径。 在 Linux 和 macOS 上，路径可能如下所示： /users/joe/file.txt 而 Windows 计算机则不同，并且具有如下结构： C:\\users\\joe\\file.txt。在应用中使用路径时需要注意，因为必须考虑到这种差异。交给代码去做就行了。</p></blockquote><ul><li>path.resolve 拼接规范的绝对路径 <strong>常用</strong></li><li>path.sep 获取操作系统的路径分隔符</li><li>path.parse 解析路径并返回对象</li><li>path.basename 获取路径的基础名称</li><li>path.dirname 获取路径的目录名</li><li>path.extname 获得路径的扩展名</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;./index.html&quot;</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">//e:\\practice\\practice\\node\\path\\1.path.js 即使写了/，也会被转换成标准的目录分隔符\\</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;index.html&quot;</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">// 也可以不写 ./ ，文件名本身就是一个相对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;/index.html&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;test&quot;</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">//e:\\index.html\\test resolve 可以接受多个参数，它会以最后一个绝对路径为开始，陆续拼接所有的相对路径，形成一个完整的路径。这里因为/index.html是一个绝对路径，/是根目录，所以__dirname会被忽略</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// path.resolve()总是返回标准格式的路径</span></span>
<span class="line"><span style="color:#6A737D;">// 最佳实践是第一个参数使用绝对路径，且只使用这一个绝对路径，其余参数全部为相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// sep属性 separator的缩写，是分隔符的意思</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.sep); </span><span style="color:#6A737D;">// \\ 返回当前系统环境下的分隔符，windows 是 \\ ，linux 是 /</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// parse 方法 解析路径，获取路径相关信息</span></span>
<span class="line"><span style="color:#6A737D;">// 先获取文件的绝对路径</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(__filename); </span><span style="color:#6A737D;">// e:\\practice\\practice\\node\\path\\1.path.js</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> filePath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`e:</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">practice</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">practice</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">node</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">path</span><span style="color:#79B8FF;">\\\\</span><span style="color:#9ECBFF;">1.path.js\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(filePath));</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">    root: &#39;e:\\\\&#39;, // 盘符</span></span>
<span class="line"><span style="color:#6A737D;">    dir: &#39;e:\\\\practice\\\\practice\\\\node\\\\path&#39;, // 文件夹</span></span>
<span class="line"><span style="color:#6A737D;">    base: &#39;1.path.js&#39;,// 文件名</span></span>
<span class="line"><span style="color:#6A737D;">    ext: &#39;.js&#39;, // 文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">    name: &#39;1.path&#39; // 文件的文件名</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// basename 获取文件名、</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">basename</span><span style="color:#E1E4E8;">(filePath)); </span><span style="color:#6A737D;">// 1.path.js</span></span>
<span class="line"><span style="color:#6A737D;">// dirname 获取文件夹路径</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(path.</span><span style="color:#B392F0;">dirname</span><span style="color:#E1E4E8;">(filePath)); </span><span style="color:#6A737D;">// e:\\practice\\practice\\node\\path</span></span>
<span class="line"><span style="color:#6A737D;">// extname 获取文件扩展名</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (path.</span><span style="color:#B392F0;">extname</span><span style="color:#E1E4E8;">(filePath)); </span><span style="color:#6A737D;">// .js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;./index.html&quot;</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">//e:\\practice\\practice\\node\\path\\1.path.js 即使写了/，也会被转换成标准的目录分隔符\\</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;index.html&quot;</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">// 也可以不写 ./ ，文件名本身就是一个相对路径</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;/index.html&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;test&quot;</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">//e:\\index.html\\test resolve 可以接受多个参数，它会以最后一个绝对路径为开始，陆续拼接所有的相对路径，形成一个完整的路径。这里因为/index.html是一个绝对路径，/是根目录，所以__dirname会被忽略</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// path.resolve()总是返回标准格式的路径</span></span>
<span class="line"><span style="color:#6A737D;">// 最佳实践是第一个参数使用绝对路径，且只使用这一个绝对路径，其余参数全部为相对路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// sep属性 separator的缩写，是分隔符的意思</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.sep); </span><span style="color:#6A737D;">// \\ 返回当前系统环境下的分隔符，windows 是 \\ ，linux 是 /</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// parse 方法 解析路径，获取路径相关信息</span></span>
<span class="line"><span style="color:#6A737D;">// 先获取文件的绝对路径</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(__filename); </span><span style="color:#6A737D;">// e:\\practice\\practice\\node\\path\\1.path.js</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> filePath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`e:</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">practice</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">practice</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">node</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">path</span><span style="color:#005CC5;">\\\\</span><span style="color:#032F62;">1.path.js\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(filePath));</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    {</span></span>
<span class="line"><span style="color:#6A737D;">    root: &#39;e:\\\\&#39;, // 盘符</span></span>
<span class="line"><span style="color:#6A737D;">    dir: &#39;e:\\\\practice\\\\practice\\\\node\\\\path&#39;, // 文件夹</span></span>
<span class="line"><span style="color:#6A737D;">    base: &#39;1.path.js&#39;,// 文件名</span></span>
<span class="line"><span style="color:#6A737D;">    ext: &#39;.js&#39;, // 文件扩展名</span></span>
<span class="line"><span style="color:#6A737D;">    name: &#39;1.path&#39; // 文件的文件名</span></span>
<span class="line"><span style="color:#6A737D;">    }</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// basename 获取文件名、</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">basename</span><span style="color:#24292E;">(filePath)); </span><span style="color:#6A737D;">// 1.path.js</span></span>
<span class="line"><span style="color:#6A737D;">// dirname 获取文件夹路径</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(path.</span><span style="color:#6F42C1;">dirname</span><span style="color:#24292E;">(filePath)); </span><span style="color:#6A737D;">// e:\\practice\\practice\\node\\path</span></span>
<span class="line"><span style="color:#6A737D;">// extname 获取文件扩展名</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (path.</span><span style="color:#6F42C1;">extname</span><span style="color:#24292E;">(filePath)); </span><span style="color:#6A737D;">// .js</span></span></code></pre></div>`,5),e=[o];function t(c,r,y,i,E,h){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
