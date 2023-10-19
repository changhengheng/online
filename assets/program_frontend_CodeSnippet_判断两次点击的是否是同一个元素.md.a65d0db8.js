import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.419948d5.js";const D=JSON.parse('{"title":"判断两次点击的是否是同一个元素","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/CodeSnippet/判断两次点击的是否是同一个元素.md","filePath":"program/frontend/CodeSnippet/判断两次点击的是否是同一个元素.md","lastUpdated":1693990729000}'),p={name:"program/frontend/CodeSnippet/判断两次点击的是否是同一个元素.md"},o=l(`<h1 id="判断两次点击的是否是同一个元素" tabindex="-1">判断两次点击的是否是同一个元素 <a class="header-anchor" href="#判断两次点击的是否是同一个元素" aria-label="Permalink to &quot;判断两次点击的是否是同一个元素&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 点击事件的回调</span></span>
<span class="line"><span style="color:#6A737D;">// 点击不同元素传入不同的标识</span></span>
<span class="line"><span style="color:#B392F0;">handleDblClick</span><span style="color:#E1E4E8;">(flag) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 判断是否是默认值</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDblClick </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> flag) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 如果是，执行某些操作</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 中断逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">	};</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 如果不是</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 保存当此点击的标识用作下一次判断</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isDblClick </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> flag</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 点击事件的回调</span></span>
<span class="line"><span style="color:#6A737D;">// 点击不同元素传入不同的标识</span></span>
<span class="line"><span style="color:#6F42C1;">handleDblClick</span><span style="color:#24292E;">(flag) {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 判断是否是默认值</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isDblClick </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> flag) {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 如果是，执行某些操作</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 中断逻辑</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">	};</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 如果不是</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ……</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 保存当此点击的标识用作下一次判断</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isDblClick </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> flag</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,2),e=[o];function t(c,r,i,E,y,_){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{D as __pageData,A as default};
