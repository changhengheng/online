import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"获取请求报文参数","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/4.获取请求报文参数.md","filePath":"program/frontend/Node/chapter3/4.获取请求报文参数.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter3/4.获取请求报文参数.md"},o=l(`<h1 id="获取请求报文参数" tabindex="-1">获取请求报文参数 <a class="header-anchor" href="#获取请求报文参数" aria-label="Permalink to &quot;获取请求报文参数&quot;">​</a></h1><p>express 框架封装了一些 API 来方便获取请求报文中的数据，并且兼容原生 HTTP 模块的获取方式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1.引入express模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建应用对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.创建路由</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// express兼容原生HTTP模块获取报文信息的方式</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.method);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.url);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.httpVersion);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.headers);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// express 操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.path); </span><span style="color:#6A737D;">//  /</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取查询字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.query); </span><span style="color:#6A737D;">// { query: &#39;1&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取客户端ip</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.ip); </span><span style="color:#6A737D;">// ::ffff:127.0.0.1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取请求头,get接收请求头的键名作为参数，返回对应的键值</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;host&quot;</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">// 127.0.0.1:3000</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4.监听端口，启动服务</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;3000&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1.引入express模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建应用对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.创建路由</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// express兼容原生HTTP模块获取报文信息的方式</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.method);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.url);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.httpVersion);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.headers);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// express 操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取路径</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.path); </span><span style="color:#6A737D;">//  /</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取查询字符串</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.query); </span><span style="color:#6A737D;">// { query: &#39;1&#39; }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取客户端ip</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.ip); </span><span style="color:#6A737D;">// ::ffff:127.0.0.1</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取请求头,get接收请求头的键名作为参数，返回对应的键值</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;host&quot;</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">// 127.0.0.1:3000</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4.监听端口，启动服务</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;3000&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,3),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{d as __pageData,u as default};
