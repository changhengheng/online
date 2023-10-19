import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.419948d5.js";const F=JSON.parse('{"title":"创建HTTP服务","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/42.创建HTTP服务.md","filePath":"program/frontend/Node/chapter1/42.创建HTTP服务.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter1/42.创建HTTP服务.md"},o=p(`<h1 id="创建http服务" tabindex="-1">创建HTTP服务 <a class="header-anchor" href="#创建http服务" aria-label="Permalink to &quot;创建HTTP服务&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1.引入http模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建服务对象  createServer用来创建一个http服务，接收一个回调函数，返回一个对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行；每次接收到请求，都会执行（一个请求就是network列表里的一项）；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    response.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello world&quot;</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 设置响应体并结束响应（hello world会跑到响应体中去）</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.监听端口，启动服务</span></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">9000</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 参数一是端口，即应用程序的标识；参数二是一个回调函数，服务启动成功之后执行，即只执行一次，因为服务只能启动一次</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 服务启动成功之后，当前计算机的IP下的9000端口就被这个服务占用了，只要有访问该IP下9000端口的http请求，都会交由这个服务处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 浏览器可以发送HTTP请求，可以输入IP+端口测试服务是否启动成功</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;启动成功！&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1.引入http模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">http</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.创建服务对象  createServer用来创建一个http服务，接收一个回调函数，返回一个对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">request</span><span style="color:#24292E;">, </span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// request 意为请求. 是对请求报文的封装对象, 通过 request 对象可以获得请求报文的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// response 意为响应. 是对响应报文的封装对象, 通过 response 对象可以设置响应报文</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 回调函数的执行时机： 当接收到 HTTP 请求的时候，就会执行；每次接收到请求，都会执行（一个请求就是network列表里的一项）；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    response.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello world&quot;</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 设置响应体并结束响应（hello world会跑到响应体中去）</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.监听端口，启动服务</span></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">9000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 参数一是端口，即应用程序的标识；参数二是一个回调函数，服务启动成功之后执行，即只执行一次，因为服务只能启动一次</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 服务启动成功之后，当前计算机的IP下的9000端口就被这个服务占用了，只要有访问该IP下9000端口的http请求，都会交由这个服务处理</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 浏览器可以发送HTTP请求，可以输入IP+端口测试服务是否启动成功</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;启动成功！&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,2),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{F as __pageData,_ as default};
