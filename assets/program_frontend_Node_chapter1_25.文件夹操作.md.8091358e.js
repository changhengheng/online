import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const F=JSON.parse('{"title":"文件夹操作","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/25.文件夹操作.md","filePath":"program/frontend/Node/chapter1/25.文件夹操作.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter1/25.文件夹操作.md"},o=l(`<h1 id="文件夹操作" tabindex="-1">文件夹操作 <a class="header-anchor" href="#文件夹操作" aria-label="Permalink to &quot;文件夹操作&quot;">​</a></h1><p>借助 Node.js 的能力，我们可以对文件夹进行 **创建 、 读取 、 删除 **等操作</p><p>创建文件夹：mkdir / mkdirSync</p><p>读取文件夹：readdir / readdirSync</p><p>删除文件夹：rmdir / rmdirSync</p><h2 id="创建文件夹" tabindex="-1">创建文件夹 <a class="header-anchor" href="#创建文件夹" aria-label="Permalink to &quot;创建文件夹&quot;">​</a></h2><p>在 Node.js 中，我们可以使用 mkdir 或 mkdirSync 来创建文件夹</p><p><code>fs.mkdir(path[, options], callback)</code></p><p><code>fs.mkdirSync(path[, options])</code></p><ul><li>path 文件夹路径</li><li>options 选项配置（ 可选 ）</li><li>callback 操作后的回调</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1. 导入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fs&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 创建文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/test&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//err 特点和之前一样</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mk = make 制作 dir = directory 文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 递归创建 a/b/c</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/test/a/b/c&quot;</span><span style="color:#E1E4E8;">, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// recursive 是递归的意思</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//err 特点和之前一样</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mk = make 制作 dir = directory 文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 导入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fs&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2. 创建文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/test&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//err 特点和之前一样</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mk = make 制作 dir = directory 文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3. 递归创建 a/b/c</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/test/a/b/c&quot;</span><span style="color:#24292E;">, { recursive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// recursive 是递归的意思</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//err 特点和之前一样</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mk = make 制作 dir = directory 文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="读取文件夹" tabindex="-1">读取文件夹 <a class="header-anchor" href="#读取文件夹" aria-label="Permalink to &quot;读取文件夹&quot;">​</a></h2><p>在 Node.js 中，我们可以使用 readdir 或 readdirSync 来读取文件夹</p><p><code>fs.readdir(path[, options], callback)</code></p><p><code>fs.readdirSync(path[, options])</code></p><ul><li>path 文件夹路径</li><li>options 选项配置（ 可选 ）</li><li>callback 操作后的回调</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 读取文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">readdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/fs&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// err 错误信息，特点和之前一样，data 读取的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data); </span><span style="color:#6A737D;">// data 是一个由文件夹中各个文件的名称+扩展名组成的一个数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        [</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;1.写入文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;2.追加写入.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;3.流式写入.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;4.读取文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;5.流式读取.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;546806235-1-208.mp4&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;6.文件复制.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;7.文件移动和重命名.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;8.删除文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;9.文件夹操作.js&#39;</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 读取文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">readdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/fs&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// err 错误信息，特点和之前一样，data 读取的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data); </span><span style="color:#6A737D;">// data 是一个由文件夹中各个文件的名称+扩展名组成的一个数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        [</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;1.写入文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;2.追加写入.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;3.流式写入.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;4.读取文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;5.流式读取.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;546806235-1-208.mp4&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;6.文件复制.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;7.文件移动和重命名.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;8.删除文件.js&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">  &#39;9.文件夹操作.js&#39;</span></span>
<span class="line"><span style="color:#6A737D;">]</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="删除文件夹" tabindex="-1">删除文件夹 <a class="header-anchor" href="#删除文件夹" aria-label="Permalink to &quot;删除文件夹&quot;">​</a></h2><p>在 Node.js 中，我们可以使用 rmdir 或 rmdirSync 来删除文件夹</p><p><code>fs.rmdir(path[, options], callback)</code></p><p><code>fs.rmdirSync(path[, options])</code></p><ul><li>path 文件夹路径</li><li>options 选项配置（ 可选 ）</li><li>callback 操作后的回调</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 删除文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rmdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/test/a/b/c&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 不能删除非空文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 递归删除</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rmdir</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/test&quot;</span><span style="color:#E1E4E8;">, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 可以删除非空文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 删除文件夹</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rmdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/test/a/b/c&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 不能删除非空文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#6A737D;">// 递归删除</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rmdir</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/test&quot;</span><span style="color:#24292E;">, { recursive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 可以删除非空文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>rmdir 将被移除，不推荐使用，推荐使用rm，参数和rmdir一样</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 递归删除</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/test&quot;</span><span style="color:#E1E4E8;">, { recursive: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 可以删除非空文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 递归删除</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">rm</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/test&quot;</span><span style="color:#24292E;">, { recursive: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 可以删除非空文件夹</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>注意：通过命令删除的文件不会进回收站</p>`,26),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{F as __pageData,A as default};
