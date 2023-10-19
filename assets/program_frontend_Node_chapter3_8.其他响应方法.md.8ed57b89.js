import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.19358895.js";const D=JSON.parse('{"title":"其他响应方法","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter3/8.其他响应方法.md","filePath":"program/frontend/Node/chapter3/8.其他响应方法.md","lastUpdated":1697287289000}'),l={name:"program/frontend/Node/chapter3/8.其他响应方法.md"},o=p(`<h1 id="其他响应方法" tabindex="-1">其他响应方法 <a class="header-anchor" href="#其他响应方法" aria-label="Permalink to &quot;其他响应方法&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">express</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;express&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建应用对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">express</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建路由</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">req</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 响应只能指定一个，指定多个时只有第一个有效</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 跳转相应——重定向</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 路由匹配成功执行这个响应时会重定向到对应网址</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    重定向的过程：</span></span>
<span class="line"><span style="color:#6A737D;">    第一个请求发给 /，返回响应状态码302 Found，响应头Location字段的键值为将要重定向的网址</span></span>
<span class="line"><span style="color:#6A737D;">    浏览器向Location的键值发送第二个请求，即为重定向</span></span>
<span class="line"><span style="color:#6A737D;">    HTTP 302 Found 重定向状态码表明请求的资源被暂时的移动到了由该 HTTP 响应的响应头 Location 指定的 URL 上。浏览器会重定向到这个 URL，但是搜索引擎不会对该资源的链接进行更新 (In SEO-speak, it is said that the link-juice is not sent to the new URL)。</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.redirect(&quot;http://www.baidu.com&quot;);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 下载响应</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// download方法接收一个文件路径</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 虽然download响应会直接下载文件，但本质上还是使用的响应报文，可以抓包查看。其中content-disposition为attachment，filename为文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.download(__dirname + &quot;/package.json&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// JSON响应</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// json方法会自动设置json格式的MIME类型，可以查看响应报文</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// res.json({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   name: &quot;尚硅谷&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//   value:&quot;让天下没有学得完的技术&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 响应文件内容</span></span>
<span class="line"><span style="color:#E1E4E8;">  res.</span><span style="color:#B392F0;">sendFile</span><span style="color:#E1E4E8;">(__dirname </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/package.json&#39;</span><span style="color:#E1E4E8;">)</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 响应只能指定一个，指定多个时只有第一个有效</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 跳转相应——重定向</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 路由匹配成功执行这个响应时会重定向到对应网址</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    重定向的过程：</span></span>
<span class="line"><span style="color:#6A737D;">    第一个请求发给 /，返回响应状态码302 Found，响应头Location字段的键值为将要重定向的网址</span></span>
<span class="line"><span style="color:#6A737D;">    浏览器向Location的键值发送第二个请求，即为重定向</span></span>
<span class="line"><span style="color:#6A737D;">    HTTP 302 Found 重定向状态码表明请求的资源被暂时的移动到了由该 HTTP 响应的响应头 Location 指定的 URL 上。浏览器会重定向到这个 URL，但是搜索引擎不会对该资源的链接进行更新 (In SEO-speak, it is said that the link-juice is not sent to the new URL)。</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.redirect(&quot;http://www.baidu.com&quot;);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 下载响应</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// download方法接收一个文件路径</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 虽然download响应会直接下载文件，但本质上还是使用的响应报文，可以抓包查看。其中content-disposition为attachment，filename为文件名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.download(__dirname + &quot;/package.json&quot;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// JSON响应</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// json方法会自动设置json格式的MIME类型，可以查看响应报文</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// res.json({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   name: &quot;尚硅谷&quot;,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//   value:&quot;让天下没有学得完的技术&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 响应文件内容</span></span>
<span class="line"><span style="color:#24292E;">  res.</span><span style="color:#6F42C1;">sendFile</span><span style="color:#24292E;">(__dirname </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/package.json&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 监听端口，开启服务</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,2),e=[o];function c(t,r,E,y,i,d){return n(),a("div",null,e)}const u=s(l,[["render",c]]);export{D as __pageData,u as default};
