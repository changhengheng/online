import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const D=JSON.parse('{"title":"获取请求路径和查询字符串","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/47.获取请求路径和查询字符串.md","filePath":"program/frontend/Node/chapter1/47.获取请求路径和查询字符串.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter1/47.获取请求路径和查询字符串.md"},o=l(`<h1 id="获取请求路径和查询字符串" tabindex="-1">获取请求路径和查询字符串 <a class="header-anchor" href="#获取请求路径和查询字符串" aria-label="Permalink to &quot;获取请求路径和查询字符串&quot;">​</a></h1><p>为什么要获取请求路径？</p><p>因为根据不同的请求路径，服务器可以选择返回不同的请求结果。</p><p>查询字符串也是一样的，服务器可以根据传递的不同query参数的值选择返回不同的结果，这就是动态网站的关键所在。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 1.导入URL模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2.解析request.url</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(request.url); </span><span style="color:#6A737D;">// request.url已经包含请求路径和查询字符串了，但是使用起来不方便，所以需要url内置模块处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(request.url); </span><span style="color:#6A737D;">// 解析请求路径和查询字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    Url {</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: null,</span></span>
<span class="line"><span style="color:#6A737D;">          slashes: null,</span></span>
<span class="line"><span style="color:#6A737D;">          auth: null,</span></span>
<span class="line"><span style="color:#6A737D;">          host: null,</span></span>
<span class="line"><span style="color:#6A737D;">          port: null,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: null,</span></span>
<span class="line"><span style="color:#6A737D;">          hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">          search: null,</span></span>
<span class="line"><span style="color:#6A737D;">          query: null,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          path: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;/favicon.ico&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// pathname是最终解析出来的路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { pathname } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res; </span><span style="color:#6A737D;">// /favicon.ico</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(pathname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 解析query参数，url.parse接受第二个参数，是一个布尔值，如果为true，query参数将被解析为一个对象，而不再是字符串</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> url.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(request.url, </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(res2);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        Url {</span></span>
<span class="line"><span style="color:#6A737D;">            protocol: null,</span></span>
<span class="line"><span style="color:#6A737D;">            slashes: null,</span></span>
<span class="line"><span style="color:#6A737D;">            auth: null,</span></span>
<span class="line"><span style="color:#6A737D;">            host: null,</span></span>
<span class="line"><span style="color:#6A737D;">            port: null,</span></span>
<span class="line"><span style="color:#6A737D;">            hostname: null,</span></span>
<span class="line"><span style="color:#6A737D;">            hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">            search: null,</span></span>
<span class="line"><span style="color:#6A737D;">            query: [Object: null prototype] {}, // query变成了一个对象，[Object: null prototype]没什么实际意义，只是说明query是一个原型为null的对象</span></span>
<span class="line"><span style="color:#6A737D;">            pathname: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            path: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            href: &#39;/favicon.ico&#39;</span></span>
<span class="line"><span style="color:#6A737D;">          }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> { query } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res2;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(query);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 响应请求</span></span>
<span class="line"><span style="color:#E1E4E8;">  response.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;9001&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">http</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 1.导入URL模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">request</span><span style="color:#24292E;">, </span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2.解析request.url</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(request.url); </span><span style="color:#6A737D;">// request.url已经包含请求路径和查询字符串了，但是使用起来不方便，所以需要url内置模块处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(request.url); </span><span style="color:#6A737D;">// 解析请求路径和查询字符串</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">    Url {</span></span>
<span class="line"><span style="color:#6A737D;">          protocol: null,</span></span>
<span class="line"><span style="color:#6A737D;">          slashes: null,</span></span>
<span class="line"><span style="color:#6A737D;">          auth: null,</span></span>
<span class="line"><span style="color:#6A737D;">          host: null,</span></span>
<span class="line"><span style="color:#6A737D;">          port: null,</span></span>
<span class="line"><span style="color:#6A737D;">          hostname: null,</span></span>
<span class="line"><span style="color:#6A737D;">          hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">          search: null,</span></span>
<span class="line"><span style="color:#6A737D;">          query: null,</span></span>
<span class="line"><span style="color:#6A737D;">          pathname: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          path: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">          href: &#39;/favicon.ico&#39;</span></span>
<span class="line"><span style="color:#6A737D;">        }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// pathname是最终解析出来的路径</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { pathname } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res; </span><span style="color:#6A737D;">// /favicon.ico</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(pathname);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 解析query参数，url.parse接受第二个参数，是一个布尔值，如果为true，query参数将被解析为一个对象，而不再是字符串</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> url.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(request.url, </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(res2);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* </span></span>
<span class="line"><span style="color:#6A737D;">        Url {</span></span>
<span class="line"><span style="color:#6A737D;">            protocol: null,</span></span>
<span class="line"><span style="color:#6A737D;">            slashes: null,</span></span>
<span class="line"><span style="color:#6A737D;">            auth: null,</span></span>
<span class="line"><span style="color:#6A737D;">            host: null,</span></span>
<span class="line"><span style="color:#6A737D;">            port: null,</span></span>
<span class="line"><span style="color:#6A737D;">            hostname: null,</span></span>
<span class="line"><span style="color:#6A737D;">            hash: null,</span></span>
<span class="line"><span style="color:#6A737D;">            search: null,</span></span>
<span class="line"><span style="color:#6A737D;">            query: [Object: null prototype] {}, // query变成了一个对象，[Object: null prototype]没什么实际意义，只是说明query是一个原型为null的对象</span></span>
<span class="line"><span style="color:#6A737D;">            pathname: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            path: &#39;/favicon.ico&#39;,</span></span>
<span class="line"><span style="color:#6A737D;">            href: &#39;/favicon.ico&#39;</span></span>
<span class="line"><span style="color:#6A737D;">          }</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> { query } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res2;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(query);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 响应请求</span></span>
<span class="line"><span style="color:#24292E;">  response.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;9001&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function c(t,r,y,E,i,u){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{D as __pageData,h as default};
