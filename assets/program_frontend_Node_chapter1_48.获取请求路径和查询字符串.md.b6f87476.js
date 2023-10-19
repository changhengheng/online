import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const h=JSON.parse('{"title":"获取请求路径和查询字符串","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/48.获取请求路径和查询字符串.md","filePath":"program/frontend/Node/chapter1/48.获取请求路径和查询字符串.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter1/48.获取请求路径和查询字符串.md"},o=p(`<h1 id="获取请求路径和查询字符串" tabindex="-1">获取请求路径和查询字符串 <a class="header-anchor" href="#获取请求路径和查询字符串" aria-label="Permalink to &quot;获取请求路径和查询字符串&quot;">​</a></h1><p>和上一节功能一样，但是提取方式不一样</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1.实例化URL对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// URL构造函数接收一到两个参数，如果是一个参数，必须是一个合法的URL：协议、域名或IP、端口（默认端口可省略）、路径（根路径可省略）、查询字符串（可选）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果是两个参数，参数一可以是路径+查询字符串，参数二则需要补全参数一为合法的URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://www.xxx.com:80/search?keyword=qq&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 接收一个参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(url1);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    URL {</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;http://www.xxx.com/search?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          origin: &#39;http://www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: &#39;http:&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          username: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          host: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          port: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/search&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          search: &#39;?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          searchParams: URLSearchParams { &#39;keyword&#39; =&gt; &#39;qq&#39; },</span></span>
<span class="line"><span style="color:#6A737D;">          hash: &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(request.url, </span><span style="color:#9ECBFF;">&quot;http://www.xxx.cn&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 参数二不重要只要合法即可</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        URL {</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;http://www.xxx.com/search?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          origin: &#39;http://www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: &#39;http:&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          username: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          host: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          port: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/search&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          search: &#39;?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          searchParams: URLSearchParams { &#39;keyword&#39; =&gt; &#39;qq&#39; },</span></span>
<span class="line"><span style="color:#6A737D;">          hash: &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(url2);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 获取查询字符串（search依然是一个字符串，获取起来不方便，使用searchParams可以获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(url2.searchParams.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;keyword&quot;</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">// searchParams的参数必须通过get方法才能获取 </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 响应请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  response.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;9001&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">http</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">request</span><span style="color:#24292E;">, </span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1.实例化URL对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// URL构造函数接收一到两个参数，如果是一个参数，必须是一个合法的URL：协议、域名或IP、端口（默认端口可省略）、路径（根路径可省略）、查询字符串（可选）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果是两个参数，参数一可以是路径+查询字符串，参数二则需要补全参数一为合法的URL</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> url1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://www.xxx.com:80/search?keyword=qq&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 接收一个参数</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(url1);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    URL {</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;http://www.xxx.com/search?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          origin: &#39;http://www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: &#39;http:&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          username: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          host: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          port: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/search&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          search: &#39;?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          searchParams: URLSearchParams { &#39;keyword&#39; =&gt; &#39;qq&#39; },</span></span>
<span class="line"><span style="color:#6A737D;">          hash: &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> url2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(request.url, </span><span style="color:#032F62;">&quot;http://www.xxx.cn&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 参数二不重要只要合法即可</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        URL {</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;http://www.xxx.com/search?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          origin: &#39;http://www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: &#39;http:&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          username: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          password: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          host: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: &#39;www.xxx.com&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          port: &#39;&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/search&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          search: &#39;?keyword=qq&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          searchParams: URLSearchParams { &#39;keyword&#39; =&gt; &#39;qq&#39; },</span></span>
<span class="line"><span style="color:#6A737D;">          hash: &#39;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(url2);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 获取查询字符串（search依然是一个字符串，获取起来不方便，使用searchParams可以获取</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(url2.searchParams.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;keyword&quot;</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">// searchParams的参数必须通过get方法才能获取 </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 响应请求</span></span>
<span class="line"><span style="color:#24292E;">  response.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;9001&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,3),e=[o];function c(t,r,y,E,i,A){return n(),a("div",null,e)}const w=s(l,[["render",c]]);export{h as __pageData,w as default};
