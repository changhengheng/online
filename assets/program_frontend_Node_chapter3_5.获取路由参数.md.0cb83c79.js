import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19358895.js";const d=JSON.parse('{"title":"获取路由参数","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/5.获取路由参数.md","filePath":"program/frontend/Node/chapter3/5.获取路由参数.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter3/5.获取路由参数.md"},o=p(`<h1 id="获取路由参数" tabindex="-1">获取路由参数 <a class="header-anchor" href="#获取路由参数" aria-label="Permalink to &quot;获取路由参数&quot;">​</a></h1><p>路由参数指的是 URL 路径中的参数（数据）。</p><p>这里获取路由参数其实就是指获取由前端通过路由传递给后端的路由参数，也就是常见的params和query参数：</p><ul><li>query参数即查询字符串，不属于路径</li><li>params参数直接拼接在路径上，属于路径的一部分</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1.引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建应用对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.创建路由</span></span>
<span class="line"><span style="color:#6A737D;">// 路由参数是命名的 URL 段，用于捕获在 URL 中的位置指定的值。 捕获的值填充到 req.params 对象中，路径中指定的路由参数的名称作为它们各自的键。</span></span>
<span class="line"><span style="color:#6A737D;">// params 参数是路径的一部分，被捕获的路径就是params参数，没捕获的就还是路径</span></span>
<span class="line"><span style="color:#6A737D;">// 可以捕获多个params参数</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/:id/a/:b&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取params参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(req.params);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解决中文乱码问题</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">setHeader</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Content-Type&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;text/html;charset=utf-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;商品详情&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4.监听端口，开启服务</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1.引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">express</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;express&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建应用对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">express</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.创建路由</span></span>
<span class="line"><span style="color:#6A737D;">// 路由参数是命名的 URL 段，用于捕获在 URL 中的位置指定的值。 捕获的值填充到 req.params 对象中，路径中指定的路由参数的名称作为它们各自的键。</span></span>
<span class="line"><span style="color:#6A737D;">// params 参数是路径的一部分，被捕获的路径就是params参数，没捕获的就还是路径</span></span>
<span class="line"><span style="color:#6A737D;">// 可以捕获多个params参数</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/:id/a/:b&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">req</span><span style="color:#24292E;">, </span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取params参数</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(req.params);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解决中文乱码问题</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">setHeader</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Content-Type&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;text/html;charset=utf-8&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;商品详情&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 4.监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,y,i,F){return a(),n("div",null,e)}const q=s(l,[["render",t]]);export{d as __pageData,q as default};
