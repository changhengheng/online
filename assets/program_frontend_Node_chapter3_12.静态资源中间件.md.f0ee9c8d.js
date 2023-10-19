import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const d=JSON.parse('{"title":"静态资源中间件","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/12.静态资源中间件.md","filePath":"program/frontend/Node/chapter3/12.静态资源中间件.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter3/12.静态资源中间件.md"},o=p(`<h1 id="静态资源中间件" tabindex="-1">静态资源中间件 <a class="header-anchor" href="#静态资源中间件" aria-label="Permalink to &quot;静态资源中间件&quot;">​</a></h1><p>静态资源指代码在运行期间长时间不会发生变化的资源，比如html、css、js、图片等等</p><p>静态资源目录也叫网站根目录，浏览器发送请求到服务器，服务器去哪个文件夹找对应的资源文件，这个文件夹就是网站根目录</p><p>express 内置处理静态资源的中间件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置静态资源中间件</span></span>
<span class="line"><span style="color:#6A737D;">// express.static() 返回静态资源中间件函数，参数是一个路径，传入的路径即为静态资源文件夹路径。即服务器响应浏览器请求时寻找对应文件、读取文件、响应文件内容的目录</span></span>
<span class="line"><span style="color:#6A737D;">// 调用use使用该中间件</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">  express.static() 的第一个参数指定提供静态资源的根目录。</span></span>
<span class="line"><span style="color:#6A737D;">  回顾一下URL的组成：协议、域名或ip、端口、资源路径、查询字符串</span></span>
<span class="line"><span style="color:#6A737D;">  静态资源根目录即是指浏览器使用其资源路径访问服务器资源时，服务器上对应的文件夹是哪一个。‘</span></span>
<span class="line"><span style="color:#6A737D;">  也就是说，浏览器是通过资源路径去参考express.static()指定的静态资源根目录开始寻找对应的文件的</span></span>
<span class="line"><span style="color:#6A737D;">  这里可以想一下前端路由分类：hash路由和history路由，hash路由#，#区分的就是前台路由和后台路由</span></span>
<span class="line"><span style="color:#6A737D;">*/</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// express.static() 还会自动设定静态资源对应的MIME类型</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(express.</span><span style="color:#B392F0;">static</span><span style="color:#E1E4E8;">(__dirname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/public&#39;</span><span style="color:#E1E4E8;">)); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/home&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;前台首页&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/admin&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;后台首页&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/setting&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;后台设置&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`&lt;h1&gt;404 NotFound&lt;/h1&gt;\`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置静态资源中间件</span></span>
<span class="line"><span style="color:#6A737D;">// express.static() 返回静态资源中间件函数，参数是一个路径，传入的路径即为静态资源文件夹路径。即服务器响应浏览器请求时寻找对应文件、读取文件、响应文件内容的目录</span></span>
<span class="line"><span style="color:#6A737D;">// 调用use使用该中间件</span></span>
<span class="line"><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">  express.static() 的第一个参数指定提供静态资源的根目录。</span></span>
<span class="line"><span style="color:#6A737D;">  回顾一下URL的组成：协议、域名或ip、端口、资源路径、查询字符串</span></span>
<span class="line"><span style="color:#6A737D;">  静态资源根目录即是指浏览器使用其资源路径访问服务器资源时，服务器上对应的文件夹是哪一个。‘</span></span>
<span class="line"><span style="color:#6A737D;">  也就是说，浏览器是通过资源路径去参考express.static()指定的静态资源根目录开始寻找对应的文件的</span></span>
<span class="line"><span style="color:#6A737D;">  这里可以想一下前端路由分类：hash路由和history路由，hash路由#，#区分的就是前台路由和后台路由</span></span>
<span class="line"><span style="color:#6A737D;">*/</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// express.static() 还会自动设定静态资源对应的MIME类型</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(express.</span><span style="color:#6F42C1;">static</span><span style="color:#24292E;">(__dirname </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/public&#39;</span><span style="color:#24292E;">)); </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/home&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;前台首页&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/admin&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;后台首页&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/setting&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;后台设置&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;*&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`&lt;h1&gt;404 NotFound&lt;/h1&gt;\`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const q=s(l,[["render",t]]);export{d as __pageData,q as default};
