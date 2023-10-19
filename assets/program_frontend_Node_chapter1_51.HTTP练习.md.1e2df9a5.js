import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const g=JSON.parse('{"title":"HTTP练习","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/51.HTTP练习.md","filePath":"program/frontend/Node/chapter1/51.HTTP练习.md","lastUpdated":1697287289000}'),t={name:"program/frontend/Node/chapter1/51.HTTP练习.md"},p=l(`<h1 id="http练习" tabindex="-1">HTTP练习 <a class="header-anchor" href="#http练习" aria-label="Permalink to &quot;HTTP练习&quot;">​</a></h1><p>搭建 HTTP 服务，响应一个 4 行 3 列的表格，并且要求表格有 隔行换色效果 ，且 点击 单元格能 高亮显示</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">http</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">createServer</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">request</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模板字符串支持换行，可以用来写模板</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 后端可以给前端返回HTML标签,也可以返回一个完整的html页面(本质上其实是一个HTML标签)</span></span>
<span class="line"><span style="color:#E1E4E8;">  response.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;style&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                td{</span></span>
<span class="line"><span style="color:#9ECBFF;">                    padding:20px 40px;</span></span>
<span class="line"><span style="color:#9ECBFF;">                }</span></span>
<span class="line"><span style="color:#9ECBFF;">                table tr:nth-child(odd){</span></span>
<span class="line"><span style="color:#9ECBFF;">                    background-color:#eee;</span></span>
<span class="line"><span style="color:#9ECBFF;">                }</span></span>
<span class="line"><span style="color:#9ECBFF;">                table tr:nth-child(even){</span></span>
<span class="line"><span style="color:#9ECBFF;">                    background-color:#ccc;</span></span>
<span class="line"><span style="color:#9ECBFF;">                }</span></span>
<span class="line"><span style="color:#9ECBFF;">                table,td {</span></span>
<span class="line"><span style="color:#9ECBFF;">                    border-collapse:collapse;</span></span>
<span class="line"><span style="color:#9ECBFF;">                }</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/style&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;table border&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/table&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;script&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                let tds = document.querySelectorAll(&#39;td&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">                tds.forEach(item=&gt;{</span></span>
<span class="line"><span style="color:#9ECBFF;">                    item.onclick = function(){</span></span>
<span class="line"><span style="color:#9ECBFF;">                        this.style.background = &#39;hotpink&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">                    }</span></span>
<span class="line"><span style="color:#9ECBFF;">                })</span></span>
<span class="line"><span style="color:#9ECBFF;">            &lt;/script&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">        &lt;/html&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">    \`</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">server.</span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;9001&quot;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;启动成功！&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 引入模块</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">http</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建服务对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">server</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">createServer</span><span style="color:#24292E;">((</span><span style="color:#E36209;">request</span><span style="color:#24292E;">, </span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模板字符串支持换行，可以用来写模板</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 后端可以给前端返回HTML标签,也可以返回一个完整的html页面(本质上其实是一个HTML标签)</span></span>
<span class="line"><span style="color:#24292E;">  response.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">        &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;head&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;style&gt;</span></span>
<span class="line"><span style="color:#032F62;">                td{</span></span>
<span class="line"><span style="color:#032F62;">                    padding:20px 40px;</span></span>
<span class="line"><span style="color:#032F62;">                }</span></span>
<span class="line"><span style="color:#032F62;">                table tr:nth-child(odd){</span></span>
<span class="line"><span style="color:#032F62;">                    background-color:#eee;</span></span>
<span class="line"><span style="color:#032F62;">                }</span></span>
<span class="line"><span style="color:#032F62;">                table tr:nth-child(even){</span></span>
<span class="line"><span style="color:#032F62;">                    background-color:#ccc;</span></span>
<span class="line"><span style="color:#032F62;">                }</span></span>
<span class="line"><span style="color:#032F62;">                table,td {</span></span>
<span class="line"><span style="color:#032F62;">                    border-collapse:collapse;</span></span>
<span class="line"><span style="color:#032F62;">                }</span></span>
<span class="line"><span style="color:#032F62;">            &lt;/style&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/head&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;body&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;table border&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">                &lt;tr&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;td&gt;xxx&lt;/td&gt;&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;/table&gt;</span></span>
<span class="line"><span style="color:#032F62;">            &lt;script&gt;</span></span>
<span class="line"><span style="color:#032F62;">                let tds = document.querySelectorAll(&#39;td&#39;)</span></span>
<span class="line"><span style="color:#032F62;">                tds.forEach(item=&gt;{</span></span>
<span class="line"><span style="color:#032F62;">                    item.onclick = function(){</span></span>
<span class="line"><span style="color:#032F62;">                        this.style.background = &#39;hotpink&#39;</span></span>
<span class="line"><span style="color:#032F62;">                    }</span></span>
<span class="line"><span style="color:#032F62;">                })</span></span>
<span class="line"><span style="color:#032F62;">            &lt;/script&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/body&gt;</span></span>
<span class="line"><span style="color:#032F62;">        &lt;/html&gt;</span></span>
<span class="line"><span style="color:#032F62;">    \`</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">server.</span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;9001&quot;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;启动成功！&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><blockquote><p>JS代码可以直接写html、css和前端js代码，但是这样写的代码没有语法提示和代码高亮</p></blockquote>`,4),o=[p];function e(c,r,y,i,E,F){return n(),a("div",null,o)}const x=s(t,[["render",e]]);export{g as __pageData,x as default};
