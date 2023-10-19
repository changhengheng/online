import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"静态资源中间件练习","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/14.静态资源中间件练习.md","filePath":"program/frontend/Node/chapter3/14.静态资源中间件练习.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter3/14.静态资源中间件练习.md"},o=p(`<h1 id="静态资源中间件练习" tabindex="-1">静态资源中间件练习 <a class="header-anchor" href="#静态资源中间件练习" aria-label="Permalink to &quot;静态资源中间件练习&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    需求：实现一个服务，可以在局域网内访问外网</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;express&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    直接访问：协议 + 域名 发生了什么？</span></span>
<span class="line"><span style="color:#6A737D;">    - 会使用默认端口</span></span>
<span class="line"><span style="color:#6A737D;">    - 会访问默认路径 &#39;/&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    - 会查找静态资源文件夹，默认返回 index.html 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    使用这种形式需要：</span></span>
<span class="line"><span style="color:#6A737D;">    1. 使用express.static制定静态资源文件夹目录</span></span>
<span class="line"><span style="color:#6A737D;">    2. 静态资源文件夹中需要有默认的index.html文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    注：这也是项目上线的流程</span></span>
<span class="line"><span style="color:#6A737D;">    1. 前端生成文件</span></span>
<span class="line"><span style="color:#6A737D;">    2. 后端指定网站静态资源目录（网站根目录）</span></span>
<span class="line"><span style="color:#6A737D;">    3. 后端将文件放到服务端网站根目录下</span></span>
<span class="line"><span style="color:#6A737D;">    4. 前端绝对路径访问（比如 /）会直接拿到index.html，相对路径访问（比如link和script）会以静态资源目录为参考寻找对应的资源文件返回</span></span>
<span class="line"><span style="color:#6A737D;">    </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(express.</span><span style="color:#B392F0;">static</span><span style="color:#E1E4E8;">(__dirname))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;启动成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    需求：实现一个服务，可以在局域网内访问外网</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;express&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    直接访问：协议 + 域名 发生了什么？</span></span>
<span class="line"><span style="color:#6A737D;">    - 会使用默认端口</span></span>
<span class="line"><span style="color:#6A737D;">    - 会访问默认路径 &#39;/&#39;</span></span>
<span class="line"><span style="color:#6A737D;">    - 会查找静态资源文件夹，默认返回 index.html 文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    使用这种形式需要：</span></span>
<span class="line"><span style="color:#6A737D;">    1. 使用express.static制定静态资源文件夹目录</span></span>
<span class="line"><span style="color:#6A737D;">    2. 静态资源文件夹中需要有默认的index.html文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    注：这也是项目上线的流程</span></span>
<span class="line"><span style="color:#6A737D;">    1. 前端生成文件</span></span>
<span class="line"><span style="color:#6A737D;">    2. 后端指定网站静态资源目录（网站根目录）</span></span>
<span class="line"><span style="color:#6A737D;">    3. 后端将文件放到服务端网站根目录下</span></span>
<span class="line"><span style="color:#6A737D;">    4. 前端绝对路径访问（比如 /）会直接拿到index.html，相对路径访问（比如link和script）会以静态资源目录为参考寻找对应的资源文件返回</span></span>
<span class="line"><span style="color:#6A737D;">    </span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(express.</span><span style="color:#6F42C1;">static</span><span style="color:#24292E;">(__dirname))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;启动成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,2),e=[o];function c(t,r,y,i,E,d){return n(),a("div",null,e)}const _=s(l,[["render",c]]);export{D as __pageData,_ as default};
