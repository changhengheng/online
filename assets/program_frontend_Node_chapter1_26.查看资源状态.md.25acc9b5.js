import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"查看资源状态","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/26.查看资源状态.md","filePath":"program/frontend/Node/chapter1/26.查看资源状态.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter1/26.查看资源状态.md"},o=l(`<h1 id="查看资源状态" tabindex="-1">查看资源状态 <a class="header-anchor" href="#查看资源状态" aria-label="Permalink to &quot;查看资源状态&quot;">​</a></h1><p>在 Node.js 中，我们可以使用 stat 或 statSync 来查看资源的详细信息</p><p><code>fs.stat(path[, options], callback)</code></p><p><code>fs.statSync(path[, options])</code></p><ul><li>参数说明： path 文件夹路径</li><li>options 选项配置（ 可选 ）</li><li>callback 操作后的回调</li></ul><p>结果值对象结构：</p><ul><li>size 文件体积</li><li>birthtime 创建时间</li><li>mtime 最后修改时间</li><li>isFile 检测是否为文件</li><li>isDirectory 检测是否为文件夹</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1. 引入fs模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;fs&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.调用stat方法  stat = status 状态</span></span>
<span class="line"><span style="color:#E1E4E8;">fs.</span><span style="color:#B392F0;">stat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;./node/world.txt&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// err 同理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (err) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;操作失败&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        Stats {</span></span>
<span class="line"><span style="color:#6A737D;">            dev: 510975057,</span></span>
<span class="line"><span style="color:#6A737D;">            mode: 33206,</span></span>
<span class="line"><span style="color:#6A737D;">            nlink: 1,</span></span>
<span class="line"><span style="color:#6A737D;">            uid: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            gid: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            rdev: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            blksize: 4096,</span></span>
<span class="line"><span style="color:#6A737D;">            ino: 1125899906907120,</span></span>
<span class="line"><span style="color:#6A737D;">            size: 40,</span></span>
<span class="line"><span style="color:#6A737D;">            blocks: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            atimeMs: 1695736888461.8267,</span></span>
<span class="line"><span style="color:#6A737D;">            mtimeMs: 1695600772479.1858,</span></span>
<span class="line"><span style="color:#6A737D;">            ctimeMs: 1695736883270.6523,</span></span>
<span class="line"><span style="color:#6A737D;">            birthtimeMs: 1695600747895.8513,</span></span>
<span class="line"><span style="color:#6A737D;">            atime: 2023-09-26T14:01:28.462Z,</span></span>
<span class="line"><span style="color:#6A737D;">            mtime: 2023-09-25T00:12:52.479Z,</span></span>
<span class="line"><span style="color:#6A737D;">            ctime: 2023-09-26T14:01:23.271Z,</span></span>
<span class="line"><span style="color:#6A737D;">            birthtime: 2023-09-25T00:12:27.896Z</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// isFile() 是否是文件</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">isFile</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// isDirectory() 是否是文件夹</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.</span><span style="color:#B392F0;">isDirectory</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.mtime); </span><span style="color:#6A737D;">// 最后修改时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.birthtime); </span><span style="color:#6A737D;">// 创建时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data.size); </span><span style="color:#6A737D;">// 文件体积</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1. 引入fs模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;fs&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.调用stat方法  stat = status 状态</span></span>
<span class="line"><span style="color:#24292E;">fs.</span><span style="color:#6F42C1;">stat</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;./node/world.txt&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// err 同理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (err) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;操作失败&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        Stats {</span></span>
<span class="line"><span style="color:#6A737D;">            dev: 510975057,</span></span>
<span class="line"><span style="color:#6A737D;">            mode: 33206,</span></span>
<span class="line"><span style="color:#6A737D;">            nlink: 1,</span></span>
<span class="line"><span style="color:#6A737D;">            uid: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            gid: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            rdev: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            blksize: 4096,</span></span>
<span class="line"><span style="color:#6A737D;">            ino: 1125899906907120,</span></span>
<span class="line"><span style="color:#6A737D;">            size: 40,</span></span>
<span class="line"><span style="color:#6A737D;">            blocks: 0,</span></span>
<span class="line"><span style="color:#6A737D;">            atimeMs: 1695736888461.8267,</span></span>
<span class="line"><span style="color:#6A737D;">            mtimeMs: 1695600772479.1858,</span></span>
<span class="line"><span style="color:#6A737D;">            ctimeMs: 1695736883270.6523,</span></span>
<span class="line"><span style="color:#6A737D;">            birthtimeMs: 1695600747895.8513,</span></span>
<span class="line"><span style="color:#6A737D;">            atime: 2023-09-26T14:01:28.462Z,</span></span>
<span class="line"><span style="color:#6A737D;">            mtime: 2023-09-25T00:12:52.479Z,</span></span>
<span class="line"><span style="color:#6A737D;">            ctime: 2023-09-26T14:01:23.271Z,</span></span>
<span class="line"><span style="color:#6A737D;">            birthtime: 2023-09-25T00:12:27.896Z</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// isFile() 是否是文件</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">isFile</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// isDirectory() 是否是文件夹</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.</span><span style="color:#6F42C1;">isDirectory</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.mtime); </span><span style="color:#6A737D;">// 最后修改时间</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.birthtime); </span><span style="color:#6A737D;">// 创建时间</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(data.size); </span><span style="color:#6A737D;">// 文件体积</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,8),e=[o];function t(c,r,i,y,E,D){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{d as __pageData,F as default};
