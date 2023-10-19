import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"响应设置","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/7.响应设置.md","filePath":"program/frontend/Node/chapter3/7.响应设置.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter3/7.响应设置.md"},o=p(`<h1 id="响应设置" tabindex="-1">响应设置 <a class="header-anchor" href="#响应设置" aria-label="Permalink to &quot;响应设置&quot;">​</a></h1><p>express 框架封装了一些 API 来方便给客户端响应数据，并且兼容原生 HTTP 模块的获取方式</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建路由</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 原生</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.statusCode = 404</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.statusMessage = &#39;hello&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.setHeader(&#39;XXX&#39;,&#39;YYY&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.write(&#39;hello you&#39;) // 设置响应体</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.end(&quot;hello world&quot;);// 设置响应体并结束链接</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// express</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.status(500)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.set(&#39;aaa&#39;,&#39;bbb&#39;)// 设置响应头</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.send(&#39;你好&#39;)// 设置响应体，send方法会自动在响应头添加字符编码，所以不会乱码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这些方法可以链式调用</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">status</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;xxx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;yyy&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;我勒个去&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建路由</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 原生</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.statusCode = 404</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.statusMessage = &#39;hello&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.setHeader(&#39;XXX&#39;,&#39;YYY&#39;)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.write(&#39;hello you&#39;) // 设置响应体</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.end(&quot;hello world&quot;);// 设置响应体并结束链接</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// express</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.status(500)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.set(&#39;aaa&#39;,&#39;bbb&#39;)// 设置响应头</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.send(&#39;你好&#39;)// 设置响应体，send方法会自动在响应头添加字符编码，所以不会乱码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这些方法可以链式调用</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">status</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;xxx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;yyy&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;我勒个去&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,3),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
