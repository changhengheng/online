import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.19358895.js";const B=JSON.parse('{"title":"Buffer","description":"","frontmatter":{},"headers":[],"relativePath":"program/frontend/Node/chapter1/9.Buffer.md","filePath":"program/frontend/Node/chapter1/9.Buffer.md","lastUpdated":1697287289000}'),p={name:"program/frontend/Node/chapter1/9.Buffer.md"},o=l(`<h1 id="buffer" tabindex="-1">Buffer <a class="header-anchor" href="#buffer" aria-label="Permalink to &quot;Buffer&quot;">​</a></h1><p>Buffer 中文译为“缓冲区”，本质上是一个类似于Array的对象，用于表示固定长度的字节序列</p><blockquote><p>字节序列是指多字节数据在计算机内存中存储或者网络传输时各字节的存储顺序。</p></blockquote><p>通俗讲，Buffer 就是一段固定长度的内存空间，用于处理二进制数据。</p><p>Buffer 特点：</p><ul><li>大小固定且无法调整</li><li>性能较好，可以直接操作计算机内存</li><li>Buffer中每个元素的大小为1字节（byte）</li></ul><blockquote><p>1byte = 8bit，通俗讲，就是用8个0或1表示</p></blockquote><p>Buffer的创建主要有3种方式：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 1.alloc</span></span>
<span class="line"><span style="color:#6A737D;">// Buffer 模块会在每次Node程序执行时被自动导入，可以视为一个全局变量，不用自动导入</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">alloc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// 创建一个10字节的Buffer alloc是分配的意思</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf1); </span><span style="color:#6A737D;">// &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt; alloc 创建的buffer每一个二进制位都会归0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.allocUnsafe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">allocUnsafe</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf2); </span><span style="color:#6A737D;">// &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt; unsafe创建的Buffer可能会包含旧的内存数据：内存空间是可以复用的，一个程序执行时可以使用上一个执行完的程序使用过的内存空间，alloc创建buffer时会清零每一个二进制位，但allocUnsafe并不会清空旧内存的数据，可能会有数据遗留</span></span>
<span class="line"><span style="color:#6A737D;">// allocUnsafe创建Buffer速度比alloc快，因为不需要清零</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.from 用于将一个字符串或数组转为Buffer</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf3 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(buf3); </span><span style="color:#6A737D;">// &lt;Buffer 68 65 6c 6c 6f&gt; 字符串的每个字母会转成Unicode码表上对应的数字，数字会转成二进制存到Buffer当中</span></span>
<span class="line"><span style="color:#6A737D;">// Unicode完全兼容ASCII码表</span></span>
<span class="line"><span style="color:#6A737D;">// 68 65 6c 是16进制表示二进制</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 转数组</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> buf4 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Buffer.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">312</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4314</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;"> (buf4); </span><span style="color:#6A737D;">// &lt;Buffer 17 38 da 22 03 04 17&gt; 每一个数字会被转成16进制表示的二进制，存到Buffer中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 1.alloc</span></span>
<span class="line"><span style="color:#6A737D;">// Buffer 模块会在每次Node程序执行时被自动导入，可以视为一个全局变量，不用自动导入</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">alloc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// 创建一个10字节的Buffer alloc是分配的意思</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf1); </span><span style="color:#6A737D;">// &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt; alloc 创建的buffer每一个二进制位都会归0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 2.allocUnsafe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">allocUnsafe</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf2); </span><span style="color:#6A737D;">// &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt; unsafe创建的Buffer可能会包含旧的内存数据：内存空间是可以复用的，一个程序执行时可以使用上一个执行完的程序使用过的内存空间，alloc创建buffer时会清零每一个二进制位，但allocUnsafe并不会清空旧内存的数据，可能会有数据遗留</span></span>
<span class="line"><span style="color:#6A737D;">// allocUnsafe创建Buffer速度比alloc快，因为不需要清零</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 3.from 用于将一个字符串或数组转为Buffer</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf3 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(buf3); </span><span style="color:#6A737D;">// &lt;Buffer 68 65 6c 6c 6f&gt; 字符串的每个字母会转成Unicode码表上对应的数字，数字会转成二进制存到Buffer当中</span></span>
<span class="line"><span style="color:#6A737D;">// Unicode完全兼容ASCII码表</span></span>
<span class="line"><span style="color:#6A737D;">// 68 65 6c 是16进制表示二进制</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 转数组</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> buf4 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Buffer.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">23</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">312</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4314</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;"> (buf4); </span><span style="color:#6A737D;">// &lt;Buffer 17 38 da 22 03 04 17&gt; 每一个数字会被转成16进制表示的二进制，存到Buffer中</span></span></code></pre></div>`,9),e=[o];function c(r,t,y,f,E,i){return n(),a("div",null,e)}const F=s(p,[["render",c]]);export{B as __pageData,F as default};
